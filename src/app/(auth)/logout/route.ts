import { type NextRequest, NextResponse } from "next/server";

import lucia from "@/lib/api/auth";
import { getUserBySession } from "@/lib/api/user";

export async function GET(request: NextRequest) {
	const user = await getUserBySession();
	if (!user) return NextResponse.redirect(new URL("/login", request.url));

	await lucia.invalidateUserSessions(user.id);
	return NextResponse.redirect(new URL("/", request.url));
}
