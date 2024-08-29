import React, { FC, memo } from 'react'
import { Text } from '@mantine/core'

interface Props {
  email: string
}

const RegistrationSuccess: FC<Props> = memo(({ email }) => (
  <div>
    <Text>Аккаунт был успешно зарегистрирован!</Text>
    <Text>
      На почту{' '}
      <Text component="span" fw={700}>
        {email}
      </Text>{' '}
      должно прийти письмо с инструкцией по активации аккаунта.
    </Text>
  </div>
))

export default RegistrationSuccess
