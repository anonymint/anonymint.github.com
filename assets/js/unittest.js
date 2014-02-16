require.config({

	paths: {
		'jquery' : 'libs/jquery-1.11.0.min',
		'bootstrap' : 'libs/bootstrap',
		'QUnit' : 'libs/qunit-1.14.0'	
	},

	shim: {
		'bootstrap' : {
			deps: [
				'jquery'
			]
		},
		'QUnit' : {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}

});

require([
	'QUnit'
], function(QUnit){
	'use strict';
});