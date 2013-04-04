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
          "dist/app.css": "app/app.less"
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'dist/github-dashboard.css': [
            'vendor/stylesheets/bootstrap.min.css',
            'dist/app.css'
          ]
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>', 'app/**', 'vendor/**'],
      tasks: ['copy', 'jshint', 'neuter', 'less', 'cssmin']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-neuter');

  grunt.registerTask('default', ['copy', 'jshint', 'neuter', 'less', 'cssmin', 'watch']);
  grunt.registerTask('build', ['copy', 'jshint', 'neuter', 'less', 'cssmin']);
};
