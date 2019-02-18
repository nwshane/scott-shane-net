const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages(
  withSass(
    withCSS({
      webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: "empty"
        };

        return config;
      }
    })
  )
);
