import { FC, memo, useCallback } from 'react'
import { Button, Flex, PasswordInput, Text, TextInput } from '@mantine/core'
import { isEmail, useForm } from '@mantine/form'
import { FormattedMessage, useIntl } from 'react-intl'
import useLogin from '../../model/useLogin'


interface Props {
  className?: string

  onSuccessLogin: () => void
  onClickRegisterLink: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onClickForgotPasswordLink: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const LoginForm: FC<Props> = memo(({ className, onSuccessLogin, onClickRegisterLink, onClickForgotPasswordLink }) => {
  const intl = useIntl()
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail(intl.formatMessage({ defaultMessage: 'Некорректный email' })),
    },
  })
  const { mutate: login, error } = useLogin()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      login(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess() {
            onSuccessLogin()
          },
        },
      )
    },
    [form, login, onSuccessLogin],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput {...form.getInputProps('email')} label="Email" required autoComplete="email" />
      <PasswordInput
        {...form.getInputProps('password')}
        label={<FormattedMessage defaultMessage="Пароль" />}
        required
        mt="md"
        autoComplete="current-password"
      />

      {error && (
        <Text c="red" size="sm">
          {error?.response?.data.message}
        </Text>
      )}
      <Text c="dimmed" size="sm" component="a" href="#" onClick={onClickForgotPasswordLink}>
        <FormattedMessage defaultMessage="Забыли пароль?" />
      </Text>

      <Flex justify="space-between" mt="md" align="center">
        <Text c="dimmed" size="sm" component="a" href="#" onClick={onClickRegisterLink}>
          <FormattedMessage defaultMessage="Нет аккаунта? Зарегистрироваться" />
        </Text>
        <Button type="submit">
          <FormattedMessage defaultMessage="Войти" />
        </Button>
      </Flex>
    </form>
  )
})

export default LoginForm
