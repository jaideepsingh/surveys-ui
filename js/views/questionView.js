var QuestionView = Backbone.View.extend({
  
  tagName: 'div',

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

  template: _.template('\
    <h4><%= title %></h4>\
    <ul>\
      <% _.each(options, function(option) { %>\
        <li><label><input type="radio" name="<%= qid %>" /> <%= option %><label></li>\
      <% }) %>\
    </ul>\
  ')
});