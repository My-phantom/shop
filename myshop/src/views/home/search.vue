<template>
    <div class="search">
        <Head title="搜索"></Head>
            <van-search
            v-model="value"
            show-action
            placeholder="请输入商家名称"
            >
            <template #action>
                <div @click="onSearch">提交</div>
            </template>
            </van-search>
        <ul class="sear_list">
            <li v-for="(item,index) in list" :key="index">
               <router-link to="/home/search">
                    <div class="imgs">
                     <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
                </div>
                <div class="sea_r">
                    <p class="tl">{{item.name}}</p>
                    <p class="order">月售{{item.recent_order_num}}单</p>
                    <p class="distance">
                        <span class="pri">
                            {{item.float_minimum_order_amount}}元起送/
                        </span>
                        <span class="dis">
                            距离{{item.distance}}
                        </span>
                    </p>
                </div>
               </router-link>
            </li>
        </ul>
    </div>  
</template>

<script>
import Head from '../../components/head/head'
import { Search } from 'vant';
import {search} from '../../components/http/search'
export default {
    props: {

    },
    data() {
        return {
            value:'',
            list:''
        };
    },
    methods: {
        onSearch(){
            search(this.value).then(res =>
            {
                console.log(res)
                this.list = res.data.data
            
            })
        }
    },
    components: {
        Head
    },
};
</script>

<style  lang="less">
.search{
    height: 90%;
    .van-search__action{
        div{
            width: .67rem;
            background-color: #02a774;
            color: white;
        }
    }
    .sear_list{
        height: 80%;
        overflow: auto;
        li{
             box-sizing: border-box;
                padding: .15rem 0;
                border-bottom:1px solid #f8f8f8 ;
            a{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                .imgs{
                    width: .75rem;
                    height: .75rem;
                    box-sizing: border-box;
                    padding-left: .1rem;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .sea_r{
                    margin-left:.1rem ;
                    text-align: left;
                    color: #000;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
