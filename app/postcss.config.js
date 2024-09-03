/* eslint-disable @typescript-eslint/no-var-requires */

const calc = require('postcss-calc');
const presetEnv = require('postcss-preset-env');
const presetMantine = require('postcss-preset-mantine');
const simpleVars = require('postcss-simple-vars');
const fontMagician = require('postcss-font-magician')({
  // this is required due to a weird bug where if we let PFM use the `//` protocol Webpack style-loader
  // thinks it's a relative URL and won't load the font when sourceMaps are also enabled
  protocol: 'https:',
  display: 'swap',
  formats: 'woff2',
});

module.exports = {
  plugins: [
    calc,
    fontMagician,
    presetEnv,
    presetMantine,
    simpleVars({
      'mantine-breakpoint-xs': '36em',
      'mantine-breakpoint-sm': '48em',
      'mantine-breakpoint-md': '62em',
      'mantine-breakpoint-lg': '75em',
      'mantine-breakpoint-xl': '88em',
    }),
  ],
};
