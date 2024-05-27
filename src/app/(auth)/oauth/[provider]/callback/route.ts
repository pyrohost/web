import { discord, github, modrinth } from "@/lib/api/auth";
import sessionAPI from "@/lib/api/session";
import userAPI from "@/lib/api/user";
import { cookies } from "next/headers";
import { OAuth2Client } from "oslo/oauth2";

interface AuthResponse {
	id: string;
	email: string;
	accessToken?: string;
	refreshToken?: string;
	expiry?: Date;
}

async function authenticateWithGitHub(code: string): Promise<AuthResponse> {
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

async function authenticateWithDiscord(code: string): Promise<AuthResponse> {
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

async function authenticateWithModrinth(code: string): Promise<AuthResponse> {
	const { access_token } = await modrinth.validateAuthorizationCode(code, {
		credentials: process.env.MODRINTH_CLIENT_SECRET!,
	});

	const userRequest = await fetch("https://api.modrinth.com/v2/user", {
		headers: { Authorization: `Bearer ${access_token}` },
	});
	const userData = await userRequest.json();

	return {
		id: userData.id,
		email: userData.email,
	};
}

export async function GET(request: Request, { params }: { params: { provider: string } }) {
	const provider = params.provider;
	const url = new URL(request.url);
	const authorizationCode = url.searchParams.get("code");
	const stateParam = url.searchParams.get("state");

	if (!authorizationCode || !stateParam) {
		return new Response("Invalid code or state", { status: 400 });
	}

	const storedState = cookies().get(`${provider}_oauth_state`);
	if (!storedState || storedState.value !== stateParam) {
		return new Response("Invalid state", { status: 400 });
	}

	cookies().delete(`${provider}_oauth_state`);

	let authResponse = null;
	try {
		switch (provider) {
			case "github":
				authResponse = await authenticateWithGitHub(authorizationCode);
				break;
			case "discord":
				authResponse = await authenticateWithDiscord(authorizationCode);
				break;
			case "modrinth":
				authResponse = await authenticateWithModrinth(authorizationCode);
				break;
			default:
				return new Response("Unsupported OAuth provider", { status: 400 });
		}
	} catch (error) {
		console.log(error);
		return new Response("Authentication failed (1000)", { status: 500 });
	}

	if (!authResponse) {
		return new Response("Authentication failed (1001)", { status: 500 });
	}

	if (!authResponse.email) {
		return new Response(`No email found for ${provider} account`, { status: 400 });
	}

	let user = await userAPI.getUserByOAuthId(provider, authResponse.id.toString());

	if (user) {
		await sessionAPI.createAndSetSession(user.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	}

	user = await userAPI.getUserByEmail(authResponse.email);

	if (!user) {
		user = await userAPI.createUser({
			email: authResponse.email,
			oauth: {
				providerId: provider,
				providerUserId: authResponse.id.toString(),
			},
		});
	} else {
		await userAPI.linkOAuthAccount(user, provider, authResponse.id.toString());
	}

	await sessionAPI.createAndSetSession(user.id);
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/account",
		},
	});
}
