const path = require('path');

module.exports = {
  webpack(config) {
    // Agregar resolución de alias para '@'
    config.resolve.alias['@'] = path.join(__dirname, '/');
    return config;
  },
  experimental: {
    serverActions: true,  // Habilitar Server Actions
  },
};
