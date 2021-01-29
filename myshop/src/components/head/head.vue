<template>
    <div class="waper">
        <span class="title">{{title}}</span>
        <slot name="icon"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type:String
        }
    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style   lang="less">
.waper{
    width: 100%;
    position: relative;
    height: .46rem;
    background-color: #02a774;
    color: white;
    .title{
        display: block;
        width: 1.9rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: .2rem;
         white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
    .icon_l{
        position: absolute;
        left: .16rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .26rem;
        display: flex;
        align-content: center;
    }
    .icon_r{
        position: absolute;
        right: .16rem;
        top: 50%;
        transform: translateY(-50%);
       a{
           color: white;
            font-size: .13rem;
       }
       .mine{
           background-color: #fff;
           box-sizing: border-box;
           padding: .01rem;
           .my {
               color: #18af80;
           }
       }
    }
}
</style>
