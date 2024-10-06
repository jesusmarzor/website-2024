/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin("app/config/i18n.ts");

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_SUPABASE_URL,
                pathname: '**'
            }
        ]
    },
};

export default withNextIntl(nextConfig);
