import { Address } from '@prisma/client';

export function buildAddress(address: Address | null): string | null {
    if (!address) return null;
    return `${address.street1}, ${address.street2 ? address.street2 + ', ' : ''}${address.city}, ${address.state} ${address.postal} ${address.country}`;
}
