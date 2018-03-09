<template lang="html">
    <div>
      <Heador/>
      <Slider/>
      <Ada/>
      <Money/>
      <Adb/>
      <Footor/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./mslider.vue"
import Ada from "./ada.vue"
import Money from "./money.vue"
import Adb from "./adb.vue"
export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Slider,
    Ada,
    Money,
    Adb,
  },
}
</script>
