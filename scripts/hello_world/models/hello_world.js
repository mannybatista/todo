define(['backbone'], function(Backbone){
	return Backbone.model.extend({
		defaults : {
			data : 'This is data from my model.',
		}
	});
});
