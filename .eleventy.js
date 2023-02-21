const { DateTime } = require('luxon');
const slugify = require("slugify");
const CleanCSS = require('clean-css');
const markdownIt = require('markdown-it');
const markdownAnchor = require('./src/utils/markdown-anchor');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {

  // Date filters
  config.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  config.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  });

  // Limit amount of posts displayed
  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Display alphabetically by title
  config.addFilter("sortByTitle", arr => {
    arr.sort((a, b) => (a.data.title) > (b.data.title) ? 1 : -1);
    return arr;
  });

  // Use slugify to remove apostrophe from tag links
  config.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });

  //Collection
  config.addCollection('profiles', collection => {
  return [...collection.getFilteredByGlob('./src/profiles/*.md')];
  });

  // Minify
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/js/');

  // Markdown and anchor options
    const markdownOptions = {
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
    };

    config.setLibrary('md', markdownIt(markdownOptions).use(markdownAnchor));

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'public'
      }
    };
  };
