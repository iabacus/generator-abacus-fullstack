'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('abacus-component:provider', {arguments: this.arguments}, { local: require.resolve('generator-abacus-component/provider') });
  }
});

module.exports = Generator;