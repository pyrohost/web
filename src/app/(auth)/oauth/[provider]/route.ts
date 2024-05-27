import { generateState } from "arctic";
import { serializeCookie } from "oslo/cookie";

import { discord, github, modrinth, oauthProviders, twitch } from "@/lib/api/auth";
import { type NextRequest, NextResponse } from "next/server";

async function createProviderAuthorizationURL(provider: string, state: string): Promise<URL> {
	switch (provider) {
		case "github":
			return github.createAuthorizationURL(state);
		case "discord":
			return discord.createAuthorizationURL(state, {
				scopes: ["identify", "email", "role_connections.write"],
			});
		case "twitch":
			return twitch.createAuthorizationURL(state);
		case "modrinth":
			return modrinth.createAuthorizationURL({ state: state, scopes: ["USER_READ", "USER_READ_EMAIL"] });
		default:
			throw new Error("Invalid provider");
	}
}

export async function GET(req: NextRequest, { params }: { params: { provider: string } }) {
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
				sameSite: "lax",
				maxAge: 60 * 5,
				secure: process.env.NODE_ENV === "production",
			}),
		},
	});
}
