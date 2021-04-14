const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  mode: 'production',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['svg-url-loader'],
    });

    return config;
  },
  images: {
    domains: ['voidmade.local','staging.emergence.design'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public'
  },
  devIndicators: {
    autoPrerender: false,
  },
  optimization: {
    usedExports: true,
  },
};

module.exports=  withBundleAnalyzer( withPWA(nextConfig) );