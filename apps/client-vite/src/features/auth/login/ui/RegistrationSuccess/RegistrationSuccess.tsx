import { FC, memo } from 'react'
import { Anchor, Text } from '@mantine/core'
import { FormattedMessage } from 'react-intl'


interface Props {
  email: string
}

const RegistrationSuccess: FC<Props> = memo(({ email }) => (
  <div>
    <Text>
      <FormattedMessage defaultMessage="Аккаунт был успешно зарегистрирован!" />
    </Text>
    <Text>
      <FormattedMessage
        defaultMessage="На почту {email} должно прийти письмо с инструкцией по активации аккаунта."
        values={{
          email: (
            <Text component="span" fw={700}>
              {email}
            </Text>
          ),
        }}
      />
    </Text>
    <Text>
      <FormattedMessage defaultMessage="Если не увидели письмо в своем почтовом ящике, проверьте, пожалуйста, папку Спам. Иногда письмо попадает туда." />
    </Text>
    <Text>
      <FormattedMessage
        defaultMessage="Если письмо с активацией не пришло, убедитесь, что правильно указали почтовый ящик. В иных случаях, свяжитесь со
      мной напрямую: {email}"
        values={{
          email: (
            <Anchor href="https://t.me/DonLi_V" target="_blank" rel="noreferrer">
              @DonLi_V
            </Anchor>
          ),
        }}
      />
    </Text>
  </div>
))

export default RegistrationSuccess
