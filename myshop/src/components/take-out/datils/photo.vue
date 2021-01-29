<template>
    <div class="photo">
        <h3>{{pho_tl}}</h3>
        <ul>
            <li v-for="(item,index) in pho_l.pics" :key="index">
                <img :src="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['pho_tl','pho_l'],
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
.photo{
    text-align: left;
    margin: .12rem 0;
    background-color: #fff;
    h3{
        padding: .12rem ;
    }
    ul{
        overflow: hidden;
        width: 100%;
        height: 1rem;
        li{
            float: left;
            height: 1rem;
            width: 33.3%;
            box-sizing: border-box;
            padding: .05rem;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
