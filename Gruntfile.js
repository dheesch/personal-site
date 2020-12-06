module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'public/css/app.css': 'scss/app.scss'
        }
      },
    },
    cssmin: {
      options: {
        banner: '/* Minnnnified */'
      },
      minify: {
        expand: true,

        cwd: 'public/css/',
        src: ['app.css'],

        dest: 'public/css/',
        ext: '.min.css'
      }
    },
    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 versions', '> 1%', 'ie 9']
        },
        files: {
          'public/css/app.min.css': ['public/css/app.min.css']
        }
      }
    },
    watch: {
      sass: {
        dist: {
          options: {
            style: 'expanded',
          }
        },
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin', 'autoprefixer'],
        options: {
          debounceDelay: 500
        }
      }
    }
  });


  grunt.registerTask('default', ['sass', 'cssmin', 'autoprefixer']);
}
