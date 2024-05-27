import { github } from "@/lib/api/auth";
import sessionAPI from "@/lib/api/session";
import userAPI from "@/lib/api/user";
import { cookies } from "next/headers";

interface GitHubAuthResponse {
	id: string;
	email: string;
	accessToken?: string;
	refreshToken?: string;
	expiry?: Date;
}

async function fetchGitHubUserData(
	accessToken: string,
): Promise<{ userData: any; userEmails: any[] }> {
	const userDataResponse = await fetch("https://api.github.com/user", {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	const userEmailsResponse = await fetch("https://api.github.com/user/emails", {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	return {
		userData: await userDataResponse.json(),
		userEmails: await userEmailsResponse.json(),
	};
}

async function authenticateWithGitHub(
	code: string,
): Promise<GitHubAuthResponse> {
	const { accessToken } = await github.validateAuthorizationCode(code);
	const { userData, userEmails } = await fetchGitHubUserData(accessToken);
	const primaryEmail = userEmails.find((email) => email.primary)?.email;

	return {
		id: userData.id,
		email: primaryEmail,
		accessToken,
	};
}

export async function GET(
	request: Request,
	{ params }: { params: { provider: string } },
) {
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
			default:
				return new Response("Unsupported OAuth provider", { status: 400 });
		}
	} catch (error) {
		return new Response("Authentication failed", { status: 500 });
	}

	if (!authResponse) {
		return new Response("Authentication failed", { status: 500 });
	}

	let user = await userAPI.getUserByOAuthId(
		provider,
		authResponse.id.toString(),
	);
	if (user) {
		await sessionAPI.createAndSetSession(user.id);
	} else {
		user = await userAPI.getUserByEmail(authResponse.email);
		if (!user) {
			await userAPI.createUser({
				email: authResponse.email,
				oauth: {
					providerId: provider,
					providerUserId: authResponse.id.toString(),
				},
			});
		} else {
			await userAPI.linkOAuthAccount(
				user,
				provider,
				authResponse.id.toString(),
			);
			await sessionAPI.createAndSetSession(user.id);
		}
	}

	return new Response(null, {
		status: 302,
		headers: {
			Location: "/account",
		},
	});
}
