module.exports = function override(config) {
  if (config.output.publicPath.includes("ByTechS-Website")) {
    config.output.publicPath = "/";
  }
  return config;
};
