//
// app.js
// BOILERPLATE_YOUR_APP
//
// Defines the BOILERPLATE_YOUR_APP application
//
// ============================================================================
//
// APPLICATION
//
// ============================================================================
//


define(
	["templatesbb", "config", "router"],
	function(TemplatesBB, Config, Router) {

		///////////////////////////////////////////////////////////////////////////
		// $APPLICATION

		return function() {
			var that = this;

			this.init = function() {
				console.log("[app] Initialization");

				// Create router
				that.router = new Router();

				// Initialize templates
				var templatesReadyCallback = function() {
					that.start();
				};
				TemplatesBB.ready(BOILERPLATE_YOUR_APP, { baseURL: Config.templates_url, lang: Config.lang }, templatesReadyCallback);
			};

			this.start = function() {
				console.log("[app] Start");

				// Start the router
				Backbone.history.start({ pushState: true });
			};
		};
	}
);