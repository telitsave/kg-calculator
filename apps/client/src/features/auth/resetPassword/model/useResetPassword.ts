import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, ResetPasswordPayload } from 'kg-calculator-typings'
import api from 'shared/api'


const useResetPassword = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [resetPasswordToken] = useState(searchParams.get('resetPasswordToken'))
  const [openedModal, { close }] = useDisclosure(!!resetPasswordToken)

  const resetPasswordMutation = useMutation<any, AxiosError<ApiDefaultError>, ResetPasswordPayload>({
    mutationKey: ['resetPassword'],
    mutationFn: api.auth.resetPassword,
  })

  useEffect(() => {
    setSearchParams((val) => {
      val.delete('resetPasswordToken')
      return val
    })
  }, [setSearchParams])

  return {
    openedModal,
    onCloseModal: close,
    resetPasswordToken,
    resetPasswordMutation,
  }
}

export default useResetPassword
