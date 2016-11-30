var CompletionView = Backbone.View.extend({
  el: '#app',

  render: function() {
    this.$el.html(this.template);
  },

  template: _.template('\
    <h2>Thanks for completing the survey.</h2>\
    <a href="/">Back to all surveys</a>\
  ')

});