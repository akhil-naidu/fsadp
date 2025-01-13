/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    'https://custom-webpage-static-assets-production.fermion.app/677929d6d8b9c805a50be566-custom-zip-pages/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
