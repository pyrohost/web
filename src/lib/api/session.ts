import "server-only";

import lucia from "@/lib/api/auth";
import { cookies } from "next/headers";

class SessionAPI {
	async createAndSetSession(userId: string): Promise<void> {
		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies().set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes,
		);
	}
}

const sessionAPI = new SessionAPI();
export default sessionAPI;
