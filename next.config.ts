import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        destination: '/auth/signin',
        permanent: true,
        source: '/',
      },
    ]
  },
}

export default nextConfig
