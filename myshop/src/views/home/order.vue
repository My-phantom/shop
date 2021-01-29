<template>
    <div class="order">
         <Head title="订单"></Head>
         <van-empty description="登陆后查看订单">
            <van-button round type="danger" @click="logn" class="bottom-button">立即登录</van-button>
        </van-empty>
    </div>
</template>

<script>
import Head from '../../components/head/head.vue'
import { Empty } from 'vant';
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        logn(){
            this.$router.push('/login')
        }
    },
    components: {
        Head
    },
};
</script>

<style  lang="less">

  .bottom-button {
    width: 120px;
    height: 40px;
    border-radius: .08rem;
    background-color: #02A774;
    border: none;
  }

</style>

