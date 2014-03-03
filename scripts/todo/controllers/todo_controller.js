define(['marionette', '../views/todo_layout_view', '../views/archive_view', '../views/your_lists_view'], function(Marionette, TodoLayout, ArchiveView, ListsView) {
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
		lists : function(params) {
			return new ListsView(params);
		},
	});
});
