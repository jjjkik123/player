import http from './http'

export function getDyanamicList(params) {
    return http.get('https://www.fastmock.site/mock/7c21f4a99f194ea80f263e8cb34aaf68/find/friends', params)
}

export function getFoucsList(params) {
    return http.get('https://www.fastmock.site/mock/7c21f4a99f194ea80f263e8cb34aaf68/find/attention', params)
}

// 首页
function getIndexBarList(params) {
  return http.get('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/getIndexBarList',params)
}

function getDoubleList(params) {
  return http.get('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/getDoubleList',params)
}
function getBulkList(params) {
  return http.get('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/getBulkList',params)
}
function getRecommendList(params) {
  return http.get('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/getRecommendList',params)
}
function getBackYardList(params) {
  return http.get('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/getBackYardList',params)
}
function login(params) {
  return http.post('https://www.fastmock.site/mock/b62f63067ddde24e364a67b508f68eb3/player/api/login',params)
}


export {getIndexBarList,getDoubleList,getBulkList,getRecommendList,getBackYardList,login}