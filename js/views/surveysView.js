var SurveysView = Backbone.View.extend({

  el: '#app',
	
	initialize: function() {
    this.surveysCollection = new SurveysCollection();
    this.listenTo(this.surveysCollection, 'all', this.render);
    this.surveysCollection.fetch();
	},

	render: function() {
    this.$el.html(this.template);
    if(this.surveysCollection.length) {
      this.renderSurveyList();
    }
    return this;
	},

  renderSurveyList: function() {
    var view = this;
    this.surveysCollection.each(function(survey) {
        var surveyItem = new SurveyItemView({
          model: survey
        });
        view.$el.find('#surveys-container').append(surveyItem.render().el);
    });
  },

  template: _.template('\
    <h1>All Surveys</h1>\
    <ul id="surveys-container" class="surveys-list"></ul>\
  ')

});