'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
    assemble: {
      options: {},
      pages: {
        expand: true,
        cwd: 'static',
        src: '**/*.hbs',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['clean', 'assemble']);
};
