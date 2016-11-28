var SurveyItemView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  template: _.template('\
    <div><%= title %></div>\
  ')
});