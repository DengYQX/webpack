var greeter = require('./Greeter.js');
var tpl = require('./page.html');
var style = require('../style/style.css')

document.getElementById('root').innerHTML = tpl;
document.getElementById('root').appendChild(greeter());

document.getElementById('onClick').addEventListener('click', function(){
	window.alert("成功了！");
});