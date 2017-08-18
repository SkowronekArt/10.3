module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({

		sass: {
			options: {
			sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'sass/style.sass'
				}
			}
		},
		jshint: {
			all: ['js/*.js']
		},
		watch: {
			scripts: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint'],
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		}
 	});


		// Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	
		// Default task(s).

	grunt.registerTask('default', ['jshint', 'sass', 'watch'])
	
};