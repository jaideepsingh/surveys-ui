var QuestionView = Backbone.View.extend({
  
  tagName: 'div',

  className: 'question',

  events: {
    'change input[type="radio"]': 'updateAnswers'
  },

  initialize: function(options) {
    this.questionId = options.question.id;
    this.questionTitle = options.question.title;
    this.questionOptions = options.question.options;

  },

  render: function() {
    this.$el.html(this.template({
      qid: this.questionId,
      title: this.questionTitle,
      options: this.questionOptions
    }));
    return this;
  },

  updateAnswers: function(e) {
    this.model.set(this.questionId, e.target.value)
  },

  template: _.template('\
    <h4><%= title %></h4>\
    <ul class="options-list">\
      <% _.each(options, function(option) { %>\
        <li><label><input type="radio" name="<%= qid %>" value="<%= option %>" /> <%= option %><label></li>\
      <% }) %>\
    </ul>\
  ')
});