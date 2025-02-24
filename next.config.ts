import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
