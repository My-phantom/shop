<template>
    <div class="ship">
        <h3>{{ship_tl}}</h3>
        <p class="ship_con">
            <span class="send">{{ship.description}}</span>
            由商家配送提供配送，约{{ship.deliveryTime}}分钟送达。 距离{{ship.distance}}
        </p>
        <p>配送费￥{{ship.deliveryPrice}}</p>
    </div>  
</template>

<script>
export default {
    props: ['ship_tl','ship'],
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
.ship{
    padding: .12rem;
    background-color: #fff;
    text-align: left;
    h3{
        margin: .12rem 0;
    }
    .ship_con{
        .send{
            background-color: #0097FF;
            color: white;
            border-radius: .03rem;
            padding: .01rem;
        }
    }
}
</style>
