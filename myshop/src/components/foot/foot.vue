<template>
    <ul class="list">
        <li v-for="(item,index) in list" :key="index">
            <router-link :to="item.path">
                <i :class="item.icon"></i>
                <p class="text">{{item.text}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            list:[
                {
                    text:"外卖",icon:'iconicon-- iconfont',path:"/home/take-out"
                },
                {
                    text:"搜索",icon:'iconsousuo  iconfont',path:"/home/search"
                },
                {
                    text:"订单",icon:'icondingdan2 iconfont',path:"/home/order"
                },
                {
                    text:"我的",icon:'iconwode1 iconfont',path:"/home/mine"
                },
            ]
        };  
    },
    methods: {

    },
    components: {

    },
};
</script>

<style   lang="less">
.list{
    background-color: #fff;
    width: 100%;
    height: .5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0;
    display: flex;
    border-top:  1px solid #cccccc;
    box-sizing: border-box;
    padding-top: .06rem;
    padding-bottom: .02rem;
    li{
        flex: 1;
        height: 100%;
        a{
            display: block;
            width: 100%;
            height: 100%;
            font-size: .12rem;
            color: #000;
            &.router-link-active{
                color: #02a774;
            }
        }
    }
}
</style>
