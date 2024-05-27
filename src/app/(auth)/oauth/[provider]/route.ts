import { generateState } from "arctic";
import { serializeCookie } from "oslo/cookie";

import { discord, github, oauthProviders, twitch } from "@/lib/api/auth";
import { NextRequest, NextResponse } from "next/server";

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
	req: NextRequest,
	{ params }: { params: { provider: string } },
) {
	const provider = params.provider;

	if (!oauthProviders.includes(provider)) {
		return new Response("Invalid provider", { status: 400 });
	}

	const state = generateState();
	const url = await createProviderAuthorizationURL(provider, state);

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
			"Set-Cookie": serializeCookie(`${provider}_oauth_state`, state, {
				httpOnly: true,
				sameSite: "strict",
				maxAge: 60 * 5,
				secure: process.env.NODE_ENV === "production",
			}),
		},
	});
}
