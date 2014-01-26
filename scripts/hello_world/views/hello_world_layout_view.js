define(['marionette', 'hbs!../templates/hello_world.html', '../models/hello_world', './add_view', './tasks_view'], function(Marionette, tmpl, HelloWorld, AddView, TasksView) {
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
			this.model = new HelloWorld();
			// Create the Add view (just the input box and add buton)
			this.addView = new AddView({
				collectionModel : this.model,
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
	});
});
