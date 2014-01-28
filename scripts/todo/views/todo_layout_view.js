define(['marionette', 'hbs!../templates/todo.html', '../models/todo', './add_view', './tasks_view'], function(Marionette, tmpl, Todo, AddView, TasksView) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			// 'region' : jquery selector (in the hello_world.html)
			'add' : '.add-view',
			'second' : '.second-view',
			'collection' : '.collection-view',
		},
		initialize : function() {
			// Create the 'HelloWorld' Model. This will be used to add/remove things.
			this.model = new Todo();
			
			this.listId = this.options.id || 0;
			
			console.log('list id: ' + this.listId);
			// Create the Add view (just the input box and add buton)
			this.addView = new AddView({
				collectionModel : this.model,
				listId : this.listId,
			});
			// Create the 'tasks' collection view
			this.tasksView = new TasksView({
				model : this.model,
			});
			
		},
		onRender : function() {
			// Lookup layoutview in marionette and the show method. (Show a view in a 'region')
			// Render the add view
			this.add.show(this.addView);
			this.second.show(this.addView);
			this.collection.show(this.tasksView);
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
