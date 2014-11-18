"use strict";

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'server.js', 'index.js','router.js', 'requestHandlers.js'],
      options: {
          jshintrc: true
      }
    }
  });

  grunt.registerTask('default','jshint');
};