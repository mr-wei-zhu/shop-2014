import { request } from './request'


export function gethomeData() {
    return request({
        url: '/home/multidata'
    })
}