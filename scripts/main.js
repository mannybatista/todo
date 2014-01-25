require(['marionette', 'backbone', 'less', 'bootstrap', 'application/views/application_layout', 'application/controllers/application_controller', 'application/routers/application_router'], function(Marionette, Backbone, Less, Bootstrap, ApplicationLayout, ApplicationController, ApplicationRouter) {
	// Create the Marionette Application
	var application = new Marionette.Application();
	// Create the main layout view for the application
	var applicationLayout = new ApplicationLayout();

	// Initialize the application.
	// Set the Marionette router, main application controller and layout.
	application.addInitializer(function(options) {
		new ApplicationRouter({
			controller : new ApplicationController({
				layout : applicationLayout
			})
		});
		// Keep the history in backbone (back arrow)
		Backbone.history.start();
	});

	// Set the region that we want to display the layout
	application.addRegions({
		application : '#application',
	});

	// Display the main application layout view.
	application.application.show(applicationLayout);

	// Startup the app
	application.start();
});
