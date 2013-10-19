var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');

module.exports = function(){
  instructions('Package Entry Point', 'package_main');

  return question('{underline}Challenge{/underline}: Create a main file for your module (don\'t forget some code)', function(){
    var main = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).main || 'index.js';
    return fs.existsSync(main) && fs.readFileSync(main, 'utf-8').length;
  });
};
