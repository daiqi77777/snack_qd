import http from '@/utils/http'

export const getAdminUserList = (params) => {
  return http.get('http://localhost/snack_forum/public/web/admin-user', {
    params
  })
}

export const getUserRoles = (id, guardName) => {
  return http.get(`http://localhost/snack_forum/public/web/admin-user/${id}/roles/${guardName}`)
}

export const assginRoles = (id, guardName, roles) => {
  return http.put(`http://localhost/snack_forum/public/web/admin-user/${id}/roles/${guardName}`, {
    roles
  })
}

export const addAdminUser = (data) => {
   return http.post('http://localhost/snack_forum/public/web/admin-user', data)
  //return http.post('http://localhost/snack_forum/public/web/post/audit', data)
}

export const editAdminUser = (id, data) => {
  return http.patch(`http://localhost/snack_forum/public/web/admin-user/${id}`, data)
}

export const deleteAdminUser = id => {
  return http.delete(`http://localhost/snack_forum/public/web/admin-user/${id}`)
}