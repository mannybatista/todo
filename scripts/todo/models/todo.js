define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults : {
			lists : [{
				name : 'My Todo List',
				tasks : [{
					task : 'This is my first task!',
					completed : false,
					archived : true
					
				}, {
					task : 'This is my second task!',
					completed : true,
					archived : false
				}]
			}],
		}
	});
});
