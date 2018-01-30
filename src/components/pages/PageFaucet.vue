<template lang="pug">
#page-faucet
  canvas#renderer
</template>

<script>
import * as PIXI from 'pixi.js'
export default {
  name: 'page-roadmap',
  data: () => ({
    imgLogo: require('assets/images/logos/cosmos-logo.png'),
    world: {},
    tendermintNodes: [
      { id: 'tm-synt', title: '0.16.0', era: 'synthesis', done: true },
      { id: 'tm-atom', title: '0.17.0', era: 'atomic', done: false },
      { id: 'tm-gala', title: '0.18.0', era: 'galactic', done: false },
      { id: 'tm-plan', title: '0.19.0', era: 'plantetary', done: false },
      { id: 'tm-luna', title: '0.20.0', era: 'lunar', done: false }
    ],
    gowireNodes: [
      { id: 'gw-synt', title: '0.7.0', era: 'synthesis', done: true },
      { id: 'gw-atom', title: '0.8.0', era: 'atomic', done: false },
      { id: 'gw-gala', title: '0.9.0', era: 'galactic', done: false },
      { id: 'gw-plan', title: '0.10.0', era: 'plantetary', done: false },
      { id: 'gw-luna', title: '0.11.0', era: 'lunar', done: false }
    ],
    sdkNodes: [
      { id: 'sdk-synt', title: '0.8.0', era: 'synthesis', done: true },
      { id: 'sdk-atom', title: '0.9.0', era: 'atomic', done: false },
      { id: 'sdk-gala', title: '0.10.0', era: 'galactic', done: false },
      { id: 'sdk-plan', title: '0.11.0', era: 'plantetary', done: false },
      { id: 'sdk-luna', title: '0.12.0', era: 'lunar', done: false }
    ],
    hubNodes: [
      { id: 'hub-synt', title: '0.5.0', era: 'synthesis', done: true },
      { id: 'hub-atom', title: '0.6.0', era: 'atomic', done: false },
      { id: 'hub-gala', title: '0.7.0', era: 'galactic', done: false },
      { id: 'hub-plan', title: '0.8.0', era: 'plantetary', done: false },
      { id: 'hub-luna', title: '0.9.0', era: 'lunar', done: false }
    ],
    uiNodes: [
      { id: 'ui-synt', title: '0.3.0', era: 'synthesis', done: true },
      { id: 'ui-atom', title: '0.4.0', era: 'atomic', done: false },
      { id: 'ui-gala', title: '0.5.0', era: 'galactic', done: false },
      { id: 'ui-plan', title: '0.6.0', era: 'plantetary', done: false },
      { id: 'ui-luna', title: '0.7.0', era: 'lunar', done: false }
    ]
  }),
  methods: {
    setupWorld () {
      this.world = new PIXI.Application({
        view: this.$el.querySelector('#renderer'),
        width: window.innerWidth * 2,
        height: window.innerHeight * 2,
        autoresize: true
      })
      this.$el.appendChild(this.world.view)
    },
    setupSpriteLogo () {
      PIXI.loader.add('spriteLogo', this.imgLogo).load((loader, resources) => {
        // This creates a texture from a 'spriteLogo.png' image
        const spriteLogo = new PIXI.Sprite(resources.spriteLogo.texture)

        spriteLogo.scale = { x: 0.5, y: 0.5 }

        // Setup the position of the spriteLogo
        spriteLogo.x = this.world.renderer.width / 2
        spriteLogo.y = this.world.renderer.height / 2

        // Rotate around the center
        spriteLogo.anchor.x = 0.5
        spriteLogo.anchor.y = 0.5

        // Add the spriteLogo to the scene we are building
        this.world.stage.addChild(spriteLogo)

        // Listen for frame updates
        this.world.ticker.add(() => {
          // each frame we spin the spriteLogo around a bit
          spriteLogo.rotation += 0.01
        })
      })
    },
    addText (textString, parent = this.world.stage) {
      let text = new PIXI.Text(textString, {
        fontFamily: 'Arial',
        fontSize: 64 * Math.random() + 16,
        fill: 0xddeeff,
        align: 'center'
      })
      // text.x = this.world.renderer.width * Math.random()
      // text.y = this.world.renderer.height * Math.random()
      text.anchor.x = 0.5
      text.anchor.y = 0.5
      parent.addChild(text)
    },
    addNode (textString, parent = this.world.stage) {
    }
  },
  mounted () {
    this.setupWorld()
    // this.setupSpriteLogo()
    this.addText('hello world!')
    this.addText('hello world!')
    this.addText('hello world!')
    this.addText('hello world!')
    this.addText('hello world!')
    this.addText('hello world!')
    this.addText('hello world!')
  }
}
</script>

<style lang="stylus">
@import '~variables'

#renderer
  width 100vw
  height 80vh
</style>
