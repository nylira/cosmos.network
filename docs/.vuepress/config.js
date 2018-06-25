module.exports = {
  title: "Cosmos Network",
  description: "Documentation for the Cosmos Network.",
  dest: "./dist/docs",
  base: "/docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [{ text: "Back to Cosmos", link: "https://cosmos.network" }],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: ["/introduction/cosmos-hub", "/introduction/tendermint"]
      },
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "/getting-started/voyager",
          "/getting-started/installation",
          "/getting-started/full-node",
          "/getting-started/gaiacli"
        ]
      },
      {
        title: "Cosmos SDK",
        collapsable: false,
        children: [
          ["/sdk/overview", "Overview"],
          ["/sdk/core", "Core"],
          "/sdk/modules",
          "/sdk/clients"
        ]
      },
      // {
      //   title: "Specifications",
      //   collapsable: false,
      //   children: [
      //     ["/specs/overview", "Overview"],
      //     "/specs/governance",
      //     "/specs/ibc",
      //     "/specs/staking",
      //     "/specs/icts",
      //   ]
      // },
      {
        title: "Lotion JS",
        collapsable: false,
        children: ["/lotion/overview", "/lotion/building-an-app"]
      },
      {
        title: "Validators",
        collapsable: false,
        children: [
          ["/validators/overview", "Overview"],
          ["/validators/security", "Security"],
          ["/validators/validator-setup", "Validator Setup"],
          "/validators/validator-faq"
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
        children: ["/resources/whitepaper", "/resources/delegator-faq"]
      }
    ]
  }
}
