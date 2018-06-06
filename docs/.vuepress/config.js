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
        title: "Cosmos Academy",
        collapsable: false
      },
      {
        title: "Cosmos SDK Guide",
        collapsable: false,
        children: ["cosmos-sdk/guides/guide.md"]
      },
      {
        title: "Cosmos SDK Spec",
        collapsable: false,
        children: ["cosmos-sdk/spec/"]
      }
    ]
  }
}
