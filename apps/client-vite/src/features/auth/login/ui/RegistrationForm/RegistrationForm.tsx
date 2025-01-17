import { FC, memo, useCallback } from 'react'
import { Alert, Button, Flex, PasswordInput, Text, TextInput } from '@mantine/core'
import { hasLength, isEmail, matchesField, useForm } from '@mantine/form'
import { FormattedMessage, useIntl } from 'react-intl'
import NotificationsHelper from '@shared/helpers/notificationsHelper'
import useRegistration from '../../model/useRegistration'


interface Props {
  className?: string
  onSuccess: (email: string) => void
  onClickLoginLink: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const RegistrationForm: FC<Props> = memo(({ className, onSuccess, onClickLoginLink }) => {
  const intl = useIntl()
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: isEmail(intl.formatMessage({ defaultMessage: 'Некорректный email' })),
      password: hasLength(
        { min: 8 },
        intl.formatMessage({ defaultMessage: 'Длина пароля должна быть 8 символов или больше' }),
      ),
      confirmPassword: matchesField('password', intl.formatMessage({ defaultMessage: 'Пароли должны совпадать' })),
    },
  })
  const { mutate: registrate } = useRegistration()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      registrate(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess() {
            onSuccess(values.email)
          },
          onError(err) {
            if (err?.response?.data && err?.response?.data.message) {
              form.setFieldError('email', err?.response?.data.message)
            } else {
              NotificationsHelper.showErrorNotification(
                intl.formatMessage({ defaultMessage: 'Произошла непредвиденная ошибка' }),
                intl.formatMessage({ defaultMessage: 'Ошибка' }),
              )
            }
          },
        },
      )
    },
    [form, intl, onSuccess, registrate],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <Alert color="yellow">
        <Text size="sm">
          <FormattedMessage
            defaultMessage="Есть проблема с отправкой писем на почтовые ящики вне РФ. Особенно часто встречается проблема с почтой {emailDomain}."
            values={{
              emailDomain: (
                <Text component="span" fw={700}>
                  @icloud.com
                </Text>
              ),
            }}
          />
        </Text>
        <Text size="sm">
          <FormattedMessage
            defaultMessage="Рекомендуется использовать российские почтовые сервисы или почтовый сервис {emailDomain}."
            values={{
              emailDomain: (
                <Text component="span" fw={700}>
                  @gmail.com
                </Text>
              ),
            }}
          />
        </Text>
      </Alert>
      <TextInput {...form.getInputProps('email')} label="Email" required autoComplete="email" />
      <PasswordInput
        {...form.getInputProps('password')}
        label={<FormattedMessage defaultMessage="Пароль" />}
        required
        mt="md"
        autoComplete="new-password"
      />
      <PasswordInput
        {...form.getInputProps('confirmPassword')}
        label={<FormattedMessage defaultMessage="Повторите пароль" />}
        required
        mt="md"
        autoComplete="new-password"
      />

      <Flex justify="space-between" mt="md" align="center">
        <Text c="dimmed" size="sm" component="a" href="#" onClick={onClickLoginLink}>
          <FormattedMessage defaultMessage="Есть аккаунт? Войти" />
        </Text>
        <Button type="submit">
          <FormattedMessage defaultMessage="Зарегистрироваться" />
        </Button>
      </Flex>
    </form>
  )
})

export default RegistrationForm
