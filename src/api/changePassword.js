import http from '@/utils/http'

export const changePassword = (params) => {
  return http.patch('web/user-change-password', params)
}
