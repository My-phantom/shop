<template>
    <div class="psw">
        <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" placeholder="邮箱/用户名/手机号"/>
        <!-- <van-field v-model="username"  /> -->
        <van-field v-model="password" name="密码" type="password" placeholder="请输入密码" />
        <div class="code">
            <van-field v-model="value"  placeholder="验证码" />
            <p class="svg" v-html="code"></p>
        </div>
        <div style="margin: 16px;">
               <van-button color='#4cd96f'  type="info" native-type="submit" block>登录</van-button>
        </div>
         <p>关于我们</p>
        </van-form>        
    </div>
</template>

<script>
import { code , login } from '../http/login.js'
import { Field } from 'vant';
export default {
    props: {

    },
    data() {
        return {
             username: '',
             password: '',
             value:'',
             code:''
        };
    },
    methods: {
     onSubmit() {
            login(this.username,String(this.password) ,String(this.value) ).then(res =>{
                console.log(res)
            })
        },
    },
    components: {

    },
    mounted(){
        code().then(res=>{
            this.code = res.data

        })
    }
};
</script>

<style lang="less">
.psw{
    margin-top: .1rem;
    .van-field{
        margin:  .1rem auto;
        height: .42rem;
        width: 80%;
        border: 1px solid #cccccc;
        border-radius: .05rem;
        .van-cell__value {
            display: flex;
            .van-field__body{
               width: 100%;
            }
       
        }
    }
        .code{
            border:  1px solid #cccccc;
              border-radius: .05rem;
            display: flex;
            width: 80%;
            margin: .1rem auto;
            align-items: center;
            .van-field{
                border: none;
                margin: 0;
                flex: 1;
            }
            .svg{
               flex: 1;
            }
        }
        .van-button--block{
        width: 90%;
        margin: .2rem auto;
        height: .42rem;
        border-radius: .05rem;
    }
}
</style>
