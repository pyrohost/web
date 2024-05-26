import { OAuth2RequestError } from "arctic";
import { parseCookies } from "oslo/cookie";

import { cookies } from "next/headers";

import lucia, { discord, github, oauthProviders, twitch } from "@/lib/api/auth";
import userAPI from "@/lib/api/user";
import sessionAPI from "@/lib/api/session";

export async function getProviderUserInfo(
	provider: string,
	code: string,
): Promise<{ providerId: string; primaryEmail?: string }> {
	switch (provider) {
		case "github":
			const tokens = await github.validateAuthorizationCode(code);
			const githubUserResponse = await fetch("https://api.github.com/user", {
				headers: {
					Authorization: `Bearer ${tokens.accessToken}`,
				},
			});

			const githubUserResult = await githubUserResponse.json();

			const githubEmailsResponse = await fetch(
				"https://api.github.com/user/emails",
				{
					headers: {
						Authorization: `Bearer ${tokens.accessToken}`,
					},
				},
			);

			const githubEmailsResult = await githubEmailsResponse.json();

			const primaryEmail = githubEmailsResult.find(
				(email: any) => email.primary && email.verified,
			)?.email;

			return {
				providerId: githubUserResult.id.toString(),
				primaryEmail,
			};
		case "discord":
			const discordTokens = await discord.validateAuthorizationCode(code);
			const discordUserResponse = await fetch(
				"https://discord.com/api/users/@me",
				{
					headers: {
						Authorization: `Bearer ${discordTokens.accessToken}`,
					},
				},
			);

			const discordUserResult = await discordUserResponse.json();

			return {
				providerId: discordUserResult.id,
				primaryEmail: discordUserResult.email,
			};
	}
}

export async function GET(
	req: Request,
	res: Response,
	{ params }: { params: { provider: string } },
) {
	if (!oauthProviders.includes(params.provider)) {
		return new Response("Invalid provider", { status: 400 });
	}

	const providerOAuthState = cookies().get(
		`${params.provider}_oauth_state`,
	)?.value;

	const url = new URL(req.url);
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");

	if (!state || !providerOAuthState || !code || providerOAuthState !== state) {
		return new Response("Invalid OAuth state", { status: 400 });
	}

	let { providerId, primaryEmail } = await getProviderUserInfo(
		params.provider,
		code,
	);

	if (!providerId || !primaryEmail) {
		return new Response("Provider response missing required data", {
			status: 400,
		});
	}

	const existingUser = await userAPI.getUserByProvider(
		params.provider,
		providerId,
	);

	if (!existingUser) {
		const existingEmailUser = await userAPI.getUserByEmail(primaryEmail);

		// Link the existing email user to the new provider
		if (existingEmailUser) {
			await userAPI.linkProviderToUser(
				existingEmailUser.id,
				params.provider,
				providerId,
			);

			await sessionAPI.createAndSetSession(existingEmailUser.id);
			return new Response(null, {
				status: 302,
				headers: {
					Location: "/account",
				},
			});
		}

		const user = await userAPI.createUser(primaryEmail, undefined, {
			providerId: params.provider,
			providerUserId: providerId,
		});

		await sessionAPI.createAndSetSession(user.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	} else {
		await sessionAPI.createAndSetSession(existingUser.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	}
}
