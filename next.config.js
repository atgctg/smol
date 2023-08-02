module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};