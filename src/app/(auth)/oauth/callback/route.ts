import { OAuth2RequestError } from "arctic";
import { parseCookies } from "oslo/cookie";

import { cookies } from "next/headers";

import lucia, { github } from "@/lib/api/auth";
import userAPI from "@/lib/api/user";
import sessionAPI from "@/lib/api/session";

export async function GET(req: Request, res: Response) {
	const githubOAuthState = cookies().get("oauth_state")?.value;

	const url = new URL(req.url);
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");

	if (!state || !githubOAuthState || !code || githubOAuthState !== state) {
		return new Response("Invalid OAuth state", { status: 400 });
	}

	try {
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

		const existingUser = await userAPI.getUserByProvider(
			"github",
			githubUserResult.id.toString(),
		);

		if (existingUser) {
			await lucia.createSession(existingUser.id, {});
			return new Response(null, {
				status: 302,
				headers: {
					Location: "/account",
				},
			});
		}

		const primaryEmail = githubEmailsResult.find(
			(email: any) => email.primary && email.verified,
		)?.email;
		if (!primaryEmail) {
			return new Response("Primary email not found", { status: 400 });
		}

		const existingEmailUser = await userAPI.getUserByEmail(primaryEmail);
		if (existingEmailUser) {
			await sessionAPI.createAndSetSession(existingEmailUser.id);

			return new Response(null, {
				status: 302,
				headers: {
					Location: "/account",
				},
			});
		}

		const user = await userAPI.createUser(primaryEmail, undefined, {
			providerId: "github",
			providerUserId: githubUserResult.id.toString(),
		});

		await sessionAPI.createAndSetSession(user.id);

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	} catch (e) {
		console.error(e);
		if (e instanceof OAuth2RequestError) {
			return new Response(null, { status: 400 });
		}
		return new Response(null, { status: 500 });
	}
}
