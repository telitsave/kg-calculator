import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { AuthAlert, isAuth } from 'entities/user'
import { InventoryIcon } from 'shared/assets/icons'
import MenuButtonBig from 'shared/ui/MenuButtonBig'
import PageTitle from 'shared/ui/PageTitle'


const SettingsPage: FC = memo(() => {
  const isHaveAuth = isAuth()
  return (
    <Stack>
      <PageTitle />
      <AuthAlert />
      <SimpleGrid
        p="md"
        h="100%"
        cols={{
          xs: 3,
          base: 2,
        }}
        style={{
          justifyItems: 'center',
        }}
      >
        <MenuButtonBig
          icon={<InventoryIcon />}
          text="Серверные настройки"
          href="/settings/serverSettings"
          disabled={!isHaveAuth}
        />
      </SimpleGrid>
    </Stack>
  )
})

export default SettingsPage
