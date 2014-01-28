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
			var collection = this.collectionModel.get('data');
			collection.push({
				task : this.model.get('data'),
			});
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
