define(['marionette', 'hbs!../templates/archive.html', '../models/todo'], function(Marionette, tmpl, Todo) {
	return Marionette.Layout.extend({
		template : tmpl,
		regions : {
			'archive' : '.archive-tasks-view',
		},
		
		events : {
			'click .archive-task' : 'setArchivedTask',
			'click .unarchive' : 'unarchiveTask',
		},
		
		ui : { tooltip : '[title]' },
		
		initialize : function(options) {
			
			this.model = new Todo();
			this.listId = this.options.id || 0;
		},	
		
		setArchivedTask : function(e) {

			if (e) {
				var $el = this.$(e.target);
				var taskId = $el.attr('data-task');
				var list = this.getList(this.listId);
				e.preventDefault();
				if (list)
					list['tasks'][taskId]['archived'] = true;
				this.render();
			}
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
		
		onRender : function() {
			this.ui.tooltip.tooltip();
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