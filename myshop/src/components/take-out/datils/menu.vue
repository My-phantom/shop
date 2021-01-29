<template>
    <div class="menu">
           <ul class="ordlist">
               <li v-for="(item,index) in food_list" :key="index" @click="tap(index)" :class="{light:index==light}"> 
                   <!-- <router-link :to="`/datils/0/menu/${index}`">
                    <img :src="item.icon" alt="" v-if="item.icon">
                    {{item.name}}
                   </router-link> -->
                   <a :href="`#${item.name}`">
                        <img :src="item.icon" alt="" v-if="item.icon">
                        {{item.name}}
                   </a>
               </li>
           </ul>
           <div class="main" @scroll="change()" ref="main">
            <div class="food_list" v-for="(item,index) in food_list" :key="index" ref="men">
                <h3 :id="item.name" ref="tl">{{item.name}}</h3>
                <ul>
                    <li v-for="(ite,index) in item.foods" :key="index">
                        <div class="img">
                            <img :src="ite.image" alt="">
                        </div>
                        <div class="food_con">
                            <p class="name" >{{ite.name}}</p>
                            <p class="msg">{{ite.description}}</p>
                            <p class="food_num">
                                <span class="">
                                    月售{{ite.sellCount}}份
                                </span>
                                <span class="">
                                    好评{{ite.rating}}%
                                </span>
                            </p>
                            <p class="price">
                               ￥{{ite.price}}
                            </p>
                            <div class="add" >
                                <CarControl  :food="ite"/>

                                <!-- <span @click="add(index)">+</span>
                                <div v-if="isNa">
                                    <van-stepper v-model="ite.zprice"  theme="round" color="##00B53C" button-size="18" disable-input  />
                                </div> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
               <!-- <router-view></router-view> -->
           </div>
        <Shopcar :info ="info" />
    </div>
</template>

<script>
import { Stepper } from 'vant';
import CarControl from '../datils/shop_add'
import Shopcar from '../datils/shopcar'
export default {
    props: ['menu','info'],
    data() {
        return {
        value:0,
        light:0,
        isNa:false,
    
        };
    },
    methods: {
        tap(v){
            this.light =v
        },
        change(){
            this.$refs.men.forEach((item,index)=>{
                if(this.$refs.main.scrollTop>=(item.offsetTop-55) &&this.$refs.main.scrollTop<=((item.offsetTop-55)+item.offsetHeight)){
                    this.light=index
                }
            })
        },
        add(){
            this.isNa=true
            console.log(this.value)
        }
    },
    computed:{
        food_list(){
  
         return  this.$store.state.goods[0]},
        // food_info(){

        //  return  this.$store.state.info
        // }
    },
    components: {
         CarControl,
         Shopcar
    },
    beforeMount(){

        this.$router.push('/datils/1')
    }

}
</script>

<style scoped lang="less">
.menu{
    display: flex;
    height: 100%;
    .ordlist{
        // width: .82rem;
        width: 1.3rem;
        background-color: #f3f5f7;
        height: 100%;
        overflow-y: auto;
   
        li{
            // width: .82rem;
            width: 100%;
            border-bottom: 1px solid #e7eaeb;
            height: .54rem;
            // box-sizing: border-box;
            // padding: 0 .12rem;
            &.light{
                background-color: #fff;
            }
            a{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    display: block;
                    height:.12rem;
                    width: .12rem;
                    margin-right: .12rem;
                }
                &.router-link-active{
                    background-color: #fff;
                    color: #02a774;
                }
            }
        }
    }
    .main{
        // height: 50%;
        height:100%;
        overflow: auto;
        .food_list{
            h3{
                color: #93999f;
                text-align: left;
                background-color: #f3f5f7;
                padding-left: .12rem;
                border-left: 2px solid #d9dde1;
            }
            ul{
                box-sizing: border-box;
                padding: 0 .18rem;
                li{
                    display: flex;
                    height: 1.14rem;
                    border-bottom: 1px solid #f2f3f3;
                    align-items: center;
                    .img{
                        width: .8rem;
                        height: .8rem;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .food_con{
                        flex: 1;
                        margin-left: .1rem;
                        text-align: left;
                        color: #93999f;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        .name{
                            color: #000;
                        }
                        .msg{
                
                        }
                        .price{
                            color: red;
                        }
                    }
                }
            }
        }
    }
    .shopcarfix{
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>
