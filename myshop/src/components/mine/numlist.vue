<template>
    <div class="num">
        <p class="tl">
            <span :style="{color:color}">{{num}}</span>{{type}}
        </p>
        <p class="con">
            {{con}}
        </p>
    </div>
</template>

<script>
export default {
    props: ['num','con','type','color'],
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
.num{
    .tl{
        span{
            font-size: .24rem;
            font-weight: bold;
        }
    }
}
</style>
