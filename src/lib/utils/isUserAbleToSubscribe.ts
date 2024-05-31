import type { User } from "@prisma/client";
import userAPI from "@/lib/api/user";

export const isUserAbleToSubscribe = async (dbUser: User): Promise<boolean> => {
	if (!dbUser.stripeCustomerId || !dbUser.emailVerified || !dbUser.firstName || !dbUser.lastName || !dbUser.phone) {
		console.warn(
			`User ${
				dbUser.id
			} is not able to subscribe\nMissing stripeCustomerId: ${!!dbUser.stripeCustomerId}, emailVerified: ${!!dbUser.emailVerified}, firstName: ${!!dbUser.firstName}, lastName: ${!!dbUser.lastName}, phone: ${!!dbUser.phone}`,
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
