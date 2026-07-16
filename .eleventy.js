module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("pictures");
  eleventyConfig.addPassthroughCopy("darkmode.js");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

