/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Disable App Router to use Pages Router
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
