var SurveyItemView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  template: _.template('\
    <a href="#/survey/<%=id%>"><%= title %></a>\
  ')
});