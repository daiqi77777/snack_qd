import http from '@/utils/http'
import config from '@/config'

export const login = (data) => {
  return http.post('http://localhost/snack_forum/public/web/auth/login', {
    guard: config.guard, ...data,
  })
}

export const logout = () => {
  return http.post('http://localhost/snack_forum/public/web/auth/logout')
}