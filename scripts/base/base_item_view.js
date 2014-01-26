define(['marionette', 'base/base_extensions'], function(Marionette, BaseExtensions) {
    return Marionette.ItemView.extend({
        constructor : function() {
            _.defaults(this, BaseExtensions);
            Marionette.ItemView.prototype.constructor.apply(this, arguments);
            this.baseConstructor();
        }
    });
});

