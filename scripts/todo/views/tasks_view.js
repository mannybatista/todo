define(['marionette', 'hbs!../templates/tasks.html'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
		className : 'collection-view',
		template : tmpl,
		modelEvents : {
			// Re-render the page when a 'change:data' even is triggered'
			'change:data' : 'render',
		},
		initialize : function(options) {
		
			this.listId = this.options.id || 0;
			
			console.log('list id: ' + this.listId);	
		},
		
		serializeData : function() {
			var data = this.model.toJSON();
			var lists = data['lists'];
			var list = lists[this.listId];
		
			console.log(data);
			console.log('List: ');
			console.log(list);
			return list;
		},
		
		
	});
	
});
