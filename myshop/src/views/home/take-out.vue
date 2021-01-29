<template>
<div class="tak">    
    <Head :title="address">
        <template #icon>
            <span class="icon_l" @click="search">
                <van-icon name="search" />
            </span>
            <div class="icon_r">
                <router-link to="/login" v-show="!phone">登录|</router-link>
                <router-link to="/home"  v-show="!phone">注册</router-link>
                <router-link to="/home/mine"  v-show="phone" class="mine">
                    <i class=" iconwode1  iconfont my"></i>
                </router-link>
            </div>
        </template>
    </Head>
    <Banner>
        <template #banner>
            <swiper-slide>
                <ul class="banlist">
                    <li v-for =" (item,index) in banlist.slice(0 ,8)" :key="index">
                        <router-link to="/home/take-out">
                            <img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="">
                            <span>{{item.title}}</span>
                        </router-link>
                    </li>
                </ul>
            </swiper-slide>
            <swiper-slide>
                <ul class="banlist">
                    <li v-for =" (item,index) in banlist.slice(8)" :key="index">
                        <router-link to="/home/take-out">
                            <img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="">
                            <span>{{item.title}}</span>
                        </router-link>

                    </li>
                </ul>
            </swiper-slide>
        </template>
    </Banner>
    <div class="tllist">
        <van-icon name="wap-nav" />
        附件商家
    </div>
  <Shop></Shop>

</div>
</template>

<script>
import Head from '../../components/head/head.vue'
import {title ,banner ,list} from '../../components/http/home'
import Banner from '../../components/banner'
import { Icon } from 'vant';
import Shop from '../../components/take-out/shoplist'
export default {
    props: {

    },
    data() {
        return {
            phone:localStorage.getItem('phone'),
            address:'',
            banlist:'',
            shoplite:[]
        };
    },
    methods: {
        search(){
            this.$router.push('/home/search')
        }
    },  
    components: {
        Head,
        Banner,
        Shop
    },
    mounted(){
        title().then(res =>{
            // console.log(res.data.data.name)
            this.address = res.data.data.name
        })
        banner().then(res =>{
            this.banlist = res.data.data
            // console.log(res.data.data)
        })
    }
};
</script>

<style  lang="less">
.banlist{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
        width: 25%;
        height: 50%;
        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            padding: .1rem 0;
            width: 100%;
            height: 100%;
            img{
                display: block;
                width: 50%;
            }
        }
    }
}
.tllist{
    text-align: left;
}
</style>
