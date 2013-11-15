module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		emberTemplates: {
			compile: {
				options: {
					templateBasePath: /templates\//
				},
				files: {
					'templates/compiled.js': 'templates/**/*.hbs'
				}
			}
		},

		connect: {
			livereload: {
				options: {
					open: true,
					livereload: true
				}
			}
		},

		watch: {
			emberTemplates: {
				files: 'templates/**/*.hbs',
				tasks: ['emberTemplates']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('server', [
		'emberTemplates',
		'connect',
		'watch'
	]);
};