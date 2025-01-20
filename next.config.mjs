/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix:
  //   'https://custom-webpage-static-assets-production.fermion.app/677929d6d8b9c805a50be566-custom-zip-pages/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fermion.app',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: '**.img-c.udemycdn.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: '**.media.licdn.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
