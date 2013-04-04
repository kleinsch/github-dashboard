module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      app: {
        files: [
          {expand: true, cwd: 'app/static/', src: ['**'], dest: 'dist/', filter: 'isFile'},
          {expand: true, cwd: 'vendor/static/', src: ['**'], dest: 'dist/', filter: 'isFile'}
        ]
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    ember_templates: {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace(/app\/templates\//, '');
          }
        },
        files: {
          'build/templates.js': ["app/templates/**/*.hbs"]
        }
      }
    },

    neuter: {
      options: {
        includeSourceURL: true
      },
      'dist/<%= pkg.name %>.js': 'app/app.js'
    },

    less: {
      options: {
        paths: ["app/stylesheets", "vendor/stylesheets"]
      },
      app: {
        files: {
          "build/app.css": "app/app.less"
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'dist/github-dashboard.css': [
            'vendor/stylesheets/bootstrap.min.css',
            'build/app.css'
          ]
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>', 'app/**', 'vendor/**'],
      tasks: ['copy', 'jshint', 'ember_templates', 'neuter', 'less', 'cssmin']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('default', ['copy', 'jshint', 'ember_templates', 'neuter', 'less', 'cssmin', 'watch']);
  grunt.registerTask('build', ['copy', 'jshint', 'ember_templates', 'neuter', 'less', 'cssmin']);
};
