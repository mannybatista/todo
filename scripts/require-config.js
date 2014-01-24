requirejs.config({
	baseUrl : 'scripts',
	
	urlArgs : 'bust=' + (new Date()).getTime(),
	
	paths : {
		'jquery' : '../components/jquery/jquery',
		'underscore' : '../components/underscore-amd/underscore',
		'backbone' : '../components/backbone/backbone',
		'marionette' : '../components/marionette/lib/backbone.marionette',
		'less' : '../components/less/dist/less-1.6.1',
		'modelbinder' : '../components/backbone.modelbinder/Backbone.ModelBinder',
		'bootstrap' : '../components/bootstrap/docs/assets/js/bootstrap',
		'Handlebars' : '../components/handlebars/handlebars',
		'hbs' : '../components/hbs/hbs',
		'i18nprecompile' : '../components/hbs/hbs/i18nprecompile',
		'json2' : '../components/hbs/hbs/json2',
	},

	shim : {
		'jquery' : {
			exports : '$'
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		'marionette' : {
			deps : ['backbone'],
			exports : 'Backbone.Marionette'
		},
		'Handlebars' : {
			exports : 'Handlebars'
		},
		'modelbinder' : {
			deps : ['underscore', 'jquery', 'backbone'],
			exports : 'Backbone.ModelBinder'
		},
		'bootstrap' : {
			deps : ['jquery'],
			exports : '$',
		},
	},

	hbs : {
		disableI18n : true,
		templateExtension : false,
		compileOptions : {}
	},
});
