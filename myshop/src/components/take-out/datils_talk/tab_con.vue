<template>
    <div>
         <Evaluate :evaluate="all" v-if="list.length != 0"></Evaluate>
    </div>
</template>

<script>
import {datils} from '../../http/datils'
import Evaluate from '../datils_talk/talk_msg'
export default {
    props: {

    },
    data() {
        return {
            list:[]
        };
    },
    methods: {

    },
    computed:{
        all(){
             if(this.$route.params.id == 2){
                 return this.list.filter(item =>{
                    return item.rateType == 0
                 })
             }else if(this.$route.params.id == 3){
                  return this.list.filter(item =>{
                    return item.rateType == 1
                })
             }else{
                 return this.list
             }
        },


        // all(){
        //     if( this.list.ratings){
        //         return this.list.ratings.filter(item =>{
        //            return item.rateType == 0
        //         })
        //     }
        // },
    
    },
    components: {
        Evaluate
    },
    mounted(){
        datils(1).then(
            res =>{
                  this.list = res.data.data.ratings
                console.log(this.list)
            }
        )
    }
};
</script>

<style scoped lang="less">

</style>
