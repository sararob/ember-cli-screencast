/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var env = EmberApp.env();
var isProductionBuild = ['production'].indexOf(env) > -1;

var app = new EmberApp({
  fingerprint: {
    enabled: isProductionBuild,
    //replaceExtensions: ['html'],
    prepend: '//s3.amazonaws.com/chat-app/'
  },
  sourcemaps: {
    enabled: !isProductionBuild
  },
  minifyCSS: {
    enabled: isProductionBuild
  },
  minifyJS: {
    enabled: isProductionBuild
  }
});

module.exports = app.toTree();
