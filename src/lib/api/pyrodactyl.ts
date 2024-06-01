import { type Product, type Server, ServerType, type User } from "@prisma/client";
import type Stripe from "stripe";
import prisma from "@/lib/api/prisma";

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
	private baseURL: string;
	private apiKey: string;

	constructor(baseURL: string, apiKey: string) {
		this.baseURL = baseURL;
		this.apiKey = apiKey;
	}

	private handleError(err: any): never {
		throw err;
	}

	private async handleResponse<T>(response: any): Promise<T> {
		try {
			return (await response.json()) as T;
		} catch (err) {
			this.handleError(err);
		}
	}

	async request<T>(method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE", path: string, body: any = undefined): Promise<ApiResponse<T>> {
		return await this.handleResponse<ApiResponse<T>>(
			await fetch(`${this.baseURL}${path}`, {
				method,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.apiKey}`,
				},
				body: JSON.stringify(body),
			}),
		);
	}

	async listRequest<D, M>(method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE", path: string, body: any = undefined): Promise<ApiListResponse<D, M>> {
		return await this.handleResponse<ApiListResponse<D, M>>(
			await fetch(`${this.baseURL}${path}`, {
				method,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.apiKey}`,
				},
				body: JSON.stringify(body),
			}),
		);
	}
}

class ServerAPI {
	private api: BaseAPI;

	constructor(baseAPI: BaseAPI) {
		this.api = baseAPI;
	}

	async getServers(): Promise<Server[]> {
		return prisma.server.findMany();
	}

	async getServersByUserId(userId: string): Promise<Server[]> {
		return prisma.server.findMany({
			where: { userId },
		});
	}

	async getServerByServerId(id: string, type?: ServerType): Promise<Server | null> {
		return prisma.server.findFirst({
			where: { serverId: id, type },
		});
	}

	// all these logs are for temporary prod debugging purposes
	async createServer(user: User, product: Product, subscription: Stripe.Subscription, server_type: ServerType): Promise<Server | { error: string }> {
		if (server_type !== ServerType.MANAGED) return { error: "Invalid server type." };

		if (!user.pyrodactylUserId) {
			return { error: "User was not given a pyrodactyl ID. Contact support." };
		}

		if (!product.metadata) {
			return { error: `Product metadata is invalid: ${product.metadata}` };
		}

		console.log(product.metadata);
		const metadata = JSON.parse(JSON.stringify(product.metadata));
		console.log(metadata);

		const hardware_limits = {
			cpu: metadata.cpu * 100,
			memory: metadata.memory * 1024,
			swap: metadata.overflow_memory * 1024,
			disk: metadata.disk * 1024,
			io: metadata.io,
		};

		const feature_limits = {
			databases: metadata.databases,
			backups: metadata.backups,
			allocations: metadata.allocations,
		};

		const allocations = await this.api.listRequest<{ id: string; ip: string; port: number; assigned: boolean }, any>(
			"GET",
			"/api/application/nodes/2/allocations?filter[server_id]=false&per_page=1",
		);
		console.log(allocations);
		const allocation = allocations.data[0];

		const egg = await this.api.request<{ id: string; docker_image: string; startup: string }>("GET", "/api/application/nests/1/eggs/3/");
		console.log(egg);

		const server = await this.api.request<{
			id: number;
		}>("POST", "/api/application/servers", {
			name: product.name,
			user: user.pyrodactylUserId,
			egg: egg.attributes.id,
			docker_image: egg.attributes.docker_image,
			startup: egg.attributes.startup,
			limits: hardware_limits,
			feature_limits,
			environment: {
				SERVER_JARFILE: "server.jar",
				BUILD_NUMBER: "latest",
			},
			allocation: {
				default: allocation.attributes.id,
			},
		});

		console.log(server);

		if (server.object !== "server") {
			return { error: `Failed to create server: ${JSON.stringify(server)}` };
		}

		return await prisma.server.create({
			data: {
				serverId: server.attributes.id.toString(),
				stripeSubscriptionId: subscription.id,
				userId: user.id,
				type: server_type,
			},
		});
	}
}

class UserAPI {
	private api: BaseAPI;

	constructor(baseAPI: BaseAPI) {
		this.api = baseAPI;
	}

	async getUserByUserId(id: string): Promise<{ id: number } | null> {
		const user = await this.api.request<{ id: number }>("GET", `/api/application/users/${id}`);
		if (user.object !== "user") {
			return null;
		}

		return user.attributes;
	}

	async getUserByEmail(email: string): Promise<{ id: number } | null> {
		const users = await this.api.listRequest<{ id: number }, any>("GET", `/api/application/users?filter[email]=${encodeURI(email)}&per_page=1`);
		const user = users.data[0];

		if (!user) {
			return null;
		}

		return user.attributes;
	}

	async createUser(email: string, username: string, first_name: string, last_name: string, password: string): Promise<{ id: number } | { error: string }> {
		const user = await this.api.request<{ id: number }>("POST", "/api/application/users", {
			email,
			username,
			first_name,
			last_name,
		});

		if (user.object !== "user") {
			return { error: `Failed to create user: ${JSON.stringify(user)}` };
		}

		await this.api.request("PATCH", `/api/application/users/${user.attributes.id}`, {
			password,
		});

		return user.attributes;
	}

	// GETuserbyemail
	// GETuserbyid
	// suspendserver
}

const baseAPI = new BaseAPI(process.env.PTERODACTYL_API_URL!, process.env.PTERODACTYL_API_KEY!);
const serverAPI = new ServerAPI(baseAPI);
const userAPI = new UserAPI(baseAPI);

export { serverAPI, userAPI };
