const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
});
