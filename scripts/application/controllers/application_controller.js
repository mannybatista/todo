define(['marionette', 'hello_world/controllers/hello_world_controller'], function(Marionette, HelloWorldController) {
	return Marionette.Controller.extend({
		defaultController : 'hello_world',
		defaultAction : 'index',
		controllers : {
			hello_world : new HelloWorldController(),
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
