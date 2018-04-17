let path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

let markdown = require("markdown-it")({
  // markdown-it config
  preset: "default",
  html: true,
  typographer: true,
  linkify: true,
  preprocess: (markdownIt, source) => source
})

markdown.use(require("markdown-it-anchor"))
markdown.use(require("markdown-it-table-of-contents"), {
  includeLevel: [2, 3, 4, 5],
  containerClass: "minimal-toc"
})

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("images", resolve("src/assets/images"))
      .set("content", resolve("src/content"))
      .set("scripts", resolve("src/scripts"))
      .set("variables", resolve("src/styles/variables.styl"))
      .set("buttons", resolve("src/components/buttons"))
      .set("cards", resolve("src/components/cards"))
      .set("common", resolve("src/components/common"))
      .set("forms", resolve("src/components/forms"))
      .set("modals", resolve("src/components/modals"))
      .set("navigation", resolve("src/components/navigation"))
      .set("pages", resolve("src/components/pages"))
      .set("sections", resolve("src/components/sections"))
    config.module
      .rule("pdf")
      .test(/\.pdf/)
      .use("")
      .loader("file-loader")
    config.module
      .rule("markdown")
      .test(/\.md/)
      .use("")
      .loader("vue-markdown-loader")
      .options(markdown)
  }
}
