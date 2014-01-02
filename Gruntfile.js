module.exports = function (grunt) {

  var readOptionalJSON = function (filepath) {
      var data = {};
      try {
        data = grunt.file.readJSON(filepath);
      } catch (e) {}
      return data;
    },
    srcHintOptions = readOptionalJSON('.jshintrc');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      build: {
        src: [ "src/hydrajs-router-plugin.js" ],
        options: srcHintOptions
      }
    },
    karma: {
      unit: {
        configFile: 'config/karma.conf.js'
      },
      amd_unit: {
        configFile: 'config/amd-karma.conf.js'
      }
    },
    compress: {
      build: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'versions/',
        src: ['hydrajs-router-plugin.min.js'],
        dest: 'versions/'
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['hydrajs-router-plugin.js'], dest: 'versions/'}
        ]
      }
    },
    uglify: {
      options: {
        sourceMap: 'versions/hydrajs-router-plugin.min.map',
        sourceMappingURL: "hydrajs-router-plugin.min.map",
        banner: '/*! hydrajs-router-plugin.js v<%= pkg.version %> | Date:<%= grunt.template.today("yyyy-mm-dd") %> |' +
          ' License: https://raw.github.com/HydraJS/hydrajs-router-plugin/master/LICENSE|' +
          ' (c) 2009, 2014\n' +
          '//@ sourceMappingURL=hydrajs-router-plugin.min.map\n' +
          '*/\n',
        preserveComments: "some",
        report: "min",
        beautify: {
          ascii_only: true
        },
        compress: {
          hoist_funs: false,
          join_vars: false,
          loops: false,
          unused: false
        },
        mangle: {
          // saves some bytes when gzipped
          except: [ "undefined" ]
        }
      },
      build: {
        files: {
          'versions/hydrajs-sandbox-plugin.min.js': ['src/hydrajs-router-plugin.js']
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'karma', 'uglify', 'compress', 'copy']);

};