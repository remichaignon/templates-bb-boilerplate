//
// router.js
// BOILERPLATE_YOUR_APP
//
// Defines the router used for the navigation
//
// ============================================================================
//
// ROUTER
//
// ============================================================================
//


define(
	["backbone", "config", "page"],
	function(Backbone, Config, Page) {

		///////////////////////////////////////////////////////////////////////////
		// $ROUTER

		var Router = Backbone.Router.extend({
			routes: {
				"*args": "index"
			},
			// Routing functions
			index: function(args) {
				console.log("[router] > /" + args);

				var page = new Page.default.Model();
				page.view = new Page.default.View({ name: "example", model: page });
				page.view.render({});
			}
		});

		return Router;
	}
);