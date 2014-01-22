define(['marionette'], function(Marionette) {
    var ApplicationLayout = Marionette.Layout.extend({
        template : function() {
            return '<div class="main"></div>';
        },
        regions : {
            main : '.main',
        },
    });
    return ApplicationLayout;
});
