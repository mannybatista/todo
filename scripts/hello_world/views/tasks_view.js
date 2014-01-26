define(['marionette', 'hbs!../templates/tasks.html'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
		template : tmpl,
		modelEvents : {
			// Re-render the page when a 'change:data' even is triggered'
			'change:data' : 'render',
		}
	});
});
