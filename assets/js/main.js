require.config({

	paths: {
		'jquery' : 'libs/jquery-1.11.0.min',
		'bootstrap' : 'libs/bootstrap.min',
		'google-analytics' : 'libs/ga',
		'google-code-prettify' : 'libs/google-code-prettify/run_prettify'	
			
	},

	shim: {
		'bootstrap' : {
			deps: [
				'jquery'
			]
		},
		'google-analytics' : {
			exports: 'Ga'
		}
	}

});

require([
	'jquery','bootstrap', 'google-analytics', 'google-code-prettify'
], function($, Bootstrap, Ga, Pretty){
	'use strict';
});