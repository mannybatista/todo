define(['marionette', 'hbs!../templates/todo.html'], function(Marionette, tmpl) {
	return Marionette.Layout.extend({
		template : tmpl,
	});
});
