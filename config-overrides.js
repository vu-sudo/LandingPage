const { alias } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  alias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@sections': path.resolve(__dirname, 'src/sections'),
    '@image': path.resolve(__dirname, 'src/asset/image'),
    '@icon': path.resolve(__dirname, 'src/asset/icon'),
    '@logo': path.resolve(__dirname, 'src/asset/logo'),
    '@data' : path.resolve(__dirname, 'src/data')
  })(config);

  return config;  
};