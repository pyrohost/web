import { getProviderOAuthResponse } from "@/lib/api/oauth";
import sessionAPI from "@/lib/api/session";
import userAPI, { getUserBySession } from "@/lib/api/user";
import type { User } from "@prisma/client";
import { cookies } from "next/headers";

export async function GET(request: Request, { params }: { params: { provider: string } }) {
	const provider = params.provider;
	const url = new URL(request.url);
	const authorizationCode = url.searchParams.get("code");
	const stateParam = url.searchParams.get("state");

	if (!authorizationCode || !stateParam) {
		return new Response("Invalid code or state", { status: 400 });
	}

	const storedState = cookies().get(`${provider}_oauth_state`);
	const codeVerifier = cookies().get(`${provider}_oauth_code_verifier`);
	if (!storedState || storedState.value !== stateParam || !codeVerifier) {
		return new Response("Invalid state", { status: 400 });
	}
	cookies().delete(`${provider}_oauth_state`);

	const oauthResponse = await getProviderOAuthResponse(provider, authorizationCode, codeVerifier.value);
	let user: User | null;

	const sessionUser = await getUserBySession();
	if (sessionUser) {
		user = await userAPI.getUserById(sessionUser.id);
		if (!user) {
			return new Response("Invalid session. Try logging out and logging in again.", { status: 400 });
		}

		await userAPI.linkOAuthAccount(user, provider, oauthResponse.id.toString(), {
			accessToken: oauthResponse.accessToken,
			refreshToken: oauthResponse.refreshToken,
			expiry: oauthResponse.expiry,
		});

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	}

	user = await userAPI.getUserByOAuthId(provider, oauthResponse.id.toString());
	if (user) {
		await sessionAPI.createAndSetSession(user.id);
		await userAPI.updateOAuthAccount(user, provider, {
			accessToken: oauthResponse.accessToken,
			refreshToken: oauthResponse.refreshToken,
			expiry: oauthResponse.expiry,
		});

		await userAPI.linkOrCreateExternalAccounts(user);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/account",
			},
		});
	}

	user = await userAPI.getUserByEmail(oauthResponse.email);

	if (!user) {
		user = await userAPI.createUser({
			email: oauthResponse.email,
			oauth: {
				providerId: provider,
				providerUserId: oauthResponse.id.toString(),
				accessToken: oauthResponse.accessToken,
				refreshToken: oauthResponse.refreshToken,
				expiry: oauthResponse.expiry,
			},
		});
	} else {
		await userAPI.linkOAuthAccount(user, provider, oauthResponse.id.toString(), {
			accessToken: oauthResponse.accessToken,
			refreshToken: oauthResponse.refreshToken,
			expiry: oauthResponse.expiry,
		});
	}
	
	await userAPI.linkOrCreateExternalAccounts(user);
	await sessionAPI.createAndSetSession(user.id);
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/account",
		},
	});
}
