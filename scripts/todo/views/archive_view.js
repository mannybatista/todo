define(['marionette', 'hbs!../templates/todo.html', '../models/todo', './archive_tasks_view'], function(Marionette, tmpl, Todo, ArchiveView) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'archive' : '.archive-tasks-view',
		},

		initialize : function(options) {
			
			this.model = new Todo();
			this.listId = this.options.id || 0;
			this.archiveView = new ArchiveView({
				model : this.model,
			});
		},

		onRender : function() {
			this.archive.show(this.archiveView);
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