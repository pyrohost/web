'use server';

import pterodactyl from '@/lib/api/pterodactyl';

export const getServerByExternalIdAction = async (externalId: string) => {
    try {
        const response = await pterodactyl.getServerByExternalId(externalId);
        return response;
    } catch (error) {
        return null;
    }
};
