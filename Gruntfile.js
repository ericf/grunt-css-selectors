/*
 * grunt-css-selectors
 * https://github.com/ericf/grunt-css-selectors
 *
 * Copyright 2013 Yahoo! Inc.
 * Licensed under the Yahoo! Inc. BSD license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    css_selectors: {
      prefix: {
        options: {
          mutations: [
            {prefix: '.foo'}
          ]
        },
        files: {
          'tmp/prefix.css': ['test/fixtures/default.css'],
        },
      },
      replace: {
        options: {
          mutations: [
            {search: /^\.foo/g, replace: '.baz'}
          ]
        },
        files: {
          'tmp/replace.css': ['test/fixtures/foo.css'],
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'css_selectors', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
