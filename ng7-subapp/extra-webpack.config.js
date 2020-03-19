const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const path = require('path');
const webpackMerge = require('webpack-merge');


module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  return webpackMerge.smart(singleSpaWebpackConfig, {
    "entry": {
      "polyfills": [
        "./src/polyfills.ts"
      ],
      "styles": [
        "./src/styles.css"
      ],
      "main": [
        "./src/main.single-spa.ts"
      ]
    },
    "output": {
      "path": path.join(process.cwd(), "dist"),
      "filename": "[name].bundle.js",
      "chunkFilename": "[id].chunk.js",
      "crossOriginLoading": false,
      "library": "angular7App",
      "libraryTarget": "window"
  
    }
  });
}