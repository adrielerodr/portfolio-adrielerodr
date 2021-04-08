const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return redirects;
  },
};
