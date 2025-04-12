const withBundleAnalyzer = require("@next/bundle-analyzer");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZE === "true",
});

const plugins = [bundleAnalyzer]; // Ensure it's an array

module.exports = plugins;
