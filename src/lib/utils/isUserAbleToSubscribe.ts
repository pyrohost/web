import type { User } from '@prisma/client';

export const isUserAbleToSubscribe = async (dbUser: User, userAddress: any): Promise<boolean> => {
	if (!dbUser.stripeCustomerId || !dbUser.pyrodactylUserId) return false;

	if (!dbUser.emailVerified) return false;

	if (!dbUser.firstName || !dbUser.lastName) return false;

	if (!dbUser.phone) return false;

	if (!userAddress) return false;

	return true;
};
