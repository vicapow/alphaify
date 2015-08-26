# alphaify
give a color an alpha

````js
function alphaify(color, a) {
  var c = d3.rgb(color);
  return 'rgba(' + [c.r, c.g, c.b] + ', ' + a + ')';
}
````
