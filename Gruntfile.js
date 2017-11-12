module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-keepalive');
  grunt.loadNpmTasks('grunt-babel');
  require('load-grunt-tasks')(grunt);

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
  babel: {
    compile: {
      options: {
        sourceMap: true,
        presets: ['env'],
        experimental: true,
        presets: ["es2015"]
      }
    },
    dist: {
      files: {
         "build/js/main-compiled.js" : "build/js/main.js"
      }
    }
  },
  sass: {
    dist:{
      files: {
        'build/css/main.css': 'src/scss/main.scss'
      }
    }
  },
  jade: {
    compile: {
      options: {
        client: false,
        pretty: true,
        data: function(dist, src) {
          return grunt.file.readJSON("src/locals/projects.json");
        }
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
    babel: {
      files: ['build/js/main.js'],
      tasks: ['babel'],
      presets: ["es2015"]
    },
    sass: {
      files: ['src/scss/*.scss', 'src/scss/main.scss', 'src/scss/modals/**/*.{scss,sass}'],
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
          cwd: 'build/css/',
          src: ['**/*.css'],
          dest: 'build/css'
      }]
    }
  }
  });
  grunt.registerTask('default', ['watch', 'babel']);
  // grunt.registerTask('default', ['postcss', 'sass', 'watch']);
};
