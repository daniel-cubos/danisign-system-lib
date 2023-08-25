const postcss = require('rollup-plugin-postcss');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      svgr(),
      url(),
      postcss({
        modules: true,
        inject: true,
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
