var AppRouter = Backbone.Router.extend({
  
  routes: {
    "" : "main"
  },

  main: function() {
    console.log('app started');
  }

});