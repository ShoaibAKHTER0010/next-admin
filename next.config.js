/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  webpack: (config) => {
    // Exclude HTML files from node_modules from being processed by Webpack
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      use: 'ignore-loader',
    });

    // Optional: Handle specific directories if necessary
    config.module.rules.push({
      test: /\.html$/,
      exclude: [
        /node_modules\/@mapbox\/node-pre-gyp/,
      ],
      use: 'ignore-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
