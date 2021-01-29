
import http from './index.js'
export function code(){
    return http({
        url:'/captcha',
        method:'GET',
    })

}
export function ph_code(num){
    return http({
        url:`/sendcode?phone=${num}`,
        method:'GET',
    })

}

export function login(user,pwd,codes){
    return http({
        url:'/login_pwd',
        method:'POST',
        data:{
            name:user,
            pwd:pwd,
            captcha:codes
        }

    })

}
export function phone_login(user,codes){
    return http({
        url:'/login_sms',
        method:'POST',
        data:{
            phone:user,
           code:codes
        }

    })
}