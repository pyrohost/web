class DiscordAPI {
    private baseURL: string;

    constructor() {
        this.baseURL = 'https://discord.com/api/v10';
    }

    private async request<T>(path: string, options: RequestInit): Promise<T> {
        const response = await fetch(`${this.baseURL}${path}`, options);
        if (response.ok) {
            return (await response.json()) as T;
        } else {
            const body = await response.text();
            throw new Error(`Error fetching ${path}: [${response.status}] ${response.statusText}\n${body}`);
        }
    }

    async getOAuthTokens(code: string): Promise<{ access_token: string; refresh_token: string; expires_at: Date }> {
        const body = new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID!,
            client_secret: process.env.DISCORD_CLIENT_SECRET!,
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.DISCORD_LINKED_ROLE_REDIRECT!,
        });

        return await this.request('/oauth2/token', {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    async getAccessToken(tokens: { access_token: string; refresh_token: string; expires_at: Date }): Promise<string> {
        if (new Date() < tokens.expires_at) {
            return tokens.access_token;
        }

        const body = new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID!,
            client_secret: process.env.DISCORD_CLIENT_SECRET!,
            grant_type: 'refresh_token',
            refresh_token: tokens.refresh_token,
            redirect_uri: process.env.DISCORD_LINKED_ROLE_REDIRECT!,
        });

        const newTokens = await this.request<{ access_token: string; refresh_token: string; expires_in: number }>('/oauth2/token', {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return newTokens.access_token;
    }

    async getUserData(tokens: { access_token: string }): Promise<any> {
        return await this.request('/users/@me', {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
            },
        });
    }

    async pushMetadata(tokens: { access_token: string; refresh_token: string; expires_at: Date }, metadata: any) {
        const accessToken = await this.getAccessToken(tokens);

        await this.request(`/users/@me/applications/${process.env.DISCORD_CLIENT_ID!}/role-connection`, {
            method: 'PUT',
            body: JSON.stringify({
                platform_name: 'Pyro',
                metadata,
            }),
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async getMetadata(tokens: { access_token: string; refresh_token: string; expires_at: Date }) {
        const accessToken = await this.getAccessToken(tokens);

        return await this.request(`/users/@me/applications/${process.env.DISCORD_CLIENT_ID!}/role-connection`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
}

const discord = new DiscordAPI();
export default discord;
