import lucia, { github } from "@/lib/api/auth";
import userAPI from "@/lib/api/user";
import { OAuth2RequestError } from "arctic";
import { parseCookies } from "oslo/cookie";

export async function GET(req: Request, res: Response) {
    const cookies = parseCookies(req.headers.get('Cookie') ?? '');
    const stateCookie = cookies.get('github_oauth_state') ?? null;

    const url = new URL(req.url);
    const state = url.searchParams.get('state');
    const code = url.searchParams.get('code');

    // verify state
    if (!state || !stateCookie || !code || stateCookie !== state) {
        return new Response(null, {
            status: 400,
        });
    }

    try {
        const tokens = await github.validateAuthorizationCode(code);
        const githubUserResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`,
            },
        });
        
        const githubUserResult: any = await githubUserResponse.json();
        const user = await userAPI.getUserByEmail(githubUserResult.email);

        if (!user) {
            // await userAPI.createUser({
            //     email: githubUserResult.email,
            //     passwordHash: null,
            // });
        }

    } catch (e) {
        console.log(e);
        if (e instanceof OAuth2RequestError) {
            // bad verification code, invalid credentials, etc
            return new Response(null, {
                status: 400,
            });
        }
        return new Response(null, {
            status: 500,
        });
    }
}