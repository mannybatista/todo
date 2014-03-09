define(['Base', 'hbs!../templates/todo.html', '../models/todo', './add_view', './tasks_view'], function(Base, tmpl, Todo, AddView, TasksView) {
	return Base.Layout.extend({
		template : tmpl,
		modelBinding : true,
		regions : {
			'add' : '.add-view',
			'collection' : '.collection-view',
		},
		
		events : {
			'keyup .nameList' : 'changeListName',
		},

		initialize : function() {
			this.model = new Todo();

			// Save the list's id, default to 0 if no id is in the url
			this.listId = this.options.id || 0;

			// TODO remove all of my logs and comments ;)
			console.log('list id: ' + this.listId);

			this.addView = new AddView({
				collectionModel : this.model,
				// Now in the add view, you can use this.options.listId to get the list.
				// Checkout serializeData for how to grab the list.

				listId : this.listId,
			});

			this.tasksView = new TasksView({
				model : this.model,
				
			});
				
		},

		onRender : function() {
			this.add.show(this.addView);
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
		
		changeListName : function(e) {
			if (e.which === 13) {
				var data = this.model.toJSON();
				console.log('data:');
				console.log(data);
				var lists = data['lists'];
				console.log('lists:');
				console.log(lists);
				var list = lists[this.listId];
				console.log('list:');
				console.log(list);
				list.name = this.model.get('listName');
				console.log('list.name: ');
				console.log(list.name);
				this.render();
			}
		},
	});
});
