<template>
    <div class="tal_msg">
        <div class="read"> 
             <van-icon name="checked"  color="#02a774"/>
             只看有内容的评论
        </div>
        <div v-for="(item,index) in evaluate" :key="index" class="talk_list">
            <div class="img" >
                <img :src="item.avatar" alt="">
            </div>
                <div class="tal_r" > 
                    <p class="name">
                        <span class="user">{{item.username}}</span>
                        <span class="tal_time">{{ formate(item.rateTime)}}</span>
                    </p>
                    <p class="star" v-if="item.deliveryTime"> <van-rate v-model="item.deliveryTime" readonly allow-half  size=".15rem" color="#ffa51d" /> {{item.deliveryTime}}</p>
                    <p class="con">{{item.text}}</p>
                    <div class="con" v-if="item.recommend">
                        <van-icon name="good-job-o" color="#f5a100" v-if="item.rateType == 0" />
                        <span v-for="(ite,index) in item.recommend" :key="index">
                            {{ite}}
                        </span>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {datils} from '../../http/datils'
import { Icon } from 'vant';
import { Rate } from 'vant';

export default {
    props:['evaluate'],
    data() {
        return {
            list:''
        };
    },
    methods: {
        formate(v){
            var v = new Date()
            var year = v.getFullYear()<10?"0"+v.getFullYear():v.getFullYear()
            var month = v.getMonth()<10?"0"+v.getMonth():v.getMonth()
            var  day  = v.getDate()<10?"0"+v.getDate():v.getDate()
            var hour = v.getHours()<10?"0"+v.getHours():v.getHours()
            var min = v.getMinutes()<10?"0"+v.getMinutes():v.getMinutes()
            var ms = v.getSeconds()<10?"0"+v.getSeconds():v.getSeconds()
            return `${year}-${month}-${day} ${hour}:${min}:${ms}`
        }
    },

    
    computed:{
        //  talsu(){
        //      if(this.evaluate == 2){
        //          return this.list.filter(item =>{
        //             return item.rateType == 0
        //          })
        //      }else if(this.evaluate == 3){
        //           return this.list.filter(item =>{
        //             return item.rateType == 1
        //         })
        //      }else{
        //          return this.list
        //      }
        // },
    },
    components: {

    },
// mounted(){
//         console.log(this.evaluate)
//         datils(1).then(
//             res =>{
//                 this.list = res.data.data.ratings
//                 console.log(this.list)
//             }
//         )
//     }

};
</script>

<style scoped lang="less">
.tal_msg{
    .read{
        text-align: left;
        margin: .14rem .2rem;
    }
    .talk_list{
        display: flex;
        box-sizing: border-box;
        padding: .2rem 0;
        border-top: 1px solid #f2f3f3;
        .img{
            width: .6rem;
            img{
                display: block;
                width: .28rem;
                height: .28rem; 
                border-radius: 50%;
                margin: 0 auto;
            }
        }
        .tal_r{
            flex: 1;
            text-align: left;
            box-sizing: border-box;
            padding-right: .18rem;
            font-size: .12rem;
            .name{
                display: flex;
                justify-content: space-between;
            }
            .con{
                span{
                    border: 1px solid #ebeced;
                    color: #93999f;
                    margin: .04rem;
                    display: inline-block;
                }
            }
        }
    }
}
</style>
