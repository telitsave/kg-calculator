import { FC, memo } from 'react'
import { Anchor, Text } from '@mantine/core'

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
    <Text>
      Если не увидели письмо в своем почтовом ящике, проверьте, пожалуйста, папку Спам. Иногда письмо попадает туда.
    </Text>
    <Text>
      Если письмо с активацией не пришло, убедитесь, что правильно указали почтовый ящик. В иных случаях, свяжитесь со
      мной напрямую:{' '}
      <Anchor href="https://t.me/DonLi_V" target="_blank" rel="noreferrer">
        @DonLi_V
      </Anchor>
    </Text>
  </div>
))

export default RegistrationSuccess
