/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@node-rs/argon2'],
    },
    redirects: async () => {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/fxeRFRbhQh',
                permanent: true,
                basePath: false,
            },
            {
                source: '/donate',
                destination: 'https://opencollective.com/pyro-inc',
                permanent: true,
                basePath: false,
            },
            {
                source: '/psal',
                destination: 'https://github.com/pyrohost/legal/blob/main/licenses/PSAL.md',
                permanent: true,
                basePath: false,
            },
            {
                source: '/support',
                destination: 'https://pyro-host.notion.site/Help-Center-95642ed08e7746b295515d30f976f494',
                permanent: true,
                basePath: false,
            }
        ];
    }
};

module.exports = nextConfig;
