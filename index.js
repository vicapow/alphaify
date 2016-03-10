'use strict';

var d3Color = require('d3-color');

function alphaify(color, a) {
  var c = d3Color.rgb(color);
  return 'rgba(' + [c.r, c.g, c.b] + ', ' + a + ')';
}

module.exports = alphaify;
