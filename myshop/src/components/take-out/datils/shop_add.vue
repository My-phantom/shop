<template>
    <div class="carcontrol">
        <div class="iconfont icon-remove-circle-outline" v-if="food.sum>0" @click="updatefoot(false)"></div>
        <div class="cart-count" v-if="food.sum>0">{{food.sum}}</div>
        <div class="iconfont icon-jia" @click="updatefoot(true)" ></div>
    </div>
</template>

<script>
export default {
    props: {
        food:Object
    },
    data() {
        return {

        };
    },
    methods: {
       updatefoot(isAdd){
           this.$store.dispatch('updata',{isAdd,food:this.food})
       }
    },
    components: {

    },
};
</script>

<style lang="less">
    .carcontrol{
        display: flex;
        align-items: center;
        .icon-remove-circle-outline{
            display: inline-block;
            padding: .06rem;
            line-height: .24rem;
            font-size: .24rem;
            color: #02A774;
        }
        .car-count{
            display: inline-block;
            vertical-align: top;
            width: .12rem;
            padding-top: .06rem;
            line-height: .24rem;
            text-align: center;
            font-size: .1rem;
            color: rgba(147, 153, 159);
        }
        .icon-jia{
            display: inline-block;
            padding: .06rem;
            line-height: .24rem;
            font-size: .2rem;
            color:#02A774 ;

        }

    }
</style>
