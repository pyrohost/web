import userAPI, { getUserBySession } from '@/lib/api/user';

export const isUserAbleToSubscribe = async (): Promise<boolean> => {
    const sessionUser = await getUserBySession();
    let dbUser: any;
    let userAddress: any;

    if (!sessionUser) return false;

    if (sessionUser) {
		dbUser = await userAPI.getUserById(sessionUser?.id);
		userAddress = await userAPI.getUserAddress(dbUser);
	}
	if (!dbUser) return false;

	// external ids were not created, oh shit!
	if (!dbUser.stripeCustomerId || !dbUser.pyrodactylUserId) return false;

	if (!dbUser.emailVerified) return false;

    if (!dbUser.firstName || !dbUser.lastName) return false;

    if (!dbUser.phone) return false;

    if (!userAddress) return false;

    return true
};
