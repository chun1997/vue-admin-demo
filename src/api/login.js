import {request} from './request'

export function getLogin(data) {
    return request({
        url: '',
        method: 'post',
        data: data
    })
}