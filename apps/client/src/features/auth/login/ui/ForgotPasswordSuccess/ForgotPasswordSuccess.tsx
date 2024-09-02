import { FC, memo } from 'react'
import { Text } from '@mantine/core'

interface Props {
  email: string
}

const ForgotPasswordSuccess: FC<Props> = memo(({ email }) => (
  <div>
    <Text>
      На почту{' '}
      <Text component="span" fw={700}>
        {email}
      </Text>{' '}
      было отправлено письмо с инструкцией по восстановлению пароля.
    </Text>
  </div>
))

export default ForgotPasswordSuccess
