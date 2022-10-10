import http from '@/utils/http'

export const getCaptcha = () => {
  return http.get('http://localhost/snack_forum/public/web/captcha')

}