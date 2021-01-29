import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone:'',
    goods:[],
    carfoods:[],
    info:''
  },
  mutations: {
    phone_n(state,v){
      state.phone = v
    },
    increment (state,payload) {
      if(payload){
        state.goods.push(payload)
      }
    },
    // infos(state,info) {
    //     state.info= info
    // },
    add(state,food){
      if(food.sum){
        food.sum++
      }else{
        // 给food添加一个新的属性 ，属性名sum 值是1 ===> 美誉数据绑定
        // food.sum = 1
        Vue.set(food,'sum',1)
        state.carfoods.push(food)
      }
    },
    reduce(state,food){
      food.sum--
      if(food.sum ===0){
        state.carfoods.splice(state.carfoods.indexOf(food),1)
      }
    }
  },
  actions: {
    // async send(context,{info}){
    //   await context.commit('infos',info)
    // },
    updata(context,{isAdd,food}){
      if(isAdd){
        context.commit('add',food)
      }else{
        context.commit('reduce',food)
      }
    }
  },
  getters:{
    //  filter_food(state){
    //    const arr = []
    //     state.goods[0].forEach((item)=>{
    //       item.foods.forEach(ite =>{
    //         if(ite.sum>0){
    //           arr.push(ite)
    //         }
    //       })

    //     })
    //     return  arr;
    // }
    znum(state){
  
      let num = 0
       state.carfoods.forEach((item) =>{
          num+=item.sum
      })
      return num
    },
    zprice(state){

        let price = 0
        state.carfoods.forEach((item) =>{
          price+=item.sum*item.price
      })
      return price
    }
  },
  modules: {
  }
})
