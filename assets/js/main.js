require.config({

	paths: {
		'jquery' : ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min','libs/jquery-1.11.0.min'],
		'bootstrap' : ['//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min', 'libs/bootstrap.min'],
		'google-code-prettify' : ['//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify','libs/google-code-prettify/run_prettify']				
	},

	shim: {
		'bootstrap' : {
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'jquery','bootstrap', 'google-code-prettify'
], function($, Bootstrap, Pretty){
	'use strict';
});