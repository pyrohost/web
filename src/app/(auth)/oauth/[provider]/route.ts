import { generateState } from "arctic";
import { serializeCookie } from "oslo/cookie";

import { discord, github, oauthProviders, twitch } from "@/lib/api/auth";

async function createProviderAuthorizationURL(
	provider: string,
	state: string,
): Promise<URL> {
	switch (provider) {
		case "github":
			return github.createAuthorizationURL(state);
		case "discord":
			return discord.createAuthorizationURL(state);
		case "twitch":
			return twitch.createAuthorizationURL(state);
		default:
			throw new Error("Invalid provider");
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

	const state = generateState();
	const url = await createProviderAuthorizationURL(params.provider, state);

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
			"Set-Cookie": serializeCookie(`${params.provider}_oauth_state`, state, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				maxAge: 60 * 10,
				path: "/",
			}),
		},
	});
}
