<template>
    <div class="conlists">
        <p class="list_r">
            <i :class="[icon]"></i>
            {{tx}}
        </p>
        <i class="iconfanhui  iconfont back" ></i>
    </div>
</template>

<script>
export default {
    props: ['icon','tx'] ,
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

<style scoped lang="less">
    .conlists{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .list_r{
            font-size: .15rem;
            .iconfont{
                font-size: .16rem;
            }
            .icondingdan2{
                color: #18af80;
            }
            .iconqianmoney47{
                color: #ff5f3e;
            }
            .iconvip{
                color: #ff9a02;
            }
            .iconlou{
                color: #02a774;
            }

        }
        .back{
            display: block;
            transform: rotateZ(-180deg);
        }
    }
</style>
