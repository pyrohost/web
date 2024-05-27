import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Discord, GitHub, Twitch, Twitter } from "arctic";
import { Lucia, TimeSpan } from "lucia";

import prisma from "@/lib/api/prisma";
import { OAuth2Client } from "oslo/oauth2";

export const modrinth = new OAuth2Client(
	process.env.MODRINTH_CLIENT_ID!,
	"https://modrinth.com/auth/authorize",
	"https://api.modrinth.com/_internal/oauth/token",
	{
		redirectURI: `${process.env.BASE_URL!}/oauth/modrinth/callback`,
	},
);

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

export const discord = new Discord(process.env.DISCORD_CLIENT_ID!, process.env.DISCORD_CLIENT_SECRET!, `${process.env.BASE_URL!}/oauth/discord/callback`);

export const twitch = new Twitch(process.env.TWITCH_CLIENT_ID!, process.env.TWITCH_CLIENT_SECRET!, `${process.env.BASE_URL!}/oauth/twitch/callback`);

export const twitter = new Twitter(process.env.TWITTER_CLIENT_ID!, process.env.TWITTER_CLIENT_SECRET!, `${process.env.BASE_URL!}/oauth/twitter/callback`);

export const oauthProviders = ["github", "discord", "twitch", "twitter", "modrinth"];

const adapter = new PrismaAdapter(prisma.session, prisma.user);

const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: true,
		attributes: {
			secure: process.env.NODE_ENV === "production",
		},
	},
	getUserAttributes: (attributes) => {
		return {
			// info
			id: attributes.id,
			fullName: attributes.firstName && attributes.lastName ? `${attributes.firstName} ${attributes.lastName}` : null,
			firstName: attributes.firstName,
			lastName: attributes.lastName,

			// email
			email: attributes.email,
			emailVerified: attributes.emailVerified,
			admin: attributes.admin,

			// external
			stripeCustomerId: attributes.stripeCustomerId,
			pyrodactylUserId: attributes.pyrodactylUserId,
		};
	},
	sessionExpiresIn: new TimeSpan(1, "w"),
});

export default lucia;

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			id: string;
			fullName: string | null;
			firstName: string | null;
			lastName: string | null;
			email: string;
			emailVerified: boolean;
			admin: boolean;
			stripeCustomerId: string | null;
			pyrodactylUserId: string | null;
		};
	}
	// what the fuck
	export type SessionUser = Register["DatabaseUserAttributes"];
}
