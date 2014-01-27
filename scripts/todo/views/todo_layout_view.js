define(['marionette', 'hbs!../templates/todo.html', '../models/todo', './add_view', './tasks_view'], function(Marionette, tmpl, Todo, AddView, TasksView) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'add' : '.add-view',
			'second' : '.second-view',
			'collection' : '.collection-view',
		},
		initialize : function() {
			this.model = new Todo();
			this.addView = new AddView({
				collectionModel : this.model,
				addView : this.options,
			});
			this.tasksView = new TasksView({
				model : this.model,
			});
			console.log(this.options);
		},
		onRender : function() {
			this.add.show(this.addView);
			this.collection.show(this.tasksView);
		},
	});
});
