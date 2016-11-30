var SurveyPageView = Backbone.View.extend({
  el: '#app',

  events: {

    'click #survey-submit': 'submitSurvey'

  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
  },

  render: function() {
    this.$el.html(this.template({
      title: this.model.get('title'),
      tagline: this.model.get('tagline')
    }));
    this.renderSurveyQuestions();
    return this;
  },

  renderSurveyQuestions: function() {
    var view = this;
    this.answersModel = new AnswersModel();
    var questions = this.model.get('questions');
    _.each(questions, function(question) {
      var questionView = new QuestionView({
        question: question,
        model: view.answersModel
      });
      view.$el.find('#questions-list').append(questionView.render().el);
    });

  },

  submitSurvey: function() {
    var answers =this.createAnswersObject();
    $.ajax({
      method: "POST",
      url: "https://private-anon-e531aa6abe-surveysmock.apiary-mock.com/api/surveys/"+ this.model.get('id') +"/completions",
      data: answers
    })
    .done(function( msg ) {
      appRouter.navigate('#/complete', {trigger: true});
    });
  },

  createAnswersObject: function() {
    var view = this;
    return {
      completion: _.map(_.keys(this.answersModel.toJSON()), function(id) {
        return {
          question_id: id,
          value: view.answersModel.get(id)
        }
      })
    };
  },

  template: _.template('\
    <h1><%= title %></h1>\
    <h2><%= tagline %></h2>\
    <div id="questions-list"></div>\
    <button id="survey-submit">Submit Survey</button>\
  ')
});