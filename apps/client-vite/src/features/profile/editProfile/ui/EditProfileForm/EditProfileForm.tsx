import { FC, memo, useCallback } from 'react'
import { Button, Flex, NumberInput, Text, TextInput } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import type { Profile } from 'kg-calculator-typings'
import { FormattedMessage, useIntl } from 'react-intl'
import useEditProfile from '../../model/useEditProfile'


interface Props {
  className?: string
  profile: Profile

  onEditProfileSuccess: () => void
}

const EditProfileForm: FC<Props> = memo(({ className, profile, onEditProfileSuccess }) => {
  const intl = useIntl()
  const form = useForm<{ name: string; serverId?: number }>({
    mode: 'controlled',
    initialValues: {
      name: profile.name,
      serverId: profile.serverId,
    },
    validate: {
      name: hasLength(
        {
          min: 2,
          max: 20,
        },
        intl.formatMessage({ defaultMessage: 'Название профиля должно быть от 2 до 20 символов' }),
      ),
    },
  })

  const { mutate: editProfile, error } = useEditProfile()

  const handleFormSubmit = useCallback(
    (values: typeof form.values) => {
      editProfile(
        {
          profileId: profile.id,
          name: values.name,
          serverId: values.serverId,
        },
        {
          onSuccess() {
            onEditProfileSuccess()
          },
        },
      )
    },
    [editProfile, form, onEditProfileSuccess, profile.id],
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
          <FormattedMessage defaultMessage="Обновить профиль" />
        </Button>
      </Flex>
    </form>
  )
})

export default EditProfileForm
