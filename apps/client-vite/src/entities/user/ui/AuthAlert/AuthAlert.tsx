import { FC, memo } from 'react'
import { Alert } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { isAuth } from '../../helpers/isAuth'


const AuthAlert: FC = memo(() => {
  if (isAuth()) return null

  return (
    <Alert>
      <FormattedMessage
        defaultMessage={`
          Некоторые функции могут быть недоступны для неавторизованного пользователя. Чтобы получить полный доступ,
          необходимо зарегистрироваться`}
      />
    </Alert>
  )
})

export default AuthAlert
