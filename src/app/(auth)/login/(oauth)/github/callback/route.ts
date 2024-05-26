import { OAuth2RequestError } from 'arctic';
import { parseCookies } from 'oslo/cookie';

import { cookies } from 'next/headers';

import lucia, { github } from '@/lib/api/auth';
import userAPI from '@/lib/api/user';

// app.get("/login/github/callback", async (request: Request): Promise<Response> => {
// 	const cookies = parseCookies(request.headers.get("Cookie") ?? "");
// 	const stateCookie = cookies.get("github_oauth_state") ?? null;

// 	const url = new URL(request.url);
// 	const state = url.searchParams.get("state");
// 	const code = url.searchParams.get("code");

// 	// verify state
// 	if (!state || !stateCookie || !code || stateCookie !== state) {
// 		return new Response(null, {
// 			status: 400
// 		});
// 	}

// 	try {
// 		const tokens = await github.validateAuthorizationCode(code);
// 		const githubUserResponse = await fetch("https://api.github.com/user", {
// 			headers: {
// 				Authorization: `Bearer ${tokens.accessToken}`
// 			}
// 		});
// 		const githubUserResult: GitHubUserResult = await githubUserResponse.json();

// 		const existingUser = await db
// 			.table("user")
// 			.where("github_id", "=", githubUserResult.id)
// 			.get();

// 		if (existingUser) {
// 			const session = await lucia.createSession(existingUser.id, {});
// 			const sessionCookie = lucia.createSessionCookie(session.id);
// 			return new Response(null, {
// 				status: 302,
// 				headers: {
// 					Location: "/",
// 					"Set-Cookie": sessionCookie.serialize()
// 				}
// 			});
// 		}

// 		const userId = generateIdFromEntropySize(10); // 16 characters long
// 		await db.table("user").insert({
// 			id: userId,
// 			username: githubUserResult.login,
// 			github_id: githubUserResult.id
// 		});

// 		const session = await lucia.createSession(userId, {});
// 		const sessionCookie = lucia.createSessionCookie(session.id);
// 		return new Response(null, {
// 			status: 302,
// 			headers: {
// 				Location: "/",
// 				"Set-Cookie": sessionCookie.serialize()
// 			}
// 		});
// 	} catch (e) {
// 		console.log(e);
// 		if (e instanceof OAuth2RequestError) {
// 			// bad verification code, invalid credentials, etc
// 			return new Response(null, {
// 				status: 400
// 			});
// 		}
// 		return new Response(null, {
// 			status: 500
// 		});
// 	}
// });

// interface GitHubUserResult {
// 	id: number;
// 	login: string; // username
// }

export async function GET(req: Request, res: Response) {
    const githubOAuthState = cookies().get('github_oauth_state')?.value;

    const url = new URL(req.url);
    const state = url.searchParams.get('state');
    const code = url.searchParams.get('code');

    if (!state || !githubOAuthState || !code || githubOAuthState !== state) {
        return new Response('Invalid OAuth state', { status: 400 });
    }

    try {
        const tokens = await github.validateAuthorizationCode(code);
        const githubUserResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`,
            },
        });
        const githubUserResult = await githubUserResponse.json();


    } catch (e) {
        console.log(e);
        if (e instanceof OAuth2RequestError) {
            // bad verification code, invalid credentials, etc
            return new Response(null, { status: 400 });
        }
        return new Response(null, { status: 500 });
    }
}
