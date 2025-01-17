import { getCookie } from 'react-use-cookie'

export function isAuth() {
  const accessToken = localStorage.getItem('access-token')
  const profileId = getCookie('profileId')
  return !!accessToken && !!profileId
}
