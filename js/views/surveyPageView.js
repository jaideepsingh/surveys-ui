var SurveyPageView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  template: _.template('\
    <h1>This is a survey page view</h1>\
  ')
});