/** @type {import('next').NextConfig} */
import { readFileSync } from 'fs';

const redirectsList = JSON.parse(readFileSync('./redirects.json', 'utf8'));

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.oceangrownseeds.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
    async redirects() {
        return redirectsList;
    }
};

export default nextConfig;
