'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('abacus-component:factory', {arguments: this.arguments}, { local: require.resolve('generator-abacus-component/factory') });
  }
});

module.exports = Generator;