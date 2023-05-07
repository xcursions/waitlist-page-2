/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'cloudinary',
    domains: ['https://res.cloudinary.com'],
  },
}

module.exports = nextConfig