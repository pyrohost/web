import type { Discord, GitHub, Twitch } from "arctic";
import type { OAuth2Client } from "oslo/oauth2";
import { discord, github, modrinth, twitch } from "@/lib/api/auth";

export interface OAuthResponse {
	id: string;
	email: string;
	accessToken?: string;
	refreshToken?: string;
	expiry?: Date;
}

export type OAuthProvider = GitHub | Discord | Twitch | OAuth2Client;

export async function getGitHubOAuthResponse(code: string): Promise<OAuthResponse> {
	const { accessToken } = await github.validateAuthorizationCode(code);

	const userRequest = await fetch("https://api.github.com/user", {
		headers: { Authorization: `token ${accessToken}` },
	});
	const userData = await userRequest.json();

	const emailRequest = await fetch("https://api.github.com/user/emails", {
		headers: { Authorization: `token ${accessToken}` },
	});
	const userEmails = await emailRequest.json();

	const primaryEmail = userEmails.find((email: any) => email.primary && email.verified)?.email;

	return {
		id: userData.id,
		email: primaryEmail,
		accessToken,
	};
}

export async function getDiscordOAuthResponse(code: string): Promise<OAuthResponse> {
	const { accessToken, refreshToken, accessTokenExpiresAt } = await discord.validateAuthorizationCode(code);

	const userRequest = await fetch("https://discord.com/api/v10/users/@me", {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	const userData = await userRequest.json();

	return {
		id: userData.id,
		email: userData.email,
		accessToken,
		refreshToken,
		expiry: accessTokenExpiresAt,
	};
}

export async function getTwitchOAuthResponse(code: string): Promise<OAuthResponse> {
	const { accessToken, refreshToken, accessTokenExpiresAt } = await twitch.validateAuthorizationCode(code);

	const userRequest = await fetch("https://id.twitch.tv/oauth2/userinfo", {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	const userData = await userRequest.json();

	return {
		id: userData.sub,
		email: userData.email,
		accessToken,
		refreshToken,
		expiry: accessTokenExpiresAt,
	};
}

export async function getModrinthOAuthResponse(code: string): Promise<OAuthResponse> {
	const tokens = await fetch("https://api.modrinth.com/_internal/oauth/token", {
		method: "POST",
		headers: {
			Authorization: process.env.MODRINTH_CLIENT_SECRET!,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "authorization_code",
			scopes: "USER_READ USER_READ_EMAIL",
			code,
			client_id: process.env.MODRINTH_CLIENT_ID!,
			redirect_uri: `${process.env.BASE_URL}/oauth/modrinth/callback`,
		}),
	}).then((res) => res.json());

	const userRequest = await fetch("https://api.modrinth.com/v2/user", {
		headers: { Authorization: `${tokens.access_token}` },
	});
	const userData = await userRequest.json();

	return {
		id: userData.id,
		email: userData.email,
		accessToken: tokens.access_token,
		expiry: new Date(Date.now() + tokens.expires_in * 1000),
	};
}

export async function getProviderOAuthURL(provider: string, state: string, codeVerifier: string): Promise<URL> {
	switch (provider) {
		case "github":
			return github.createAuthorizationURL(state);
		case "discord":
			return discord.createAuthorizationURL(state, { scopes: ["identify", "email", "role_connections.write"] });
		case "twitch":
			return twitch.createAuthorizationURL(state);
		case "modrinth":
			return modrinth.createAuthorizationURL({ state, scopes: ["USER_READ", "USER_READ_EMAIL"] });
		default:
			throw new Error("Invalid provider");
	}
}

export async function getProviderOAuthResponse(provider: string, code: string, codeVerifier?: string): Promise<OAuthResponse> {
	switch (provider) {
		case "github":
			return getGitHubOAuthResponse(code);
		case "discord":
			return getDiscordOAuthResponse(code);
		case "twitch":
			return getTwitchOAuthResponse(code);
		case "modrinth":
			return getModrinthOAuthResponse(code);

		default:
			throw new Error("Invalid provider");
	}
}
