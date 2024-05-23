import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { auth } from '@/lib/auth';
import discord from '@/lib/discord';
import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

// /**
//  * Route configured in the Discord developer console, the redirect Url to which
//  * the user is sent after approving the bot for their Discord account. This
//  * completes a few steps:
//  * 1. Uses the code to acquire Discord OAuth2 tokens
//  * 2. Uses the Discord Access Token to fetch the user profile
//  * 3. Stores the OAuth2 Discord Tokens in Redis / Firestore
//  * 4. Lets the user know it's all good and to go back to Discord
//  */
// app.get('/discord-oauth-callback', async (req, res) => {
//     try {
//       // 1. Uses the code and state to acquire Discord OAuth2 tokens
//       const code = req.query['code'];
//       const discordState = req.query['state'];

//       // make sure the state parameter exists
//       const { clientState } = req.signedCookies;
//       if (clientState !== discordState) {
//         console.error('State verification failed.');
//         return res.sendStatus(403);
//       }

//       const tokens = await discord.getOAuthTokens(code);

//       // 2. Uses the Discord Access Token to fetch the user profile
//       const meData = await discord.getUserData(tokens);
//       const userId = meData.user.id;
//       await storage.storeDiscordTokens(userId, {
//         access_token: tokens.access_token,
//         refresh_token: tokens.refresh_token,
//         expires_at: Date.now() + tokens.expires_in * 1000,
//       });

//       // 3. Update the users metadata, assuming future updates will be posted to the `/update-metadata` endpoint
//       await updateMetadata(userId);

//       res.send('You did it!  Now go back to Discord.');
//     } catch (e) {
//       console.error(e);
//       res.sendStatus(500);
//     }
//   });

// converted to nextjs:
export async function GET(req: NextRequest, res: Response) {
    let session = await auth();
    if (!session) {
        return redirect('/auth/login');
    }

    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');

    const tokens = await discord.getOAuthTokens(code as string);
    const discordUser = await discord.getUserData(tokens);

    prisma.user.update({
        where: {
            id: session.user?.id,
        },
        data: {
            discordLinkedRole: {
                create: {
                    discordId: discordUser.id,
                    accessToken: tokens.access_token,
                    refreshToken: tokens.refresh_token,
                    expiresAt: tokens.expires_at,
                },
            },
        },
    });

    let dbUser = await prisma.user.findUnique({
        where: {
            id: session.user?.id,
        },
    });

    if (!dbUser || !dbUser.stripeCustomerId) {
        throw new Error('Achievement Get: How Did We Get Here?');
    }

    const subscriptions = await stripe.subscriptions.list({
        customer: dbUser.stripeCustomerId,
        status: 'active',
    });

    if (subscriptions.data.length === 0) {
        return redirect('/account?error=NoActiveSubscriptionsDiscordLinkedRole');
    }

    await discord.pushMetadata(tokens, { services: subscriptions.data.length });

    return redirect('/account/?success=DiscordLinkedRole');
}
