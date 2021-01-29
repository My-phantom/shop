<template>
    <div class="login">
        <header>
            <van-icon name="arrow-left" color="#cccc" size="23"  @click="back" />
        </header>
        <h1>蜂鸟外卖</h1>
        <main class="main">
            <ul class="title">
                <li>
                    <router-link to="/login/mesg">短信登录</router-link>
                    <router-link to="/login/psw">密码登录</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        back(){
            this.$router.push('/home')
        }
    },
    components: {

    },
    mounted(){
        this.$router.push('/login/mesg')
    }
};
</script>

<style lang="less">
.login{
    header{
        display: flex;
        padding: .1rem;
    }
    h1{
        font-size: .4rem;
        color: #02a774;
        margin-bottom: .35rem;
    }
    .main{
        ul{
            li{
                a{
                    margin: 0 .22rem;
                }
                .router-link-active{
                    color: #02a774;
                    padding: .02rem 0;
                    font-weight: bold;
                    border-bottom:  2px #02a774 solid;
                }
            }
        }
    }
}
</style>
