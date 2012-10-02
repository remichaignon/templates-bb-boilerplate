//
// build.js
// YOUR_APP
//
// Defines the requirejs optimizer build system
//
// ============================================================================
//
//
//
// ============================================================================
//


({

	out: "../dist/YOUR_APP.js",
	baseUrl: "../app/scripts",
	name: "main",
	include: "requirejs",

	paths: {

		// Core Libraries
		requirejs: "../../assets/scripts/libs/require",
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
})