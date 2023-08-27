/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['content2.onliner.by'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
