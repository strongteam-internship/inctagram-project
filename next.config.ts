import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.s3.eu-central-1.amazonaws.com',
        protocol: 'https',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        destination: '/public/posts',
        permanent: true,
        source: '/',
      },
    ]
  },
}

export default nextConfig
