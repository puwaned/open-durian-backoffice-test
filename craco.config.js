const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    plugins: [],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
