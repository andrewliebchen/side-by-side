module.exports = function(grunt) {
  // 1. All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      compile: {
        files: {
          'javascripts/application.js': 'javascripts/application.js.coffee' // 1:1 compile
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'stylesheets/css/application.css': 'stylesheets/scss/application.scss'
        }
      } 
    },

    watch: {
      coffee: {
        files: ['javascripts/*.coffee'],
        tasks: 'coffee'
      },
      css: {
          files: ['stylesheets/scss/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false,
          }
      } 
    }

  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['coffee', 'sass', 'watch']);
};
