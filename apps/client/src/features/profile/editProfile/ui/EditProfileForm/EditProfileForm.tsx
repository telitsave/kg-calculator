import { FC, memo, useCallback } from 'react'
import { Button, Flex, NumberInput, Text, TextInput } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import type { Profile } from 'kg-calculator-typings'
import useEditProfile from '../../model/useEditProfile'


interface Props {
  className?: string
  profile: Profile

  onEditProfileSuccess: () => void
}

const EditProfileForm: FC<Props> = memo(({ className, profile, onEditProfileSuccess }) => {
  const form = useForm<{ name: string; serverId?: number }>({
    mode: 'controlled',
    initialValues: {
      name: profile.name,
      serverId: profile.serverId,
    },
    validate: {
      name: hasLength({ min: 2, max: 20 }, 'Название профиля должно быть от 2 до 20 символов'),
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
    [editProfile, profile.id],
  )

  return (
    <form className={className} onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        {...form.getInputProps('name')}
        label="Название профиля"
        description="Для удобство можно, но не обязательно, использовать ник персонажа в игре"
        required
        autoComplete="off"
      />
      <NumberInput
        {...form.getInputProps('serverId')}
        label="Номер королевства (сервера)"
        description="Номер королевства, на котором вы играете. Например: 1150, 1570, 2020"
        mt="md"
        autoComplete="off"
      />

      {error && (
        <Text c="red" size="sm">
          {error?.response?.data.message}
        </Text>
      )}

      <Flex justify="flex-end" mt="md" align="center">
        <Button type="submit">Обновить профиль</Button>
      </Flex>
    </form>
  )
})

export default EditProfileForm
