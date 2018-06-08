module.exports = {
  title: "Cosmos Network",
  description: "Welcome to Cosmos Documentation.",
  dest: "./dist/docs",
  base: "/docs/",
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Testnet', link: '/testnet' },
      { text: 'Documentation', link: '/docs' },
      { text: 'Blog', link: 'https://blog.cosmos.network' },
    ],
    sidebar: [
      {
        title: "Installation",
        collapsable: true,
        children: [
          "cosmos-sdk/docs/guides/sdk/install",
        ]
      },
      {
        title: "Introduction",
        collapsable: true,
        children: [
          "cosmos-academy/docs/content/introduction",
          "cosmos-academy/docs/content/concepts",
          "cosmos-academy/docs/content/app-development",
          "cosmos-academy/docs/content/concepts",
          "cosmos-academy/docs/content/community",
          "cosmos-academy/docs/content/media",
          "cosmos-academy/docs/content/research",
          "cosmos-academy/docs/content/external-resources",
        ]
      },
      {
        title: "Getting Started",
        collapsable: true,
        children: [
          "cosmos-sdk/docs/guides/guide",
        ]
      },
      {
        title: "Cosmos SDK",
        collapsable: true,
        children: [
          "cosmos-sdk/docs/spec/",
        ]
      },
      {
        title: "Lotion",
        collapsable: true,
      },
      {
        title: "Validators",
        collapsable: true,
      },
      {
        title: "Wallets",
        collapsable: true,
      },
      {
        title: "Glossary",
        collapsable: true,
      },
      {
        title: "Resources",
        collapsable: true,
      },
    ]
  }
}
