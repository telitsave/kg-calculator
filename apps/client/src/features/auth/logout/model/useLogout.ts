import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useLogout = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: api.auth.logout,
    onSuccess() {
      localStorage.removeItem('access-token')
      localStorage.removeItem('user-data')
      window.location.reload()
    },
  })
}

export default useLogout
