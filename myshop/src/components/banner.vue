<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <slot name = banner></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:{
            delay:1000,
            // stopOnLastSlide: false,
            // disableOnInteraction: true,
          },
            autoplayDisableOnInteraction : false,
        }
      }
    },
    computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    },
    // mounted() {
    //   console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
  }
</script>
<style lang="less">

    .swiper-container{
        height: 1.75rem;
        .swiper-wrapper{
            height: 80% !important;
            .swiper-slide{
                height: 100%;
            }
        }
    }

</style>