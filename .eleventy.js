const { feedPlugin } = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("pictures");
  eleventyConfig.addPassthroughCopy("darkmode.js");

  eleventyConfig.addPlugin(feedPlugin, {
        type: "rss",
        outputPath: "/feed.xml",

        collection: {
            name: "post",
           
        },

        metadata: {
            language: "en",
            title: "YBG CP",
            subtitle: "Thoughts, stories, and blog posts.",
            base: "https://ybgcp.com/",
            author: {
                name: "CP"
            }
        }
    });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

