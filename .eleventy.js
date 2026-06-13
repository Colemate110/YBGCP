module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("pictures");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};