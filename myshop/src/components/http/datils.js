import http from './index.js'
export function datils(test){
    return http({
        url:`/shops_details?id=${test}`,
        method:'GET',
    })

}