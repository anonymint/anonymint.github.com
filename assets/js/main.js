require.config({

	paths: {
		'jquery' : 'libs/jquery-1.11.0.min',
		'bootstrap' : 'libs/bootstrap.min',
		'google-analytics' : 'libs/ga',
		'google-code-prettify' : 'libs/google-code-prettify/run_prettify',
		'add-this' : 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5303fb49013f26e0',
		'add-this-me' : 'libs/addthis-me'				
	},

	shim: {
		'bootstrap' : {
			deps: [
				'jquery'
			]
		},
		'addthis-me' : {
			deps: [
				'add-this'
			]
		}
	}

});

require([
	'jquery','bootstrap', 'google-analytics', 'google-code-prettify', 'add-this', 'add-this-me'
], function($, Bootstrap, Ga, Pretty, AddThis, AddThisMe){
	'use strict';
});