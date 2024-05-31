import type { User } from "@prisma/client";
import userAPI from "@/lib/api/user";

export const isUserAbleToSubscribe = async (dbUser: User): Promise<boolean> => {
	if (!dbUser.stripeCustomerId || !dbUser.pyrodactylUserId || !dbUser.emailVerified || !dbUser.firstName || !dbUser.lastName || !dbUser.phone) return false;

	const address = await userAPI.getUserAddress(dbUser);
	if (!address) return false;

	return true;
};
