<template>
  <form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" name="mc-embedded-subscribe-form" class="form-email-signup validate form" target="_blank" novalidate>

    <field
      id="mce-EMAIL"
      name="EMAIL"
      type="email"
      size="lg"
      placeholder="name@email.com">
    </field>
    <btn
      type="submit"
      icon="email"
      size="lg"
      id="mc-embedded-subscribe">
    </btn>

    <!-- anti-bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
  </form>
</template>

<script>
import Btn from '@nylira/vue-button'
import Field from '@nylira/vue-field'
export default {
  components: {
    Btn,
    Field
  }
}
</script>

<style lang="stylus">
@require '~variables'

.form-email-signup
  display flex
  width 100%
  max-width 24rem
  margin 0 auto

.ni-btn#mc-embedded-subscribe
  .ni-btn-container
    border-left-width 1px
    border-radius 0 0.25rem 0.25rem 0

    .ni-btn-value
      display none

@media screen and (min-width: 640px)
  .ni-btn#mc-embedded-subscribe
    .ni-btn-container
      .ni-btn-value
        display inline
</style>

