import http from '@/utils/http'

export const loadPermissions = () => {
  return http.get('http://localhost/snack_forum/public/api/permission-user-all')
}

const basicRoute = 'http://localhost/snack_forum/public/api/permission'

export const getPermissionList = (params) => {
  return http.get(basicRoute, {
    params
  })
}

export const addPermission = (data) => {
  return http.post(basicRoute, data)
}

export const editPermission = (id, data) => {
  return http.patch(`${basicRoute}/${id}`, data)
}

export const deletePermission = id => {
  return http.delete(`${basicRoute}/${id}`)
}