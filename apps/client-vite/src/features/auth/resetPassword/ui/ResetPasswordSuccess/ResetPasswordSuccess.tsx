import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import { FormattedMessage } from 'react-intl'


const ResetPasswordSuccess: FC = memo(() => (
  <div>
    <Text>
      <FormattedMessage defaultMessage="Пароль был успешно сброшен." />
    </Text>
    <Text>
      <FormattedMessage defaultMessage="Используйте вашу почту и новый пароль для входа." />
    </Text>
  </div>
))

export default ResetPasswordSuccess
