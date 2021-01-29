<template>
    <div class="mercart"> 
        <Ship ship_tl="配送信息" :ship="merlist"></Ship>
        <div class="active">
            <Active tl="活动与服务" :actives ="merlist"></Active>
        </div>
        <Photo pho_tl="商家实景" :pho_l ="merlist"></Photo>
        <Ower owner_tl ="商家信息" :owner_l="merlist"></Ower>
    </div>
</template>

<script>
import Active from '../../take-out/datils/active'
import Ship from '../../take-out/datils/Shipping'
import Photo from '../../take-out/datils/photo'
import Ower from '../../take-out/datils/owner'
export default {
    props: 
        ['merlist']
    ,
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        Active,
        Ship,
        Photo,
        Ower
    },
};
</script>

<style lang="less">
.mercart{
    background-color: #F3F5F7;
    height: 100%;
    overflow: auto;
    .active{
        background-color: #fff;
        margin-top: .2rem;
        .sale{
            h2{
                text-align: left;
            }
        }
    }
}
</style>
