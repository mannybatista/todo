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
			// Create the Add view (just the input box and add buton)
			this.addView = new AddView({
				collectionModel : this.model,
				addView : this.options,
			});
			// Create the 'tasks' collection view
			this.tasksView = new TasksView({
				model : this.model,
			});
			console.log(this.options);
		},
		onRender : function() {
			// Lookup layoutview in marionette and the show method. (Show a view in a 'region')
			// Render the add view
			this.add.show(this.addView);
			this.second.show(this.addView);
			this.collection.show(this.tasksView);
		},
	});
});
