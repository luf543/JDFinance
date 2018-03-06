<template lang="html">
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href}">
          <img :src="item.src" alt="" />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import {swiper, swiperSlide} from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    props: {
      options: {
        type: Object,
        //注意这里default 对象的返回结构
        default() {
          return {
            autoplay:true,  //是否自动滚动
            loop:true,  //是否循环
            pagination: {  //是否设置指示器
              el:".swiper-pagination",
            },
            notNextTick:false, //下一个点击事件
          }
        },
      },
      items: {
        type: Array,
        default() {
          return []
        }
      },
      cname: {
        type: String,
        default: "",
      }
    },
  }
</script>

<style lang="scss">
  @import "~swiper/dist/css/swiper.css";
</style>