define(['marionette', 'todo/controllers/todo_controller'], function(Marionette, TodoController) {
	return Marionette.Controller.extend({
		defaultController : 'todo',
		defaultAction : 'index',
		controllers : {
			todo : new TodoController(),
		},
		defaultRoute : function(controller, action, id) {
			var routedController = this.controllers[controller] || this.controllers[this.defaultController];
			var view = routedController[action || this.defaultAction]({
				id : id
			});
			this.options.layout.main.show(view);
		},
	});
});
