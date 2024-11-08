/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: '',
        pathname: "/images/q06goj7s/production/**"
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
