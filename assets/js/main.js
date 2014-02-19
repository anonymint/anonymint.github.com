require.config({

	paths: {
		'jquery' : ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min','libs/jquery-1.11.0.min'],
		'bootstrap' : ['//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min', 'libs/bootstrap.min'],
		'google-analytics' : 'libs/ga',
		'google-code-prettify' : ['//google-code-prettify.googlecode.com/svn/loader/run_prettify','libs/google-code-prettify/run_prettify'],
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