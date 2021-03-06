//
// page.js
// YOUR_APP
//
// Defines the page behaviour
//
// ============================================================================
//
// DEFAULT
// RETURN
//
// ============================================================================
//


define(
	["jquery", "underscore", "backbone", "config"],
	function($, _, Backbone, Config) {

		///////////////////////////////////////////////////////////////////////////
		// $DEFAULT

		var DefaultModel = Backbone.Model.extend({});

		var DefaultView = Backbone.View.extend({
			el: "body",
			template: null,
			events: {},
			initialize: function(args, options) {
				// Get page template
				_.extend(this, args);

				var pageTemplate = YOUR_APP.templates.where({ name: "page_" + this.name })[0];
				this.template = new TemplatesBB.TemplateModel(pageTemplate.attributes);
			},
			render: function(data) {
				var that = this;

				// Replace the content of the page by the template
				this.$el.html(this.template.render(data));
				this.delegateEvents();
			}
		});


		///////////////////////////////////////////////////////////////////////////
		// $RETURN

		return {
			"default": {
				"Model": DefaultModel,
				"View": DefaultView
			}
		};
	}
);