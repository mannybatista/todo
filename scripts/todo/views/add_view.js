define(['Base', 'hbs!../templates/add.html', '../models/add'], function(Base, tmpl, Add) {
	return Base.ItemView.extend({
		className : 'add-view',
		// This is a hook that I added in.
		// It'll bind what's in the input box to the 'name' attribute (in the html tag mapped to the add model)
		modelBinding : true,
		template : tmpl,
		events : {
			'click .btn' : 'addToList',
		},
		initialize : function(options) {
			// Grab the collectionModel
			this.collectionModel = options.collectionModel;
			this.model = new Add();
			this.listId = this.options.listId || 0;
			console.log('list id: ' + this.listId);
		},
		addToList : function() {
			// Get the list to add to.
			var collection = this.collectionModel.get('data');
			// Get the data that was bound from the input box and add it to the list.
			collection.push({
				task : this.model.get('data'),
			});
			// Data will look like:
			// data : [
			// { todo : 'foo'},
			// { todo :'bar'},
			// ]

			// Normally we'd save and let the backend trigger this.
			// Instead since everything is event driven, trigger a change and let the other view update!
			this.collectionModel.trigger('change:data');
			
		},
		serializeData : function() {
			var data = this.model.toJSON();
			var lists = data['lists'];
			var list = lists[this.listId];
			console.log(data);
			console.log('List: ');
			console.log(list);
			return list;
		},
	});
});
