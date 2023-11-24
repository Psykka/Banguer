/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                pathname: '/image/**',
            },
            {
                protocol: 'https',
                hostname: 'image-cdn-ak.spotifycdn.com',
                pathname: '/image/**',
            },
            {
                protocol: 'https',
                hostname: 'mosaic.scdn.co',
                pathname: '/640/**',
            },
            {
                protocol: 'https',
                hostname: 'image-cdn-fa.spotifycdn.com',
                pathname: '/image/**',
            },
        ],
    }
}

module.exports = nextConfig
