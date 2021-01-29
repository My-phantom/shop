import axios from 'axios'

export default function(config){

    const instance = axios.create({
        // baseURL:'http://192.168.31.110:3000',
        baseURL:'http://localhost:3000',
 
    })

    return instance(config)

}