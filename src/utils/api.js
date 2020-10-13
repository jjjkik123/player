import http from './http'
const baseUrl = 'http://47.111.170.43:3000'

export function getDyanamicList(params) {
    return http.get(baseUrl+'/getFind', params)
}
export function getPageList(params) {
    return http.get(baseUrl+'/getPageList', params)
}

export function getFoucsList(params) {
    return http.get(baseUrl+'/getFind', params)
}

export function comment(params) {
  return http.get(baseUrl+'/comment',params)
}
export function getComment(params) {
  return http.get(baseUrl+'/getComment',params)
}




function getDoubleList(params) {
  return http.get(baseUrl+'/getIndex',params)
}
function getBulkList(params) {
  return http.get(baseUrl+'/getIndex',params)
}
function getRecommendList(params) {
  return http.get(baseUrl+'/getIndex',params)
}
function getBackYardList(params) {
  return http.get(baseUrl+'/getIndex',params)
}
function login(params) {
  return http.post(baseUrl+'/getLogin',params)
}
function getIndexBarList(params) {
  return http.get(baseUrl+'/getIndex',params)
}


export {getIndexBarList,getDoubleList,getBulkList,getRecommendList,getBackYardList,login}