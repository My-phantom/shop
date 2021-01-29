<template>
    <div class="owner">
    <h3>{{owner_tl}}</h3>
        <ul>
            <li>
                <span class="tl">品类</span>
                <span class="ow_con">{{owner_l.category}}</span>
            </li>
            <li>
                <span class="tl">商家电话</span>
                <span class="ow_con">{{owner_l.phone}}</span>
            </li>
            <li>
                <span class="tl">地址</span>
                <span class="ow_con">{{owner_l.address}}</span>
            </li>
            <li>
                <span class="tl">营业时间</span>
                <span class="ow_con">{{owner_l.workTime}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['owner_tl','owner_l'] ,
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
    .owner{
        background-color: #fff;
        text-align: left;
        h3{
            padding: .12rem;
            font-size: .16rem;
        }
        ul{
            padding: 0 .1rem;
            box-sizing: border-box;

            li{
                height: .48rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #eeeeee;
                justify-content: space-between;
                .tl{
                    font-weight: bold;
                }
            }
        }
    }
</style>
