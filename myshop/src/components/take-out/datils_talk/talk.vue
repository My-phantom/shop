<template>
    <div class="talk">
        <div class="head">
            <div class="head_l">
                <p class="overall">{{talk_list.info.score}}</p>
                <p>综合评分</p>
                <p>高于周边商家99%</p>
            </div>
            <div class="head_r">
                <p class="serve">
                    <van-rate v-model="talk_list.info.serviceScore" readonly  allow-half  size=".15rem" color="#ffa51d" />
                    服务态度<span> {{talk_list.info.serviceScore}}</span></p>
                <p class="shopser">
                    <van-rate v-model="talk_list.info.foodScore" readonly  allow-half  size=".15rem" color="#ffa51d" />
                    商品评分<span> {{talk_list.info.foodScore}}</span></p>
                <p class="time">送达时间<span>{{talk_list.info.deliveryTime}}分钟</span> </p>
            </div>
        </div>
        <Talkcon :talcon="talk_list"></Talkcon>
    </div>
</template>

<script>
import { Rate } from 'vant';
import { Tab, Tabs } from 'vant';
import Talkcon from './tab'
export default {
    
    props: ['talk_list'],
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        Talkcon
    },
};
</script>

<style scoped lang="less">
.talk{
    height: 100%;
    overflow: auto;
    background-color: #f3f5f7;
    .head{
        margin-top:.12rem ;
        display: flex;
        align-items: center;
        background-color: #fff;
    }
    .head_l{
        border-right: 1px solid #e6e7e8;
        padding: 0 .1rem;
        box-sizing: border-box;
        width: 1.5rem;
        .overall{
            font-size: .3rem;
            color: #ffa51d;
        }
        p{
              &:nth-child(2){
                    font-weight: bold;
                    font-size: .14rem;
                }
                &:last-child{
                    font-size: .15rem;
                    color: #A1A7AC;
                }

        }
    }
    .head_r{
        box-sizing: border-box;
        padding: 0 .1rem ;
        text-align: left;
        flex: 1;
        p{
            span{
                color: #ffa51d;
            }
        }
        .van-rate{
            margin:  .08rem;
        }
        .time{
            font-weight: bold;
            margin: .05rem 0 ;
            span{
                margin-left: .12rem;
                color: #93999f;
            }
        }

    }
  
}
</style>
