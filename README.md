# grunt-px2rem

> Convert px to rem for mobile html5 page

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-px2rem --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-px2rem');
```

## The "px2rem" task

### Overview
In your project's Gruntfile, add a section named `px2rem` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  px2rem: {
    options: {
      ignore0: true, // ignore 0px default true
      ignore1: true, // ignore 1px default true
      root: 32 // set root fontsize, default 32
    },
    css: { // seperate
      files: [{
        expand: true, // Enable dynamic expansion
        cwd: 'src/css', // Src matches are relative to this path
        src: ['**/*.css'], // Actual patterns to match
        dest: 'dest/css' // Destination path prefix
      }]
    },
    combin: { // concat all and convert
      src: ['src/css/a.css', 'src/css/b.css'],
      dest: 'dest/css/all.css'
    }
  }
  },
});
```

### Attention
---
If you use rem to fit every screen size, You should use javascript to add window resize event, then change th html font-size, for example in zepto or jquery:

```javascript
$(window).on('resize', function () {
  var width = Math.min(document.documentElement.clientWidth, 640); // in my page, I limit it to 640
  $('html').css('font-size', width / 640 * 32 + 'px');
}).triggerHandler('resize');
```
