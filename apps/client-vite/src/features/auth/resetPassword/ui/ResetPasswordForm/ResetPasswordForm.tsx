import { FC, memo, useCallback } from 'react'
import { Button, Flex, PasswordInput } from '@mantine/core'
import { hasLength, matchesField, useForm } from '@mantine/form'
import { FormattedMessage, useIntl } from 'react-intl'
import NotificationsHelper from '@shared/helpers/notificationsHelper'
import useResetPassword from '../../model/useResetPassword'


interface Props {
  className?: string
  resetPasswordToken: string

  onSuccess: () => void
}

const ResetPasswordForm: FC<Props> = memo(({ className, resetPasswordToken, onSuccess }) => {
  const intl = useIntl()
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: hasLength(
        { min: 8 },
        intl.formatMessage({ defaultMessage: 'Длина пароля должна быть 8 символов или больше' }),
      ),
      confirmPassword: matchesField('password', intl.formatMessage({ defaultMessage: 'Пароли должны совпадать' })),
    },
  })
  const {
    resetPasswordMutation: { mutate: resetPassword },
  } = useResetPassword()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      resetPassword(
        {
          resetPasswordToken,
          password: values.password,
        },
        {
          onSuccess() {
            onSuccess()
          },
          onError(err) {
            if (err?.response?.data && err?.response?.data.message) {
              NotificationsHelper.showErrorNotification(
                err?.response?.data.message,
                intl.formatMessage({ defaultMessage: 'Произошла ошибка' }),
              )
            }
          },
        },
      )
    },
    [form, intl, onSuccess, resetPassword, resetPasswordToken],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <PasswordInput
        {...form.getInputProps('password')}
        label={<FormattedMessage defaultMessage="Укажите новый пароль" />}
        required
        mt="md"
        autoComplete="new-password"
      />
      <PasswordInput
        {...form.getInputProps('confirmPassword')}
        label={<FormattedMessage defaultMessage="Повторите новый пароль" />}
        required
        mt="md"
        autoComplete="new-password"
      />

      <Flex justify="flex-end" mt="md" align="center">
        <Button type="submit">
          <FormattedMessage defaultMessage="Установить новый пароль" />
        </Button>
      </Flex>
    </form>
  )
})

export default ResetPasswordForm
