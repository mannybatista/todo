define(['modelbinder'], function(ModelBinder) {
	return {
		baseConstructor : function() {
			if (this.modelBinding) {
				this.modelBinder = new ModelBinder();
				this.on('render', function() {
					this.modelBinder.bind(this.model, this.el);
				}, this);
				this.on('close', function() {
					this.modelBinder.unbind();
				}, this);
			}
		},
	};
});
