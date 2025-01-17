import { FC, memo, useCallback } from 'react'
import { Button, Flex, NumberInput, Text, TextInput } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import { FormattedMessage, useIntl } from 'react-intl'
import useAddProfile from '../../model/useAddProfile'


interface Props {
  className?: string
  onAddProfileSuccess: () => void
}

const AddProfileForm: FC<Props> = memo(({ className, onAddProfileSuccess }) => {
  const intl = useIntl()
  const form = useForm<{ name: string; serverId?: number }>({
    mode: 'controlled',
    initialValues: {
      name: '',
    },
    validate: {
      name: hasLength(
        { min: 2 },
        intl.formatMessage({ defaultMessage: 'Название профиля должно быть не меньше 2х символов' }),
      ),
    },
  })
  const { mutate: addProfile, error } = useAddProfile()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      addProfile(
        {
          name: values.name,
          serverId: values.serverId,
        },
        {
          onSuccess() {
            onAddProfileSuccess()
          },
        },
      )
    },
    [addProfile, form, onAddProfileSuccess],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        {...form.getInputProps('name')}
        label={<FormattedMessage defaultMessage="Название профиля" />}
        description={
          <FormattedMessage defaultMessage="Для удобство можно, но не обязательно, использовать ник персонажа в игре" />
        }
        required
        autoComplete="off"
      />
      <NumberInput
        {...form.getInputProps('serverId')}
        label={<FormattedMessage defaultMessage="Номер королевства (сервера)" />}
        description={
          <FormattedMessage defaultMessage="Номер королевства, на котором вы играете. Например: 1150, 1570, 2020" />
        }
        mt="md"
        autoComplete="off"
        min={1}
        max={99999}
        clampBehavior="strict"
      />

      {error && (
        <Text c="red" size="sm">
          {error?.response?.data.message}
        </Text>
      )}

      <Flex justify="flex-end" mt="md" align="center">
        <Button type="submit">
          <FormattedMessage defaultMessage="Создать профиль" />
        </Button>
      </Flex>
    </form>
  )
})

export default AddProfileForm
