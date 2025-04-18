import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { AuthAlert, isAuth } from '@entities/user'
import { navigation } from '@shared/assets/icons'
import MenuButtonBig from '@shared/ui/MenuButtonBig'
import PageTitle from '@shared/ui/PageTitle'


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
        <MenuButtonBig
          icon={<navigation.InventoryIcon />}
          text={<FormattedMessage defaultMessage="Ресурсы" />}
          href="/myData/inventory"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.ParametersIcon />}
          text={<FormattedMessage defaultMessage="Параметры" />}
          href="/myData/parameters"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.HeroesIcon />}
          text={<FormattedMessage defaultMessage="Герои" />}
          href="/myData/heroesData"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.DistributionCardsIcon />}
          text={<FormattedMessage defaultMessage="Карты самовыбора" />}
          href="/myData/heroesDistribution"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.HeroesTableIcon />}
          text={<FormattedMessage defaultMessage="Таблица героев" />}
          href="/myData/heroesTable"
          disabled={!isHaveAuth}
        />
      </SimpleGrid>
    </Stack>
  )
})

export default MyDataPage
