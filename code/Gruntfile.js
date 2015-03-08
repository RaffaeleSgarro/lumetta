'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/'],
    assemble: {
      options: {
        layout: 'static/layout/layout.hbs'
      },
      ita: {
        expand: true,
        cwd: 'static',
        src: 'ita/*.hbs',
        dest: 'dist'
      },
      eng: {
        expand: true,
        cwd: 'static',
        src: 'eng/*.hbs',
        dest: 'dist/'
      }
    },
    copy: {
      assets: {
        expand: true,
        cwd: 'static',
        src: ['images/**', 'style/**'],
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['clean', 'assemble', 'copy']);
};
