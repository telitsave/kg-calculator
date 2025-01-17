import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import useCookie from 'react-use-cookie'

const useLogout = () => {
  const [, , deleteProfileCookie] = useCookie('profileId')
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: api.auth.logout,
    onSuccess() {
      localStorage.removeItem('access-token')
      localStorage.removeItem('user-data')
      deleteProfileCookie()
      window.location.reload()
    },
  })
}

export default useLogout
