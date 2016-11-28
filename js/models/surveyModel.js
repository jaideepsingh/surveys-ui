var SurveyModel = Backbone.Model.extend({
  urlRoot: 'https://private-anon-e531aa6abe-surveysmock.apiary-mock.com/api/surveys/',

  parse: function(response) {
    return response.survey;
  }
}); 