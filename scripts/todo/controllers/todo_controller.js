define(['marionette', '../views/todo_layout_view', '../views/archive_view'], function(Marionette, TodoLayout, ArchiveView) {
	return Marionette.Controller.extend({
		index : function(params) {
			return this.tasks(params);
		},
		tasks : function(params) {
			return new TodoLayout(params);
		},
		archive : function(params) {
			return new ArchiveView(params);
		},
	});
});
