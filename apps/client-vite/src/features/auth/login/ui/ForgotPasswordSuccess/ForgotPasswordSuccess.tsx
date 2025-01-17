import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import { FormattedMessage } from 'react-intl'


interface Props {
  email: string
}

const ForgotPasswordSuccess: FC<Props> = memo(({ email }) => (
  <div>
    <Text>
      <FormattedMessage
        defaultMessage="На почту {email} было отправлено письмо с инструкцией по восстановлению пароля."
        values={{
          email: (
            <Text component="span" fw={700}>
              {email}
            </Text>
          ),
        }}
      />
    </Text>
  </div>
))

export default ForgotPasswordSuccess
