var AppRouter = Backbone.Router.extend({
  
  routes: {
    "" : "main"
  },

  main: function() {
    new SurveysView();
  }

});