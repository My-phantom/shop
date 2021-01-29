<template>
    <div class="shopcarfix">
        <div class="shopcar">
            <div class="content">
                <div class="content-left">
                    <div class="logo-wapper">
                        <div class="logo " :class="{ highlight:znum!=0}">
                            <i class="iconfont icon-shop_car " :class="{ highlight:znum!=0}"></i>
                        </div>
                        <div class="num" v-show="znum !== 0">{{znum}}</div>
                    </div>
                    <div class="price  highlight" >￥{{zpr}}</div>
                    <div class="desc" v-if="info">另需配送费￥{{info.deliveryPrice}}</div>
                </div>
                <div class="content-right ">
                    <div class="pay not-enough" v-if="info">
                        <span   v-if="info.minPrice - zpr > 0">还差￥{{info.minPrice - zpr}} 元起送</span>
                        <span v-else>结算</span>
                    </div>
                </div>
            </div>
            <div class="shopcar-list"  >
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty">
                        清空
                    </span>
                </div>
                <div class="list-content" >
                    <ul>
                        <li class="food" v-for="(item,index) in  carfoods" :key="index">
                            <span class="name">{{item.name}}</span>
                            <div class="cartcontrol-wrapper">
                                <div class="price">￥{{item.price*item.sum}}</div>
                                <Cartcontrol :food="item" />
                                <!-- <div class="cartcontrol">
                                    <div class="iconfont icon-remove-circle-outline"></div>
                                    <div class="cart-count" >{{item.sum}}</div>
                                    <div class="iconfont icon-jia"></div>
                                </div> -->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="list-mask"></div>
      
    </div>
</template>

<script>
import Cartcontrol from './shop_add'
export default {
    props: ['info'],
    data() {
        return {
           
        };
    },
    methods: {

    },
    components: {
        Cartcontrol
    },
    computed:{
        carfoods(){
            return this.$store.state.carfoods;
        },
        znum(){
            return this.$store.getters.znum
        },
        zpr(){
            return this.$store.getters.zprice;
        },
        // info(){
        //     return  this.$store.state.info;
        // }
    },
    mounted(){
        console.log( this.$store.state.info)
        this.$forceUpdate(this.info)
    }

    

};
</script>

<style lang="less">
    .shopcarfix{
        width: 100%;
        height: .48rem;
        position: relative;
        .shopcar{
            height: 100%;
            display: flex;
            justify-content: space-between;
            .content{
                display: flex;
                background-color: #141d27;
                flex: 1;
                justify-content: space-between;
                .content-left{
                    display: flex;
                    color: white;
                    width: 1.75rem;
                    position: relative;
                    z-index: 11;
                    .logo-wapper{
                        height: .6rem;
                        width:  .6rem;
                        border-radius: 50%;
                        position: relative;
                        position: absolute;
                        left:.1rem ;
                        bottom: 0rem;
                        background-color: #000;
                        .logo{
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            width: 100%;
                            background-color: #2b343c;
                            .icon-shop_car{
                                font-size: .3rem;
                                color: #80858a;
                            }
                        }
                        .num{
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: .24rem;
                            height: .16rem;
                            line-height: .16rem;
                            border-radius: .08rem;
                            background-color: red;
                            // display: none;
                        }
                        .highlight{
                            color: white;
                            background-color: #02A774;
                            .iconfont{
                                color: white;
                            }
                        }
                    }
                    .price{
                        position: absolute;
                        left:.75rem ;
                        bottom: 50%;
                    }
                    .desc{
                        position: absolute;
                        left:.75rem ;
                        bottom: 0%;
                    }
                }
                .content-right{
                    display: flex;
                    color: white;
                    align-items: center;
                    width: 1.06rem;
                    background-color: #2b333b;
                    height: 100%;
                    .not-enough{
                        width: 100%;
                        height: 100%;
                        line-height: .48rem;
                        background-color: #00B53C;
                    }
                }
      
            }
            .shopcar-list{
                position: absolute;
                bottom: .48rem;
                left: 0;
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: space-between;
                z-index: 10;
                background-color: #fff;
                // display: none;
                .list-header{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #f3f5f7;
                    height: .4rem;
                    padding: 0 .18rem;
                    box-sizing: border-box;
                    border-bottom:1px solid  #dbdee1;
                    .empty{
                        color: #01A0DC;
                    }
                }
                .list-content{
                    ul{
                        box-sizing: border-box;
                        padding: 0 .18rem;
                        li{
                            height: .46rem;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .cartcontrol-wrapper{
                                display: flex;
                                align-items: center;
                                .price{
                                    margin-right: .12rem;
                                    color: red;
                                }
                                .cartcontrol{
                                    display: flex;
                                    align-items: center;
                                    .cart-count{
                                        padding: 0 .12rem;
                                    }
                                    .iconfont{
                                        color: #02A774;
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
        .list-mask{
            display: none;
            height: 100vh;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: .48rem;
            z-index: 5;
            // filter: blur(10px);
            background-color: rgba(0, 0, 0, .7);
            // background-color: rgba(255, 255, 255, .7);
        }
    
    }
</style>
