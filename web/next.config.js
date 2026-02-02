/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      net: false, 
      tls: false 
    };

    // NUCLEAR FIX: Redirect broken modules to an empty file
    const ignorePath = path.resolve(__dirname, 'ignore.js');

    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-native-async-storage/async-storage': ignorePath,
      'react-native': ignorePath,
      '@metamask/sdk': ignorePath, // Kill the SDK entirely
    };

    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    return config;
  },
};

module.exports = nextConfig;
