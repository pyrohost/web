import { generateCodeVerifier, generateState } from "arctic";
import { serializeCookie } from "oslo/cookie";

import { discord, github, modrinth, oauthProviders, twitch } from "@/lib/api/auth";
import { type NextRequest, NextResponse } from "next/server";
import { getProviderOAuthURL } from "@/lib/api/oauth";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, { params }: { params: { provider: string } }) {
	const provider = params.provider;

	if (!oauthProviders.includes(provider)) {
		return new Response("Invalid provider", { status: 400 });
	}

	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = await getProviderOAuthURL(provider, state, codeVerifier);

	cookies().set(`${provider}_oauth_state`, state, {
		httpOnly: true,
		sameSite: "lax",
		maxAge: 60 * 5,
		secure: process.env.NODE_ENV === "production",
	});

	cookies().set(`${provider}_oauth_code_verifier`, codeVerifier, {
		httpOnly: true,
		sameSite: "lax",
		maxAge: 60 * 5,
		secure: process.env.NODE_ENV === "production",
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
		},
	});
}
