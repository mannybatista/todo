define(['marionette', '../views/todo_view'], function(Marionette, TodoLayout) {
	return Marionette.Controller.extend({
		index : function(params) {
			return new TodoLayout(params);
		}
	});
});
