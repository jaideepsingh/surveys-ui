var SurveysCollection = Backbone.Collection.extend({
  url: 'https://private-anon-e531aa6abe-surveysmock.apiary-mock.com/api/surveys',

  model: SurveyModel,

  parse: function(response) {
    return response.surveys;
  }
});