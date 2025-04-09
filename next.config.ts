import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['plus.unsplash.com', 'images.unsplash.com'],
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
