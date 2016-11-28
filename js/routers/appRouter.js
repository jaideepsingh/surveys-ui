var AppRouter = Backbone.Router.extend({
  
  routes: {
    '' : 'main',
    'survey/:surveyid': 'survey'
  },

  main: function() {
    new SurveysView();
  },

  survey: function(id) {
    new SurveyPageView({
      model: new SurveyModel({id: id})
    }).render();
  }

});