// next.config.js
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
