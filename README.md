# grunt-css-selectors

[![Build Status](https://travis-ci.org/ericf/grunt-css-selectors.png?branch=master)](https://travis-ci.org/ericf/grunt-css-selectors)
[![Dependency Status](https://gemnasium.com/ericf/grunt-css-selectors.png)](https://gemnasium.com/ericf/grunt-css-selectors)
[![npm Version](https://badge.fury.io/js/grunt-css-selectors.png)](https://npmjs.org/package/grunt-css-selectors)

> Mutate CSS selectors.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-selectors --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-selectors');
```

## The "css_selectors" task

### Overview
In your project's Gruntfile, add a section named `css_selectors` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_selectors: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.indent
Type: `String`
Default value: `'    '` (four spaces)

Intendation to apply to rules when Rework-ing the CSS.

#### options.mutations
Type: `Object[]`
Default value: `[]`

A collection of mutations to apply, in order, to selectors within the CSS. There
are two types of mutations:

- **Prefix**: A String selector to prefix all selectors with. `html` and `body`
  selectors are special cased by being replaced with the `prefix`.

- **Replace**: Replace a selector or part of a selector with another selector.
  This uses [`String.replace()`](http://mdn.io/string.replace) under the hood.

### Usage Examples

#### Prefix Selectors
In this example, all of the selectors in `foo.css` will be prefixed with `.foo`:

```js
grunt.initConfig({
  css_selectors: {
    options: {
      mutations: [
        {prefix: '.foo'}
      ]
    },
    files: {
      'dest/foo-prefixed.css': ['src/foo.css'],
    },
  },
})
```

#### Replace Selectors
In this example, all `.pure` in `foo-pure.css` selectors will be replaced with
`.yui3`:

```js
grunt.initConfig({
  css_selectors: {
    options: {
      mutations: [
        {search: /^\.pure/g, replace: '.yui3'}
      ]
    },
    files: {
      'dest/foo-yui3.css': ['src/foo-pure.css'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### 1.0.0 (2014-01-03)

* [!] Stable.

* Updated dependencies.

* Added Travis CI support.


### 0.1.2 (2013-09-27)

* Fixed issue with selectors in media queries and keyframes not being visited by
  updating the `rework-mutate-selectors` plugin.


### 0.1.1 (2013-09-25)

* Fixed copyright on all files to be Yahoo! Inc.


### 0.1.0 (2013-09-25)

* Initial Release
