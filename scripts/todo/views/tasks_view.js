define(['Base', 'hbs!../templates/tasks.html'], function(Base, tmpl) {
	return Base.ItemView.extend({
		className : 'collection-view',
		modelBinding : true,
		template : tmpl,
		modelEvents : {
			'change:task' : 'render',
		},
		events : {
			'click input[type="checkbox"]' : 'setCompletedTask',
			'click .delete' : 'deleteTask',
		},
		initialize : function(options) {
			this.listId = this.options.id || 0;
		},
		setCompletedTask : function(e) {
			console.log(e);
			if (e) {
				var $el = this.$(e.target);
				var taskId = $el.attr('data-task-id');
				var list = this.getList(this.listId);
				if (list)
					list['tasks'][taskId]['completed'] = $el.is(':checked');
				this.render();
			}
		},
		
		deleteTask : function(e) {
			if (e) {
				var $el = this.$(e.target);
				var taskId = $el.attr('data-tasks');
				var list = this.getList(this.listId);
				e.preventDefault();
				list['tasks'].splice(taskId, 1);
				this.render();
			}
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
