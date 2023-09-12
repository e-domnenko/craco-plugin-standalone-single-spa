const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");

module.exports = {
  overrideCracoConfig({ cracoConfig, pluginOptions }) {
    let isDisabled = pluginOptions.disabled;
    if (typeof isDisabled === "undefined") {
      isDisabled = process.env.NODE_ENV !== "development"
    }

    if (isDisabled) {
      return cracoConfig;
    }

    cracoConfig.webpack = cracoConfig.webpack || {};
    cracoConfig.webpack.plugins = cracoConfig.webpack.plugins || {};

    if (cracoConfig.webpack.plugins.remove) {
      // Restore HtmlWebpackPlugin if it was removed by craco-plugin-single-spa-application
      cracoConfig.webpack.plugins.remove =
        cracoConfig.webpack.plugins.remove.filter(
          (plugin) => plugin !== "HtmlWebpackPlugin",
        );
    }

    cracoConfig.webpack.plugins.add = [
      ...cracoConfig.webpack.plugins.add,
      new StandaloneSingleSpaPlugin(pluginOptions),
    ];

    return cracoConfig;
  },
};
