define(['marionette', 'hbs!../templates/hello_world.html'], function(Marionette, tmpl) {
	return Marionette.Layout.extend({
		template : tmpl,
		ui : {
			// ui el name : jquery selector
			'btnTooltip' : '.tooltip-btn',
		},
		events : {
			// jquery event selector : function - below
			'click .btn' : 'btnClick',
		},
		onRender : function() {
			// Checkout marionette/backbone docs
			// onRender gets called after the html/template is rendered.
			
			// Bootstrap tooltip
			this.ui.btnTooltip.tooltip();			
		},
		btnClick : function(clickEvent) {
			// Use console.log to log to the console in chrome
			console.log('You clicked this button:');
			console.log(clickEvent);
		},
		
		
	});
});
