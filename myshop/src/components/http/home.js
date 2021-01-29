import http from './index.js'
export function title(){
    return http({
        url:'/position/40.10038,116.36867',
        method:'GET',
    })

}
export function banner(){
    return http({
        url:'/index_category',
        method:'GET',
    })

}
export function list(){
    return http({
        url:'/shops',
        method:'GET',
    })

}

