module.exports = {
  title: "Cosmos Network",
  description: "Documentation for the Cosmos Network.",
  dest: "./dist/docs",
  base: "/docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Back to Cosmos', link: 'https://cosmos.network' },
    ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "/introduction/what-is-the-hub",
          "/introduction/tendermint",
        ]
      },
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "/getting-started/installation",
          "/getting-started/full-node",
          "/getting-started/voyager",
        ]
      },
      {
        title: "Cosmos SDK",
        collapsable: false,
        children: [
          "/sdk/overview",
          "/sdk/security",
          "/sdk/core",
          "/sdk/modules",
          "/sdk/the-lcd",
          "/sdk/basecoin",
          "/sdk/building-an-app",
          "/sdk/building-a-wallet",
        ]
      },
      {
        title: "Specifications",
        collapsable: false,
        children: [
          "/specs/overview",
          "/specs/governance",
          "/specs/ibc",
          "/specs/staking",
          "/specs/icts",
        ]
      },
      {
        title: "Lotion JS",
        collapsable: false,
        children: [
          "/lotion/overview",
          "/lotion/building-an-app",
        ]
      },
      {
        title: "Validators",
        collapsable: false,
        children: [
          "/validators/overview",
          "/validators/security",
          "/validators/faqs",
          "/validators/becoming-a-validator",
        ]
      },
      // {
      //   title: "Glossary",
      //   collapsable: true,
      //   children: [
      //     "",
      //   ]
      // },
      {
        title: "Resources",
        collapsable: true,
        children: [
          "/resources/whitepaper",
        ]
      },
    ]
  }
}
