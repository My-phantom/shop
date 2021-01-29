<template>
    <div class="wapers">
        <div class="phone">
            <van-field v-model="text"  placeholder="手机号" /> 
            <span @click="getcode">
                <span>获取验证码</span>
                </span>
        </div>
        <div class="phone">
             <van-field v-model="tel" type="tel"  placeholder="验证码密码" />       
             <span v-if="code">{{code}}</span>
        </div>
        <p class="remind">
            温馨提示:未注册蜂鸟外卖帐号的手机号，登录时将自动注册，且代表已同意
            <span>《用户服务员协议》</span>
        </p>
        <van-button color='#4cd96f' type="primary" @click="login" block>登录</van-button>
        <p>关于我们</p>
    </div>
</template>


<script>
// import Vue from 'vue';
import { Field } from 'vant';
import { Button } from 'vant';
import {ph_code ,phone_login} from '../http/login.js'
// Vue.use(Field);
export default {
    props: {

    },
    data() {
        return {
         tel: '',
         text: '',
        code:''
        };
    },
    methods: {
  
        getcode(){
            ph_code(this.text).then(res =>{
                console.log(res.data.code)
                this.code = res.data.code
                })
        },
        login(){
            phone_login(this.text,this.tel).then(res =>{
                console.log(res.data.data)
                localStorage.setItem('phone',res.data.data.phone)
                // this.$store.commit('phone_n',res.data.data.phone)
                this.$router.push('/home/mine')
            })
        }

    },
    components: {

    },
};
</script>

<style lang="less">
.wapers{
    .phone{
        width: 80%;
        height: .47rem;
        display: flex;
        margin: .1rem auto;
        border: 1px solid #cccccc;
        border-radius: .05rem;
        .van-field__label{
            width: .5rem;
        }
        span{
            display: flex;
            width: 1.2rem;
            align-items: center;
            background-color: #fff;
            color: #cccccc;
            box-sizing: border-box;
            padding: 0 .12rem;
    
        }
    }
    .remind{
        width: 80%;
        text-align: left;
        margin: 0 auto;
        color: #cccccc;
        span{
            color: #02a774;
        }
    }
    .van-button--block{
        width: 80%;
        margin: .2rem auto;
        height: .42rem;
        border-radius: .05rem;
    }
}
</style>
