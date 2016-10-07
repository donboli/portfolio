module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          engine: 'im',
          sizes: [
            { width: 320, quality: 90, suffix: '_small' },
            { width: 640, quality: 90, suffix: '_medium' },
            { width: 1024, quality: 90, suffix: '_large' },
            { width: 1920, quality: 90, suffix: '_xlarge' }
          ]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'images/original',
          dest: 'images/tailored'
        }]
      }
    },

    clean: ['images/tailored/*']
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'responsive_images']);
};