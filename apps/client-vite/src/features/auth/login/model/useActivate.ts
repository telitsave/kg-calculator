import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ActivationPayload, ApiDefaultError } from 'kg-calculator-typings'
import { useIntl } from 'react-intl'
import api from '@shared/api'
import NotificationsHelper from '@shared/helpers/notificationsHelper'


const useActivate = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const registrationToken = searchParams.get('registrationToken')
  const intl = useIntl()

  // eslint-disable-next-line
  const { mutate: activate } = useMutation<any, AxiosError<ApiDefaultError>, ActivationPayload>({
    mutationKey: ['activate'],
    mutationFn: api.auth.activate,
  })

  useEffect(() => {
    if (registrationToken) {
      activate(
        {
          registrationToken,
        },
        {
          onSuccess() {
            NotificationsHelper.showSuccessNotification(
              intl.formatMessage({
                defaultMessage:
                  'Пользователь был успешно активирован. Теперь вы можете войти на сайт, используя логин и пароль',
              }),
              intl.formatMessage({ defaultMessage: 'Активация пользователя' }),
            )
          },
          onError(err) {
            NotificationsHelper.showErrorNotification(
              err?.response?.data.message || '',
              intl.formatMessage({ defaultMessage: 'Активация пользователя' }),
            )
          },
          onSettled() {
            setSearchParams((val) => {
              val.delete('registrationToken')
              return val
            })
          },
        },
      )
    }
  }, [activate, intl, registrationToken, setSearchParams])
}

export default useActivate
