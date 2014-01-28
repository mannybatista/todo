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
			this.listId = this.options.listId || 0;
			console.log('list id: ' + this.listId);
		},
		addToList : function() {
			
			// Use the collection model instead of the add_view model - here
			var data = this.model.toJSON();
			var lists = data['lists'];
			var list = lists[this.listId];
			// After you get the list from the collectionModel, add it to the collection.
			// Similar to this, but with the list

			var collection = this.collectionModel.get('data');
			collection.push({
				task : this.model.get('data'),
			});
			this.collectionModel.trigger('change:data');

		},
	});
});
