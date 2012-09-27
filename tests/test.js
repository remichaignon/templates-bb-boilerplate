//
// test.js
// BOILERPLATE_YOUR_APP
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

	baseUrl: "test",

	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
	paths: {

		// Core Libraries
		jquery: "../assets/scripts/libs/jquery-1.7.2",
		underscore: "../assets/scripts/libs/underscore-1.3.3",
		backbone: "../assets/scripts/libs/backbone-0.9.2",
		templatesbb: "../assets/scripts/libs/templates-bb"

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
	[],
	function() {
		console.log("[test] Loaded");

		// Tests are loaded, run 'em
		QUnit.start();
	}
);