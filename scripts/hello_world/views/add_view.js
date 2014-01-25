define(['marionette', 'hbs!../templates/add.html'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
		className : 'add-view',
		template : tmpl,
		events : {
			'click .btn' : 'addToList',
		},
		addToList : function() {
			
		},
	});
});
