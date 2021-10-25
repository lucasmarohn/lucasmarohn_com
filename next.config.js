const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['voidmade.local','staging.lucasmarohn.com', 'lucasmarohn.com', 'app-60708904c1ac183264fb7a04.closte.com'],
  },
};

module.exports = nextConfig