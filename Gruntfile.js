module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-keepalive');

grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'build',
        keepalive: true
      }
    }
  },

    sass: {
    dist:{
      files: {
        'css/main.css': 'css/main.scss'
      }
    }
  },
  jade: {
  compile: {
      options: {
          client: false,
          pretty: true
      },
      files: [ {
        cwd: "src/templates/",
        src: "**/*.jade",
        dest: "build/",
        expand: true,
        ext: ".html"
      } ]
  }
  },

  watch: {
    jade: {
      files: ['src/templates/**/*.jade'],
      tasks: ['jade'],
      options: {
        pretty: true,
      },

    },
    sass: {
      files: ['css/*.scss', 'css/main.scss', 'css/modals/**/*.{scss,sass}'],
      tasks: ['sass', 'postcss']
    },
  },
  postcss: {
          options: {
              map: true,
              processors: [
                  require('autoprefixer')({
                      browsers: ['last 2 versions']
                  }),
              ]
          },
          dist: {
            files: [{
                expand: true,
                cwd: 'css/',
                src: ['**/*.css'],
                dest: 'build/css'
            }]
          }
      },


  });
  grunt.registerTask('default', ['watch']);
  // grunt.registerTask('default', ['postcss', 'sass', 'watch']);
};
