define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults : {
			data : [{
				task : 'This is my first task!'
			}, {
				task : 'This is my second task!'
			}],
		}
	});
});
