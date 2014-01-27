define(['Base', 'hbs!../templates/add.html', '../models/add'], function(Base, tmpl, Add) {
	return Base.ItemView.extend({
		className : 'add-view',
		modelBinding : true,
		template : tmpl,
		events : {
			'click .btn' : 'addToList',
		},
		initialize : function(options) {
			this.collectionModel = options.collectionModel;
			this.model = new Add();
		},
		addToList : function() {
			var collection = this.collectionModel.get('data');
			collection.push({
				task : this.model.get('todo'),
			});
			this.collectionModel.trigger('change:data');
		},
	});
});
