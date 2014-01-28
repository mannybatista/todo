define(['marionette', '../views/todo_layout_view'], function(Marionette, TodoLayout) {
	return Marionette.Controller.extend({
		index : function(params) {
			return this.tasks(params);
		},
		tasks : function(params) {
			return new TodoLayout(params);
		}
	});
});
