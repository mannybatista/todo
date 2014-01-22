define(['marionette', '../views/hello_world_layout_view'], function(Marionette, HelloWorldLayout) {
	return Marionette.Controller.extend({
		index : function(params) {
			return new HelloWorldLayout(params);
		}
	});
});
