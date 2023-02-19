const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['voidmade.local','staging.lucasmarohn.com', 'lucasmarohn.com', 'app-63a17a82c1ac189bf8119ff0.closte.com'],
  },
  async redirects() {
    return [
      {
        source: '/midtown',
        destination: '/work/midtown',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig