var CompletionView = Backbone.View.extend({
  el: '#app',

  render: function() {
    this.$el.html(this.template);
  },

  template: _.template('\
    <h1>Thanks for answering the survey!</h1>\
    <a href="#">Back to all surveys</a>\
  ')

});