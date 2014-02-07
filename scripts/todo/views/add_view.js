define(['Base', 'hbs!../templates/add.html', '../models/add'], function(Base, tmpl, Add) {
	return Base.ItemView.extend({
		className : 'add-view',
		modelBinding : true,
		template : tmpl,
		events : {
			'keyup .task-input' : 'addToList',
		},
		initialize : function(options) {
			this.collectionModel = options.collectionModel;	
			this.model = new Add();
			this.listId = this.options.listId || 0;
			console.log('list id: ' + this.listId);
			console.log('collection model: ' + this.collectionModel);
			console.log('model: ' + this.model);
		},
		addToList : function(e) {
			if (e.which === 13) {
				// Use the collection model instead of the add_view model - here
				var data = this.collectionModel.toJSON();
				var lists = data['lists'];
				var list = lists[this.listId];
				console.log("data" + data);
				console.log("list" + list);
				// After you get the list from the collectionModel, add it to the collection.
				// Similar to this, but with the list
				list['tasks'].push({
					task : this.model.get('task'),
				});
				this.collectionModel.trigger('change:task');
				console.log('collection model: ' + this.collectionModel);
			}
		},
		
	});
});
