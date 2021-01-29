<template>
    <div class="datils">
        <header :style ="{background:`url(${img.bgImg}) no-repeat `,backgroundSize:'100% '}">
            <i class=" iconfanhui  iconfont" @click="back"></i>
        </header>
        <div class="head_img">
            <img :src="img.avatar" alt="">
        </div>
        <div class="titl">
            <p class="tl" @click="showd">
                <span class="brand">品牌</span>
                <span class="title">{{list.name}}</span>
            </p>
            <p class="mesg">
                <span>{{list.score}}</span>
                <span>月售{{list.sellCount}}单</span>
                <span>{{list.description}}</span>
                <span>约{{list.deliveryTime}}分钟</span>
                <span>距离{{list.distance}}</span>
            </p>
            <p class="first"  v-if="list.supports" >
                <span class="icon">{{list.supports[0].name}}</span>
                <span class="con">{{list.supports[0].content}}</span>
                <span class="num"   @click="shows = true">{{list.supports.length}}个优惠</span>
            </p>
            <van-overlay :show="show">
            <div class="wrapper" @click.stop>
                <div class="block">
                    <p class="tl " >
                        <span class="brand">品牌</span>
                        <span class="title">{{list.name}}</span>
                    </p>
                    <div class="introduce">
                        <p>
                            <span class="tl">{{list.score}}</span>
                            <span class="con">评分</span>
                        </p>
                        <p>
                            <span class="tl">{{list.sellCount}}单</span>
                            <span class="con">月售</span>
                        </p>
                        <p>
                            <span class="tl">{{list.description}}</span>
                            <span class="con">约{{list.deliveryTime}}分钟</span>
                        </p>
                        <p>
                            <span class="tl">{{list.deliveryPrice}}元</span>
                            <span class="con">配送费用</span>
                        </p>
                        <p>
                            <span class="tl">{{list.distance}}</span>
                            <span class="con">距离</span>
                        </p>
                    </div>
                    <div class="notice">
                        <p class="notic_tl">公告</p>
                        <p class="notic_con">
                            {{list.bulletin}}
                        </p>
                    </div>
                </div>
                <div class="open"  @click="show = false">X</div>
            </div>
            </van-overlay>
            <van-popup
            v-model="shows"  closeable position="bottom" :style="{ height: '30%' }" >
                <div class="sale">
                    <Active tl="优惠活动" :actives ="list"></Active>
                </div>
            </van-popup>
        </div>
        <van-tabs v-model="active" color=" #02a774">
            <van-tab title="点餐"><Menu  :info="menus.info" :menu="menus.goods" ></Menu></van-tab>
            <van-tab title="评价"><Talk :talk_list="menus"></Talk> </van-tab>
            <van-tab title="商家"><Mea :merlist="list"></Mea></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Overlay } from 'vant';
import {datils} from '../../components/http/datils'
import lis  from '../../assets/js/data.json'
import { Tab, Tabs } from 'vant';
import Menu from '../../components/take-out/datils/menu'
import Mea from '../../components/take-out/datils/mercart'
import Active from '../../components/take-out/datils/active'
import Talk from '../../components/take-out/datils_talk/talk'
export default {
    props: {
       
    },
    data() {
        return {
             list:'',
             img:'',
             show:false,
             shows:false,
             active:0,
             menus:''
             
        };
    },
    methods: {
        showd(){
            this.show = true
        },
        back(){
            this.$router.push('/home')
        }
    },
    components: {
        Menu,
        Active,
        Mea,
        Talk

    },
     mounted(){
         this.$router.push('/datils/1')
            datils(this.$route.params.id).then(res =>{
                this.list = res.data.data.info
                this.menus = res.data.data
                //  this.$store.dispatch('send',{info:this.menus.info} );
                //  this.$store.commit('infos',this.menus.info);
                 this.$store.commit('increment', this.menus.goods);
                // this.img = this.list.info
                console.log(this.menus)
                this.img = res.data.data.info
                 this.$forceUpdate()
            })
        }
};
</script>

<style  lang="less">
.datils{
    height: 96%;
    position: relative;
    header{
        height: .51rem;
        background-size: 100%  210%!important;
        text-align: left;
        line-height: .51rem;
        i{
            margin-left:.1rem ;
            color: white;
        }
    }
    .head_img{
        width: .66rem;
        height:.66rem;
        position: absolute;
        top: .12rem;
        left: 50%;
        transform: translateX(-50%);
        img{
            display: block;
            width: 100%;
        }
    }
    .titl{
        margin-top: .3rem;
        .tl{

            .brand{
                background-color: #ffd930;
                font-size: .12rem;
                box-sizing: border-box;
                padding: .02rem;
            }
            .title{
                font-weight: bold;
                font-size: .2rem;
            }
        }
        .mesg{
            transform: scale(.8);
            span{
                margin: 0 .05rem;
                font-size: .12rem;
            }
        }
        .first{
            width: 3.15rem;
            height: .24rem;
            box-sizing: border-box;
            padding: .05rem;
            margin:  0 auto;
            display: flex;
            justify-content: space-between;
            border: 1px solid #eeeeee;
            align-items: center;
            .icon{
                background-color: #70bc46;
                transform: scaleY(.8);
                color: white;
                margin-right: .05rem;
            }
            .con{
                transform: scaleY(.9);
                display: block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                flex: 1;
            }
        }
          .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            }

            .block {
            width: 90%;
            height: auto;
            background-color: #fff;
            border-radius: .06rem;
            .introduce{
                margin-top:.1rem ;
                display: flex;
                justify-content: space-evenly;
                p{
                    display: flex;
                    flex-direction: column;
                    .tl{
                        font-weight: bold;
                        
                    }
                    .con{
                        font-size: .12rem;
                        transform: scale(.8);
                        color: #cccccc;
                    }
                }
            }
            .notice{
                box-sizing: border-box;
                padding: .15rem;
                .notic_tl{
                    color: #cccccc;
                    margin-bottom: .1rem;
                    text-align: center;
                }
                text-align: left;
            }
            }
            .open{
                width: .25rem;
                height:  .25rem;
                border-radius: 50%;
                line-height: .25rem;
                background-color: rgba(0,0,0,.1);
                border: 1px solid white;
                font-weight: bold;
                color: white;
                margin-top: .3rem;
            }

    }
    .van-tabs{
        height: 76%;
        .van-tab--active{
            z-index: 0;
            color: #02a774;
        }
        .van-tabs__line{
            z-index: 0;
        }
        .van-tabs__wrap{
            height: .37rem;
        }
        .van-tabs__content{
            height: 94%;
            .van-tab__pane{
                height: 100%;
            }
        }
    }
}
</style>
