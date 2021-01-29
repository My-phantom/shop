import http from './index.js'
export function search(test){
    return http({
        url:`/search_shops?keyword=${test}&geohash=40.10038,116.36867`,
        method:'GET',
    })

}