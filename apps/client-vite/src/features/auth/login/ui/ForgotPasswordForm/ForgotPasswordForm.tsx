import { FC, memo, useCallback } from 'react'
import { Button, Flex, TextInput } from '@mantine/core'
import { isEmail, useForm } from '@mantine/form'
import { FormattedMessage, useIntl } from 'react-intl'
import useForgotPassword from '../../model/useForgotPassword'


interface Props {
  className?: string

  onSuccess: (email: string) => void
  onClickBackButton: () => void
}

const ForgotPasswordForm: FC<Props> = memo(({ className, onSuccess, onClickBackButton }) => {
  const intl = useIntl()
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
    },
    validate: {
      email: isEmail(intl.formatMessage({ defaultMessage: 'Некорректный email' })),
    },
  })
  const { mutate: sendForgotPassword } = useForgotPassword()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      sendForgotPassword(
        {
          email: values.email,
        },
        {
          onSuccess() {
            onSuccess(values.email)
          },
        },
      )
    },
    [form, onSuccess, sendForgotPassword],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput {...form.getInputProps('email')} label="Email" required autoComplete="off" />

      <Flex justify="space-between" mt="md" align="center">
        <Button onClick={onClickBackButton} variant="default">
          <FormattedMessage defaultMessage="Назад" />
        </Button>
        <Button type="submit">
          <FormattedMessage defaultMessage="Сбросить пароль" />
        </Button>
      </Flex>
    </form>
  )
})

export default ForgotPasswordForm
