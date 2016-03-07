'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('abacus-component:controller', {arguments: this.arguments}, { local: require.resolve('generator-abacus-component/controller') });
  }
});

module.exports = Generator;