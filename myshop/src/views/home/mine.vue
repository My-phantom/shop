<template>
    <div class="mine">
        <Head title="我的"></Head>
       <div class="m_msg">
           <div class="img">
                <img src="../../assets/image/user_normal.jpg" alt="">
           </div>
           <div class="mesg" v-if="!phone">
               <ul>
                   <li>
                       <router-link to="/login">登录</router-link>/
                   </li>
                   <li>
                         <router-link to="/login">注册</router-link>
                   </li>
               </ul>
               <p>
                   <i class="iconicon-- iconfont"></i>
                   暂无绑定手机号
               </p>
           </div>
           <div class="phone" v-else>
              <i class="iconicon-- iconfont"></i>
              {{phone}}
           </div>
           <div class="back">
               >
           </div>
       </div>
       <ul class="connum">
           <li>
               <Numlist color='#ff9900' num='0.00' type='元' con="我的余额"></Numlist>
           </li>
           <li>
               <Numlist color='#ff5f3e' num='0' type='个' con="我的优惠"></Numlist>
           </li>
           <li>
               <Numlist color='#6ac20b' num='0' type='分' con="我的积分"></Numlist>
           </li>
       </ul>
       <ul class="conlist">
           <li v-for="(item,index) in list" :key="index">
               <Conlist :icon="item.icon" :tx="item.tx"></Conlist>
           </li>
       </ul>
       <button v-if="phone" @click="back_log" >退出登录</button>
    </div>
</template>

<script>
import Head from '../../components/head/head.vue'
import Numlist from '../../components/mine/numlist'
import Conlist from '../../components/mine/conlist'
import { Dialog } from 'vant';
export default {
    props: {

    },
    data() {
        return {
            phone:localStorage.getItem('phone'),
            list:[
                {icon:'icondingdan2  iconfont' ,tx:'我的订单'},
                {icon:'iconqianmoney47  iconfont' ,tx:'积分商城'},
                {icon:' iconvip   iconfont' ,tx:'蜂鸟外卖会员卡'},
                {icon:'iconlou  iconfont' ,tx:'服务中心'},
            ]
        };
    },
    methods: {
        back_log(){
            Dialog.confirm({
                title: '提示',
                message: '是否退出',
                })
                .then(() => {
                    localStorage.removeItem('phone')
                    location.reload()
                })
                .catch(() => {
                    // on cancel
                });
        }
    },
    components: {
        Head,
        Numlist,
        Conlist
    },
};
</script>

<style  lang="less">
.mine{
    // height: 85%;
    //    overflow: auto;
    .m_msg{
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 0.01rem ;
        height: 1rem;
        background-color: #02a774;
        .img{
            margin-left: .12rem;
            height: .6rem;
            width: .6rem;
            border-radius: 50%;
            overflow: hidden;
            img{

                width: 100%;
            }
        }
        .mesg{
            ul{
                margin-left: .12rem;
                display: flex;
                li{
                    
                    text-align: left;
                      color: white;
                        font-weight: bold;
                        font-size: .16rem;
                    a{
                        color: white;
                        font-weight: bold;
                        font-size: .16rem;
                    }
                }
            }
            p{
                margin-left: .1rem;
                font-size: .14rem;
                color: white;
            }
        }
        .back{
            width: .5rem;
            height: .5rem;
            position: absolute;
            right: 0%;
            color: white;
            font-size: .24rem;
            float: right;
        }
        .phone{
            color: white;
            font-size: .14rem;
        }
    }
    .connum{
        display: flex;
        height: .8rem;
        align-items: center;
        justify-content: space-around;
        li{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 1px solid #cccccc;
            border-bottom: 1px solid #cccccc;
            &:last-child{
                border-right: none;
            }
        }
    }
    .conlist{
       
        li{
            box-sizing: border-box;
            padding: 0 .08rem;
            height: .52rem;
            display: flex;
            align-items: center;
        }
    }
    button{
        width: 100%;
        background-color: red;
        border: none;
        color: white;
        height: .4rem;
        font-size: .15rem;
        border-radius: .05rem;
        margin: .1rem 0;
    }
}
</style>

