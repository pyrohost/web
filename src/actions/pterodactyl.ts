'use server';

import PterodactylClient from '@/lib/api/pterodactyl';

export const getServerByExternalIdAction = async (externalId: string) => {
    try {
        const response = await PterodactylClient.getServerByExternalId(externalId);
        return response;
    } catch (error) {
        return null;
    }
};
