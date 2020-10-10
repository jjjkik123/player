import http from './http'

export function getDyanamicList(params) {
    return http.get('https://www.fastmock.site/mock/7c21f4a99f194ea80f263e8cb34aaf68/find/friends', params)
}

export function getFoucsList(params) {
    return http.get('https://www.fastmock.site/mock/7c21f4a99f194ea80f263e8cb34aaf68/find/attention', params)
}