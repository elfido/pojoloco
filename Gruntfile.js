module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['src/**/*.js', 'test/**/*.js', 'test/data.json'],
      tasks: ['jshint', 'mochaTest']
    },
    mochaTest: {
      test: {
        options:{
          reporter: 'spec'
        },
        src: 'test/**/*.js'
      }
    }
    //ToDo
    // Add concat and minify
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
