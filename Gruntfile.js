module.exports = function(grunt) {'use strict';

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
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
			bootstrapReplace : {
				overwrite : true,
				src : 'components/bootstrap/docs/assets/css/bootstrap.css',
				// point the imgs to our stylesheets libs folder
				replacements : [{
					to : 'libs/img',
					from : '../img'
				}]
			},
		},

		copy : {
			setup : {
				files : [{
					// copy bootstraps imgs to stylesheets/img
					dest : 'stylesheets/libs/img/',
					src : 'components/bootstrap/docs/assets/img/glyphicons*.png',
					flatten : true,
					expand : true,
				}],
			},
		},

	});

	grunt.registerTask('default', ['setup']);
	grunt.registerTask('setup', ['replace', 'copy:setup']);
};
