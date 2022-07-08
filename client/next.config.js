/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:7000/api/:slug*'
      },
    ]
  },
}