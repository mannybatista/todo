define(['marionette', 'hbs!../templates/hello_world.html'], function(Marionette, tmpl) {
	return Marionette.Layout.extend({
		template : tmpl,
	});
});
