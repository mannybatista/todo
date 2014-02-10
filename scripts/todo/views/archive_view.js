define(['marionette', 'hbs!../templates/todo.html', '../models/todo', './add_view', './tasks_view'], function(Marionette, tmpl, ArchiveView, AddView, TasksView) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'collection' : '.collection-view',
			'archive' : '.archive-view',
		},
		initialize : function() {
			
			console.log('list id: ' + this.listId);

			// Save the list's id, default to 0 if no id is in the url
			this.listId = this.options.id || 0;

			// TODO remove all of my logs and comments ;)
			console.log('list id: ' + this.listId);
			
			this.tasksView = new TasksView({
				model : this.model,
				
			});

			this.archiveView = new ArchiveView({
				model : this.model,
			});
				
		},
		onRender : function() {
			this.archive.show(this.archiveView);
			this.collection.show(this.tasksView);
		},		

		serializeData : function() {
			// Instead of serializing all of the data, lets just serialize the list.
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