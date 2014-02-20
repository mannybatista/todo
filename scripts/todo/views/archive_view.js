define(['marionette', 'hbs!../templates/archive.html', '../models/todo'], function(Marionette, tmpl, Todo) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'archive' : '.archive-tasks-view',
		},
		
		events : {
			'click .unarchive' : 'unarchiveTask',
		},

		initialize : function(options) {
			
			this.model = new Todo();
			this.listId = this.options.id || 0;
		},		
		
		unarchiveTask : function(e) {
			if (e) {
				var $el = this.$(e.target);
				var taskId = $el.attr('data-task');
				var list = this.getList(this.listId);
				e.preventDefault();
				if (list)
					list['tasks'][taskId]['archived'] = false;
				this.render();
			}
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