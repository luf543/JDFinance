<template lang="html">
    <div>
      <Heador/>
      <Slider/>
      <Daily/>
      <Footor cname="mfooter"/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./rslider.vue"
import Daily from "./daily.vue"
export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Slider,
    Daily,
  },
}
</script>

<style lang="scss">
.mfooter{
  margin-top: 0!important;
  ul{
    li:first-child{
      display: none;
    }
  }
}
</style>
