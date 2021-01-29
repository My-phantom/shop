<template>
    <ul class="shoplite">
        <li v-for="(item,index) in shoplite" :key="index">
            <router-link :to="`/datils/${item.id}`">
            <div class="img">
                <img :src="item.image_path" alt="">
            </div>
                <div class="con">
                    <p class="con_tl"><span>品牌</span>  {{item.name}}</p>
                    <p class="grad">
                        <span class="grad_l"> <van-rate v-model="item.rating" readonly allow-half  size=".15rem" color="#ffa51d" /> {{   item.rating}}</span>
                        <span class="shop">月售{{item.recent_order_num}}单</span>
                    </p>
                    <p class="price">
                        <span class="jack_up">￥{{item.float_minimum_order_amount}}起送/</span>
                        <span class="delive">{{item.piecewise_agent_fee.tips}}</span>
                    </p>
                </div>
                <div class="con_r">
                    <ul>
                        <li v-for="(ite,index) in item.supports" :key="index">{{ite.icon_name}}</li>
                    </ul>
                    <p class="exclu">{{item.delivery_mode.text}}</p>
                </div>
    
            </router-link>

        </li>
    </ul>

</template>

<script>
import {list} from '../http/home'
import { Rate } from 'vant';
export default {
    props:{

    },
    data() {
        return {
            shoplite:''
        };
    },
    methods: {

    },
    components: {

    },
    mounted(){
         list().then(res =>{
            this.shoplite = res.data.data

        })
    }
};
</script>

<style lang="less">
.shoplite{
    height: 61%;
    width: 100%;

       overflow: auto;
    &>li{
        height: 1.1rem;
        border-bottom: 1px solid #f8f8f8;
        a{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .img{
                height: .9rem;
                width: .9rem;
                box-sizing: border-box;
                padding-left:.1rem ;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .con{
                flex: 1;
                box-sizing: border-box;
                padding: 0  .1rem;
                text-align: left;
                
                .con_tl{
                    font-size: .15rem;
                        font-weight: bold;
                        color: #000;
                        box-sizing: border-box;
                        padding-bottom: .18rem;
                    span{
                        background-color: #ffd930;
                        font-size: .13rem;
                    
                    }
                }
                .grad{
                    font-size: .12rem;
                    box-sizing: border-box;
            
                    padding-bottom: .12rem;
                    .grad_l{
                        color: #ffa51d;
                        margin-right: .08rem;
                    }
                }
            }
            .con_r{
                margin-right: .06rem;
                ul{
                    display: flex;
                    margin-bottom: .18rem;
                    li{
                        width: .2rem;
                        height: .2rem;
                        border: 1px #cccccc solid;
                    }
                }
                .exclu{
                    transform: scale(.7);
                    font-size: .12rem;
                    color: #4ec29e;
                    border: 1px solid #4ec29e;
                }
            }
        }
    }
}
</style>
