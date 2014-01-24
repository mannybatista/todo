module.exports = function(grunt) {'use strict';

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadTasks('tasks');

	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		replace : {
			hbsReplace : {
				overwrite : true,
				src : 'components/hbs/hbs.js',
				replacements : [{
					// metaObj is null in the latest hbs library
					to : '(metaObj && metaObj.helpers || [])',
					from : '(metaObj.helpers || [])',
				}]
			},
		},

	});

	grunt.registerTask('default', ['setup']);
	grunt.registerTask('setup', ['replace']);
};
