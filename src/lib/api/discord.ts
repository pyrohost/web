export interface OAuthTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export interface TokenInfo {
    access_token: string;
    refresh_token: string;
    expires_at: Date;
}

class APIError extends Error {
    constructor(
        public status: number,
        public message: string,
    ) {
        super(message);
    }
}

class DiscordAPI {
    private baseURL: string;
    private clientId: string;
    private clientSecret: string;
    private redirectUri: string;

    constructor() {
        this.baseURL = 'https://discord.com/api/v10';
        this.clientId = process.env.DISCORD_CLIENT_ID!;
        this.clientSecret = process.env.DISCORD_CLIENT_SECRET!;
        this.redirectUri = process.env.DISCORD_LINKED_ROLE_REDIRECT!;
    }

    private async request<T>(path: string, options: RequestInit): Promise<T> {
        const response = await fetch(`${this.baseURL}${path}`, options);
        if (!response.ok) {
            const body = await response.text();
            throw new APIError(
                response.status,
                `Error fetching ${path}: [${response.status}] ${response.statusText}\n${body}`,
            );
        }
        return (await response.json()) as T;
    }

    async getOAuthTokens(code: string): Promise<TokenInfo> {
        const body = new URLSearchParams({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'authorization_code',
            code,
            redirect_uri: this.redirectUri,
        });

        const tokenResponse = await this.request<OAuthTokenResponse>('/oauth2/token', {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return {
            access_token: tokenResponse.access_token,
            refresh_token: tokenResponse.refresh_token,
            expires_at: new Date(Date.now() + tokenResponse.expires_in * 1000),
        };
    }

    async getAccessToken(tokens: TokenInfo): Promise<TokenInfo> {
        if (Date.now() < tokens.expires_at.getTime()) {
            return tokens;
        }

        const body = new URLSearchParams({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'refresh_token',
            refresh_token: tokens.refresh_token,
            redirect_uri: this.redirectUri,
        });

        const newTokens = await this.request<OAuthTokenResponse>('/oauth2/token', {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return {
            access_token: newTokens.access_token,
            refresh_token: newTokens.refresh_token,
            expires_at: new Date(Date.now() + newTokens.expires_in * 1000),
        };
    }

    async getUserData(tokens: TokenInfo): Promise<any> {
        return await this.request('/users/@me', {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
            },
        });
    }

    async pushMetadata(tokens: TokenInfo, metadata: Record<string, any>) {
        await this.request(`/users/@me/applications/${this.clientId}/role-connection`, {
            method: 'PUT',
            body: JSON.stringify({ platform_name: 'Pyro', metadata }),
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async getMetadata(tokens: TokenInfo) {
        return await this.request(`/users/@me/applications/${this.clientId}/role-connection`, {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
            },
        });
    }
}

const discordAPI = new DiscordAPI();
export default discordAPI;
