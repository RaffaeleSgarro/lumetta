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
        src: '**/*.html',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'assemble']);
};
