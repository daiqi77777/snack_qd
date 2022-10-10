import http from '@/utils/http'
const basicRoute = 'http://localhost/snack_forum/public/web/post/query'
//const basicRoute = 'http://localhost/snack_forum/public/web/menu'
export const myMenu = () => {
  return http.get('http://localhost/snack_forum/public/web/my-menu')
}

export const getMenuList = (params) => {
  return http.get(basicRoute, {
    params
  })
}

export const addMenu = (data) => {
  return http.post(basicRoute, data)
}

export const editMenu = (id, data) => {
  return http.patch(`${basicRoute}/${id}`, data)
}

export const deleteMenu = id => {
  return http.delete(`${basicRoute}/${id}`)
}