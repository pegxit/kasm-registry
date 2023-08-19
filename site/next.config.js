/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Einstein Kasm Registry',
    description: 'The official store for Einsteins Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/pegxit/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
