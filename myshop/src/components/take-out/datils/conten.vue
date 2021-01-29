<template>
    <div class="foot_list">
        <h5></h5>
         {{this.$route.params.id}}
    </div>
</template>

<script>
import {datils} from '../../http/datils'
export default {
    props: {

    },
    data() {
        return {
              list:''
        };
    },
    methods: {

    },
    components: {

    },
    mounted(){
           datils(1).then(res =>{
            // console.log(res.data.data)
                this.list = res.data.data
                console.log(this.list)
            })
        }
};
</script>

<style lang="less">

</style>
