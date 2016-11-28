var SurveyPageView = Backbone.View.extend({
  el: '#app',

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
    var questions = this.model.get('questions');
    _.each(questions, function(question) {
      var questionView = new QuestionView({
        question: question
      });
      view.$el.find('#questions-list').append(questionView.render().el);
    });

  },

  template: _.template('\
    <h1><%= title %></h1>\
    <h2><%= tagline %></h2>\
    <div id="questions-list"></div>\
    <button>Submit Survey</button>\
  ')
});