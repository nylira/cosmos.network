module.exports = {
  title: "Cosmos Documentation",
  description: "Welcome to Cosmos Documentation.",
  dest: "./dist/docs",
  base: "/docs/",
  themeConfig: {
    sidebar: [
      {
        title: "Welcome",
        collapsable: false,
        children: ["/", "/two"]
      },
      {
        title: "Cosmos Academy"
      },
      {
        title: "Cosmos SDK",
        collapsable: false,
        children: ["cosmos-sdk/guide.md"]
      }
    ]
  }
}
