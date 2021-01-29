<template>
  <div class="sale">
        <h2>{{tl}}</h2>
        <ul class="sale_list">
            <li v-for="(item,index) in actives.supports " :key="index">
                <span class="sell">{{item.name}}</span>
                <span class="sell_con">{{item.content}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['actives',"tl"],
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

<style lang="less">

    .sale{
        box-sizing:  border-box;
        padding: 0 .2rem;
        text-align: left;
        height: 100%;
        overflow: hidden;
        h2{
            font-size: .16rem;
            text-align: center;
            margin-top:.2rem;
        }
        .sale_list{
            overflow: auto;
            height: 70%;
            box-sizing: border-box;
            padding: .15rem 0;
            li{
                padding: .08rem 0;
                &:first-child{
                    .sell{
                        background-color: #88C465;
                    }
                }
                &:nth-child(2){
                        .sell{
                        background-color: #EF7374;
                    }
                }
                .sell{
                    background-color: #F2874E;
                    color:white;
                    box-sizing: border-box;
                    padding: .02rem;
                    transform: scale(.10);
                
                }
                .sell_con{
                    margin-left: .1rem;
                    font-size: .12rem;
                    transform: scale(.8);
                }   
            }
        }
    }

</style>
