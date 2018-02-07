const state = {
  nodes: {
    hub: [
      { id: 'gaia-1', title: 'Testnet', version: 'Gaia-1', span: 2, date: '2017-12-01', notes: 'Gaia-1 is the first time Cosmos SDK and Tendermint Core are bundled together to form an experimental version of the Cosmos Hub. It includes a dynamic validator set.' },
      { id: 'gaia-2', title: 'Testnet', version: 'Gaia-2', span: 2, date: '2018-01-31', notes: 'Gaia-2 includes basic delegation, UI integration for bonding and unbonding, and a PEX reactor for dynamic peer discovery.' },
      { id: 'gaia-3', title: 'Testnet', version: 'Gaia-3', span: 1, date: '', notes: 'Gaia-3 focuses on the P2P layer. It includes a seed mode, sentry mode architecture, peer IDs, and may bug fixes.' },
      { id: 'gaia-4', title: 'Testnet', version: 'Gaia-4', span: 1, date: '', notes: 'Gaia-4 runs on Cosmos SDK 0.10.0. It includes block rewards for validators and commission fees.' },
      { id: 'gaia-5', title: 'Testnet', version: 'Gaia-5', span: 1, date: '', notes: 'Gaia-5 supports an unbonding period for delegates, HSM, fork and halt detection, as well as a LevelDB server.' }
    ],
    sdk: [
      { id: 'sdk-0-6', title: 'Basecoin', version: '<= 0.6.0', span: 1, date: '2017-06-22', notes: 'Cosmos SDK was originally named Basecoin.' },
      { id: 'sdk-0-7', title: 'Cosmos SDK', version: '0.7.0', span: 1, date: '2017-07-27', notes: 'Basecoin is renamed to Cosmos SDK. Everything changed.' },
      { id: 'sdk-0-8', title: 'Cosmos SDK', version: '0.8.0', span: 1, date: '2017-12-19', notes: '' },
      { id: 'sdk-0-9', title: 'Cosmos SDK', version: '0.9.0', span: 1, date: '', notes: '' },
      { id: 'sdk-0-10', title: 'Cosmos SDK', version: '0.10.0', span: 2, date: '', notes: 'Cosmos SDK 0.10.0 includes the light client daemon.' },
      { id: 'sdk-1-0', title: 'Cosmos SDK', version: '1.0.0', span: 1, date: '', notes: '', continues: true }
    ],
    tmc: [
      { id: 'tmc-0-13', title: 'Tendermint', version: '<= 0.13.0', span: 1, date: '2017-12-06', notes: 'Tendermint 0.13.0 "Constantine" adde new RPC endpoints, a new trust metric for tracking peers, and TxIndexConfig.' },
      { id: 'tmc-0-14', title: 'Tendermint', version: '0.14.0', span: 1, date: '2017-12-12', notes: 'Tendermint 0.14.0 "Keanu" adds a light-client RPC proxy.' },
      { id: 'tmc-0-15', title: 'Tendermint', version: '0.15.0', span: 1, date: '2017-12-29', notes: 'Tendermint 0.15.0 "Leo" adds an RPC query for transactions at a give block height, a new evidence reactor, state features, and new docs.' },
      { id: 'tmc-0-16', title: 'Tendermint', version: '0.16.0', span: 1, date: '', notes: 'Tendermint 0.16.0 ' },
      { id: 'tmc-0-17', title: 'Tendermint', version: '0.17.0', span: 1, date: '', notes: '' },
      { id: 'tmc-0-18', title: 'Tendermint', version: '0.18.0', span: 1, date: '', notes: '' },
      { id: 'tmc-1-0', title: 'Tendermint', version: '1.0.0', span: 1, date: '', notes: '', continues: true }
    ],
    gui: [
      { id: 'gui-0-2', title: 'Cosmos UI', version: '0.2.0', span: 1, date: '2017-12-14', notes: 'The first public release of Cosmos UI. In this release you are able to create a Cosmos account. You also have the ability to send and receive tokens on the Gaia-1 testnet.' },
      { id: 'gui-0-3', title: 'Cosmos UI', version: '0.3.0', span: 1, date: true, notes: '' },
      { id: 'gui-0-4', title: 'Cosmos UI', version: '0.4.0', span: 3, date: true, notes: '' },
      { id: 'gui-0-5', title: 'Cosmos UI', version: '0.5.0', span: 1, date: '', notes: '' },
      { id: 'gui-1-0', title: 'Cosmos UI', version: '1.0.0', span: 1, date: '', notes: '' }
    ]
  }
}

const mutations = {}

export default {
  state,
  mutations
}
