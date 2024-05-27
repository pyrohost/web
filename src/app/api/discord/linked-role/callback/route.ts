// import { redirect } from 'next/navigation';
// import { type NextRequest } from 'next/server';

// import discord from '@/lib/api/discord';
// import prisma from '@/lib/api/prisma';
// import stripe from '@/lib/api/stripe';

// export async function GET(req: NextRequest, res: Response) {

//     if (!session) {
//         return redirect('/auth/login');
//     }

//     const searchParams = req.nextUrl.searchParams;
//     const code = searchParams.get('code');

//     if (!code) {
//         return redirect('/account/?error=NoCodeDiscordLinkedRole');
//     }

//     const discordTokens = await discord.getOAuthTokens(code);

//     const dbUser = await prisma.user.findUnique({
//         where: {
//             id: session.user?.id,
//         },
//         include: {
//             discordTokens: true,
//         },
//     });

//     if (!dbUser || !dbUser.stripeCustomerId) {
//         throw new Error('Achievement Get: How did we get here?');
//     }

//     await prisma.discordTokens.upsert({
//         where: {
//             userId: dbUser.id,
//         },
//         update: {
//             accessToken: discordTokens.access_token,
//             refreshToken: discordTokens.refresh_token,
//             expiresAt: discordTokens.expires_at,
//         },
//         create: {
//             userId: dbUser.id,
//             accessToken: discordTokens.access_token,
//             refreshToken: discordTokens.refresh_token,
//             expiresAt: discordTokens.expires_at,
//         },
//     });

//     const subscriptions = await stripe.subscriptions.list({
//         customer: dbUser.stripeCustomerId,
//         status: 'active',
//     });

//     await discord.pushMetadata(discordTokens, {
//         services: subscriptions.data.length,
//         customer_since: dbUser.createdAt,
//     });

//     return redirect('/account/?success=DiscordLinkedRole');
// }
