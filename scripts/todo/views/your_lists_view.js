define(['marionette', 'hbs!../templates/your_lists.html', '../models/todo'], function(Marionette, tmpl, Todo) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'lists' : '.your-lists-view',
		},
		
		initialize : function(options) {
			
			this.model = new Todo();
			this.listId = this.options.id || 0;
		},			
		
		getList : function(id) {
			var data = this.model.toJSON();
			return data && data['lists'][id];
		},
		serializeData : function() {
			return this.getList(this.listId);
		},
	});

});