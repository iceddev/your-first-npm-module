var meld = require('meld');
var map = require('lodash.map');
var wrap = require('wordwrap')(120);
var colors = require('colors-tmpl');

meld.around(console, 'log', function(methodCall){
  var args = map(methodCall.args, function(arg){
    if(typeof arg === 'string'){
      return wrap(colors(arg));
    }

    return arg;
  });
  methodCall.proceedApply(args);
});
