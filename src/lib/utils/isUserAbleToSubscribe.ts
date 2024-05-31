import type { User } from "@prisma/client";
import userAPI from "@/lib/api/user";

export const isUserAbleToSubscribe = async (dbUser: User): Promise<boolean> => {
	if (!dbUser.stripeCustomerId || !dbUser.pyrodactylUserId || !dbUser.emailVerified || !dbUser.firstName || !dbUser.lastName || !dbUser.phone) {
		console.warn(
			`User ${
				dbUser.id
			} is not able to subscribe\nMissing stripeCustomerId: ${!dbUser.stripeCustomerId}\nMissing pyrodactylUserId: ${!dbUser.pyrodactylUserId}\nMissing emailVerified: ${!dbUser.emailVerified}\nMissing firstName: ${!dbUser.firstName}\nMissing lastName: ${!dbUser.lastName}\nMissing phone: ${!dbUser.phone}`,
		);
		return false;
	}

	const address = await userAPI.getUserAddress(dbUser);
	if (!address) {
		console.warn(`User ${dbUser.id} is not able to subscribe\nMissing address`);
		return false;
	}

	return true;
};
