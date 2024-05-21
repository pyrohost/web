export let games = [
    {
        name: 'Minecraft',
        slug: 'minecraft',
        images: {
            banner: 'https://cdn.modrinth.com/data/Q1vvjJYV/images/593042203d2297676eed851f22c8e2ee3eaab5d6.jpeg',
        },
    },
    {
        name: 'Terraria',
        slug: 'terraria',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg',
        },
    },
    {
        name: 'Stardew Valley',
        slug: 'stardew-valley',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg',
        },
    },
    {
        name: 'Palworld',
        slug: 'palworld',
        images: {
            banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg',
        },
    },
    {
        name: 'Team Fortress 2',
        slug: 'team-fortress-2',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg',
        },
    },
    {
        name: 'Rust',
        slug: 'rust',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg',
        },
    },
    {
        name: 'ARK: Survival Evolved',
        slug: 'ark-survival-evolved',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg',
        },
    },
    {
        name: 'Valheim',
        slug: 'valheim',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg',
        },
    },
    {
        name: 'Counter-Strike: 2',
        slug: 'counter-strike-2',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
        },
    },
    {
        name: 'Enshrouded',
        slug: 'enshrouded',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/1203620/header.jpg',
        },
    },
    {
        name: 'Left 4 Dead 2',
        slug: 'left-4-dead-2',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg',
        },
    },
    {
        name: "Don't Starve Together",
        slug: 'dont-starve-together',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/322330/header.jpg',
        },
    },
    {
        name: 'Factorio',
        slug: 'factorio',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg',
        },
    },
    {
        name: 'Satisfactory',
        slug: 'satisfactory',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg',
        },
    },
    {
        name: '7 Days to Die',
        slug: '7-days-to-die',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/251570/header.jpg',
        },
    },
    {
        name: "Garry's Mod",
        slug: 'garrys-mod',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/4000/header.jpg',
        },
    },
    {
        name: 'Among us',
        slug: 'among-us',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg',
        },
    },
    {
        name: 'Risk of Rain 2',
        slug: 'risk-of-rain-2',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg',
        },
    },
    {
        name: 'RimWorld',
        slug: 'rimworld',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg',
        },
    },
    {
        name: 'Space Engineers',
        slug: 'space-engineers',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/244850/header.jpg',
        },
    },
    {
        name: 'Unturned',
        slug: 'unturned',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/304930/header.jpg',
        },
    },
    {
        name: 'DayZ',
        slug: 'dayz',
        images: {
            banner: 'https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg',
        },
    },
];

export let plans = [
    {
        name: 'Solo',
        slug: 'solo',
        price: 6,
        cpu: 2,
        ram: 3,
        overflow: 0.75,
    },
    {
        name: 'Friends',
        slug: 'friends',
        price: 12,
        cpu: 3,
        ram: 6,
        overflow: 1.5,
    },
    {
        name: 'Community',
        slug: 'community',
        price: 18,
        cpu: 4.5,
        ram: 9,
        overflow: 2.25,
    },
    {
        name: 'Network',
        slug: 'network',
        price: 24,
        cpu: 6,
        ram: 12,
        overflow: 3,
    },
];

export function getGameBySlug(slug: string) {
    return games.find((game) => game.slug === slug);
}
