import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { AuthAlert, isAuth } from 'entities/user'
import { InventoryIcon } from 'shared/assets/icons'
import MenuButtonBig from 'shared/ui/MenuButtonBig'
import PageTitle from 'shared/ui/PageTitle'


interface Props {
  className?: string
}

const MyDataPage: FC<Props> = memo(() => {
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
        <MenuButtonBig icon={<InventoryIcon />} text="Ресурсы" href="/myData/inventory" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Параметры" href="/myData/parameters" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Герои" href="/myData/heroesData" disabled={!isHaveAuth} />
        <MenuButtonBig
          icon={<InventoryIcon />}
          text="Карты самовыбора"
          href="/myData/heroesDistribution"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<InventoryIcon />}
          text="Таблица героев"
          href="/myData/heroesTable"
          disabled={!isHaveAuth}
        />
      </SimpleGrid>
    </Stack>
  )
})

export default MyDataPage
