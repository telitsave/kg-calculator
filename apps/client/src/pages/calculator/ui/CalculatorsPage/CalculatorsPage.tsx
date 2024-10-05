import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { AuthAlert, isAuth } from 'entities/user'
import { InventoryIcon, MightiestKingdomIcon, UltimatePowerIcon } from 'shared/assets/icons'
import MenuButtonBig from 'shared/ui/MenuButtonBig'
import PageTitle from 'shared/ui/PageTitle'


const CalculatorsPage: FC = memo(() => {
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
        <MenuButtonBig icon={<InventoryIcon />} text="Замок" href="/calculators/castle" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Казарма" href="/calculators/barracks" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Дракон" href="/calculators/dragon" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Ведьма" href="/calculators/witch" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Кузнец" href="/calculators/blacksmith" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Галерея" href="/calculators/gallery" disabled={!isHaveAuth} />
        <MenuButtonBig icon={<InventoryIcon />} text="Герои" href="/calculators/heroes" disabled={!isHaveAuth} />
        <MenuButtonBig
          icon={<UltimatePowerIcon />}
          text="Экстремальная мощь"
          href="/calculators/ultimatePower"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<MightiestKingdomIcon />}
          text="Сильнейшее королевство"
          href="/calculators/mightiestKingdom"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig icon={<InventoryIcon />} text="Злые духи" href="/calculators/spiritInvasion" />
      </SimpleGrid>
    </Stack>
  )
})

export default CalculatorsPage
