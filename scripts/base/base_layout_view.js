define(['marionette', 'base/base_extensions'], function(Marionette, BaseExtensions) {
	return Marionette.Layout.extend({
		constructor : function() {
			_.defaults(this, BaseExtensions);
			Marionette.Layout.prototype.constructor.apply(this, arguments);
			this.baseConstructor();
		}
	});
});

