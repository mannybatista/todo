define(['marionette'], function(Marionette) {
    return Marionette.AppRouter.extend({
        appRoutes : {
            '' : 'defaultRoute',
            ':controller' : 'defaultRoute',
            ':controller/:action' : 'defaultRoute',
            ':controller/:action/:id' : 'defaultRoute',
        },
    });
}); 