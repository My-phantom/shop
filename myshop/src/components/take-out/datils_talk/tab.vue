<template>
    <div class="talk_con">
        <ul>
            <li>
                <router-link to="/datils/1/talk/1">
                    全部{{talcon.ratings.length}}
                </router-link>
              </li>
            <li>
                <router-link to="/datils/1/talk/2">
                    满意 {{talsu.length}}
                </router-link>
              </li>
            <li>
                <router-link to="/datils/1/talk/3">
                    不满意{{talcon.ratings.length-talsu.length}}
                </router-link>
              </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['talcon'],
    data() {
        return {

        };
    },
    methods: {

    },
    computed:{
        talsu(){
            return this.talcon.ratings.filter(item =>{
               return item.rateType == 0
            })
        },
    
       
    },
    mounted(){
        this.$router.push('/datils/1/talk/1')
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.talk_con{
    margin-top: .16rem;
    background-color: #fff;
    ul{
        display: flex;
        box-sizing: border-box;
        padding: .12rem 0;
        li{
            width: .65rem;
            height: .32rem;
                margin: 0 .12rem;
            a{
                display: flex;
                height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                background-color: #dbdddf;
                  &.router-link-active{
                      background-color: #02a774;
                      color: white;
                    }
            }
        }
    }
  
}
</style>
