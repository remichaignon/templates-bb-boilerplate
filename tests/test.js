//
// test.js
// YOUR_APP
//
// Defines the testing suites
//
// ============================================================================
//
//
//
// ============================================================================
//


// Delay QUnit start until all tests are loaded
QUnit.config.autostart = false;


// Sets the require.js configuration for your application.
require.config({

	baseUrl: "../app/scripts",

	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
	paths: {

		// Core Libraries
		jquery: "../../assets/scripts/libs/jquery-1.7.2",
		underscore: "../../assets/scripts/libs/underscore-1.3.3",
		backbone: "../../assets/scripts/libs/backbone-0.9.2",
		templatesbb: "../../assets/scripts/libs/templates-bb"

	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {

		"underscore": {
			exports: "_"
		},

		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"  // Attaches "Backbone" to the window object
		},

		"templatesbb": {
			deps: ["backbone", "underscore", "jquery"],
			exports: "TemplatesBB"  // Attaches "TemplatesBB" to the window object
		}

	}

});

// Include JavaScript files here
require(
	["templatesbb", "config", "page"],
	function(TemplatesBB, Config, Page) {
		console.log("[test] Loaded");

		module("Config");

		test("Attributes", function() {
			ok("undefined" !== typeof Config.base_url, "base_url exists");
			ok("undefined" !== typeof Config.data_url, "data_url exists");
			ok("undefined" !== typeof Config.templates_url, "templates_url exists");
			ok("undefined" !== typeof Config.lang, "lang exists");
		});

		module("Page");

		test("Extending view's attributes", function() {
			window.YOUR_APP = { templates: new Backbone.Collection() };
			YOUR_APP.templates.add({ name: "page_example" });
			var view = new Page.default.View({ name: "example" });

			ok(view.name === "example", "Name passed to view");
		});

		asyncTest("Retrieving template", function() {
			window.YOUR_APP = {};
			TemplatesBB.ready(YOUR_APP, { baseURL: Config.templates_url, lang: Config.lang }, null);

			setTimeout(function() {
				var view = new Page.default.View({ name: "example" });

				ok("undefined" !== typeof view.template, "Template has been retrieved");
				strictEqual(view.template.get("markup"), "<div><%= test %></div>", "Template's markup match");
				ok("undefined" !== typeof view.template.get("localization").test, "Template's localization match");

				QUnit.start();
			}, 1000);
		});

		asyncTest("Rendering", function() {
			window.YOUR_APP = {};
			TemplatesBB.ready(YOUR_APP, { baseURL: Config.templates_url, lang: Config.lang }, null);

			setTimeout(function() {
				var view = new Page.default.View({ name: "example", el: "#test" });
				view.render({});

				strictEqual(view.$el.html(), view.template.get("html"), "Element and template html match");

				QUnit.start();
			}, 1000);
		});

		test("Delegating events", function() {
			expect(0);
		});

		// Tests are loaded, run 'em
		QUnit.start();
	}
);