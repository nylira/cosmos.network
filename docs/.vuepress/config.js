module.exports = {
  title: "Cosmos Network",
  description: "Documentation for the Cosmos Network.",
  dest: "./dist/docs",
  base: "/docs/",
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
          ["cosmos-academy/docs/content/introduction", 'What is Cosmos?'],
          ["cosmos-academy/docs/content/introduction", 'Intro to Tendermint'],
        ]
      },
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "cosmos-sdk/docs/guides/sdk/install",
          ["cosmos-academy/docs/content/app-development", "How to run a full node"],
          ["cosmos-academy/docs/content/app-development", "How to connect to the testnet"],
          ["cosmos-academy/docs/content/app-development", "How to use Voyager"],
        ]
      },
      {
        title: "Cosmos SDK",
        collapsable: false,
        children: [
          ["cosmos-sdk/docs/guides/guide", 'Overview'],
          ["cosmos-sdk/docs/guides/guide", 'Security'],
          ["cosmos-sdk/docs/guides/guide", 'Modules (x)'],
          ["cosmos-sdk/docs/guides/guide", 'Key Management'],
          ["cosmos-sdk/docs/guides/guide", 'The LCD'],
          ["cosmos-sdk/docs/guides/guide", 'Building an app'],
          ["cosmos-sdk/docs/spec/", 'Specifications'],
          ["cosmos-academy/docs/content/app-development", "How to build a wallet"],
        ]
      },
      {
        title: "Lotion JS",
        collapsable: false,
        children: [
          ["cosmos-sdk/docs/spec/", 'Overview'],
          ["cosmos-sdk/docs/spec/", 'Resources'],
        ]
      },
      {
        title: "Validators",
        collapsable: true,
        children: [
          ["cosmos-academy/docs/content/app-development", "Overview"],
          ["cosmos-academy/docs/content/app-development", "How to become a validator"],
          ["cosmos-academy/docs/content/app-development", "Security"],
          ["cosmos-academy/docs/content/app-development", "FAQs"],
          ["cosmos-academy/docs/content/app-development", "Sentry Nodes"],
        ]
      },
      {
        title: "Glossary",
        collapsable: true,
        children: [
          "cosmos-sdk/docs/guides/sdk/install",
        ]
      },
      {
        title: "Resources",
        collapsable: true,
        children: [
          ["cosmos-sdk/docs/spec/", 'Whitepaper'],
          ["cosmos-sdk/docs/spec/", 'Fundraiser'],
        ]
      },
    ]
  }
}
