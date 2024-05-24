import wretch, { type Wretch, type WretchResponseChain } from 'wretch';
import { WretchError } from 'wretch/resolver';

interface ApiResponse<T> {
    object: string;
    attributes: T;
}

interface ApiListResponse<D, M> {
    object: string;
    data: ApiResponse<D>[];
    meta: M;
}

class BaseAPI {
    protected api: Wretch;

    constructor(baseURL: string, apiKey: string) {
        this.api = wretch(baseURL).auth(`Bearer ${apiKey}`).headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });
    }
    private getErrorMessage(status: number): string {
        const messages: { [key: number]: string } = {
            401: 'Unauthorized.',
            403: 'Forbidden.',
            404: 'Not Found.',
            422: 'Unprocessable Entity.',
            429: 'Too Many Requests.',
            500: 'Internal Server Error.',
        };

        return messages[status] || `Unknown error: ${status}`;
    }

    private handleError(err: any): never {
        if (err instanceof WretchError) {
            console.error(`${err.status} - ${err.url}\nMSG: ${err.message}`);
            throw new Error(this.getErrorMessage(err.status));
        }
        
        throw err;
    }

    private async handleResponse<T>(response: WretchResponseChain<unknown, unknown, undefined>): Promise<T> {
        try {
            return (await response.json()) as T;
        } catch (err) {
            this.handleError(err);
        }
    }

    protected async request<T>(
        method: 'get' | 'post' | 'put' | 'patch' | 'delete',
        path: string,
        body: any = undefined,
    ): Promise<ApiResponse<T>> {
        return await this.handleResponse<ApiResponse<T>>(this.api.url(path)[method](body));
    }

    protected async list<D, M>(path: string): Promise<ApiListResponse<D, M>> {
        return await this.handleResponse<ApiListResponse<D, M>>(this.api.url(path).get());
    }
}

export interface UserObject {
    id: number;
    external_id: any;
    uuid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
    root_admin: boolean;
    '2fa': boolean;
    created_at: string;
    updated_at: string;
}

export interface ServerObject {
    id: number;
    external_id: any;
    uuid: string;
    identifier: string;
    name: string;
    description: string;
    status?: string;
    suspended: boolean;
    limits: Limits;
    feature_limits: FeatureLimits;
    user: number;
    node: number;
    allocation: number;
    nest: number;
    egg: number;
    container: Container;
    updated_at: string;
    created_at: string;
}

export interface Limits {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: any;
    oom_disabled: boolean;
}

export interface FeatureLimits {
    databases: number;
    allocations: number;
    backups: number;
}

export interface Container {
    startup_command: string;
    image: string;
    installed: number;
    environment: { [key: string]: string };
}

export interface AllocationAttributes {
    id: number;
    ip: string;
    alias: any;
    port: number;
    notes: any;
    assigned: boolean;
}

class PterodactylApi extends BaseAPI {
    constructor(baseURL: string, apiKey: string) {
        super(baseURL, apiKey);
    }

    async getUserById(id: string): Promise<UserObject | null> {
        try {
            debugger;
            const response = await this.request<UserObject>('get', `/api/application/users/${id}`);
            return response.attributes;
        } catch (error) {
            return null;
        }
    }

    async getUserByEmail(email: string): Promise<UserObject | null> {
        try {
            const response = await this.list<UserObject, any>(
                `/api/application/users?filter[email]=${encodeURI(email)}&per_page=1`,
            );

            if (response.data.length !== 1) {
                return null;
            }

            return response.data[0]!.attributes;
        } catch (error) {
            return null;
        }
    }

    async getServerByExternalId(externalId: string): Promise<ServerObject | null> {
        try {
            const response = await this.request<ServerObject>('get', `/api/application/servers/external/${externalId}`);
            return response.attributes;
        } catch (error) {
            return null;
        }
    }

    async createUser(
        email: string,
        username: string,
        first_name: string,
        last_name: string,
        password: string,
    ): Promise<UserObject> {
        const response = await this.request<UserObject>('post', '/api/application/users', {
            email,
            username,
            first_name,
            last_name,
            password,
        });
        return response.attributes;
    }

    // todo: use locations to get the node id and thus the allocation,
    // VERY temporary solution

    async getFirstAvailableAllocation(nodeId: number): Promise<AllocationAttributes> {
        const response = await this.list<AllocationAttributes, any>(
            `/api/application/nodes/${nodeId}/allocations?filter[server_id]=false&per_page=1`,
        );

        if (response.data.length !== 1) {
            throw new Error('No available allocations');
        }

        return response.data[0]!.attributes;
    }

    // {
    //   "name": "Building",
    //   "user": 1,
    //   "egg": 1,
    //   "docker_image": "quay.io/pterodactyl/core:java",
    //   "startup": "java -Xms128M -Xmx128M -jar server.jar",
    //   "environment": {
    //     "BUNGEE_VERSION": "latest",
    //     "SERVER_JARFILE": "server.jar"
    //   },
    //   "limits": {
    //     "memory": 128,
    //     "swap": 0,
    //     "disk": 512,
    //     "io": 500,
    //     "cpu": 100
    //   },
    //   "feature_limits": {
    //     "databases": 5,
    //     "backups": 1
    //   },
    //   "allocation": {
    //     "default": 17
    //   }
    // }

    async createBlankServer(
        name: string,
        userId: number,
        allocationId: number,
        limits: {
            io: number;
            cpu: number;
            memory: number;
            swap: number;
            disk: number;
        },
        feature_limits: {
            allocations: number;
            databases: number;
            backups: number;
        },
        environment: { [key: string]: string } = {},
    ): Promise<ServerObject> {
        const response = await this.request<ServerObject>('post', '/api/application/servers', {
            name,
            user: userId,
            egg: 26,
            docker_image: 'ghcr.io/parkervcp/yolks:java_8',
            startup: 'java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}',
            environment: {
                SERVER_JARFILE: 'server.jar',
            },
            limits,
            feature_limits,
            allocation: {
                default: allocationId,
            },
        });
        return response.attributes;
    }

    async updateServerDetails(
        serverId: number,
        details: { name: string; user: number; external_id?: string; description?: string },
    ): Promise<ServerObject> {
        const response = await this.request<ServerObject>(
            'patch',
            `/api/application/servers/${serverId}/details`,
            details,
        );
        return response.attributes;
    }

    async suspendServer(serverId: number): Promise<void> {
        await this.request('post', `/api/application/servers/${serverId}/suspend`);
    }
}

const PterodactylClient = new PterodactylApi(process.env.PTERODACTYL_API_URL!, process.env.PTERODACTYL_API_KEY!);

export default PterodactylClient;
