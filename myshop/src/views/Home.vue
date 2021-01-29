<template>
  <div class="home">
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '../components/foot/foot'

export default {
  components: {
    Foot
  },
 created(){
    this.$router.push('/home/take-out')
  }
}
</script>
<style lang="less" >
.home{
  height: 100%;
  width: 100%;
  position: relative;
  .iconfont{
    font-size: .14rem;
  }
 .tak{
   height: 90%;
  //  overflow: auto;
 }
}
</style>  
