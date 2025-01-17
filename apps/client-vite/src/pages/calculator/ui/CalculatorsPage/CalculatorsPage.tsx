import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { AuthAlert, isAuth } from '@entities/user'
import { navigation } from '@shared/assets/icons'
import MenuButtonBig from '@shared/ui/MenuButtonBig'
import PageTitle from '@shared/ui/PageTitle'


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
        <MenuButtonBig
          icon={<navigation.CastleIcon />}
          text={<FormattedMessage defaultMessage="Замок" />}
          href="/calculators/castle"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.BarracksIcon />}
          text={<FormattedMessage defaultMessage="Казарма" />}
          href="/calculators/barracks"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.DragonIcon />}
          text={<FormattedMessage defaultMessage="Дракон" />}
          href="/calculators/dragon"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.WitchIcon />}
          text={<FormattedMessage defaultMessage="Ведьма" />}
          href="/calculators/witch"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.BlacksmithIcon />}
          text={<FormattedMessage defaultMessage="Кузнец" />}
          href="/calculators/blacksmith"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.GalleryIcon />}
          text={<FormattedMessage defaultMessage="Галерея" />}
          href="/calculators/gallery"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.HeroesCalculatorIcon />}
          text={<FormattedMessage defaultMessage="Герои" />}
          href="/calculators/heroes"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.UltimatePowerIcon />}
          text={<FormattedMessage defaultMessage="Экстремальная мощь" />}
          href="/calculators/ultimatePower"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.MightiestKingdomIcon />}
          text={<FormattedMessage defaultMessage="Сильнейшее королевство" />}
          href="/calculators/mightiestKingdom"
          disabled={!isHaveAuth}
        />
        <MenuButtonBig
          icon={<navigation.EvilSpiritsIcon />}
          text={<FormattedMessage defaultMessage="Злые духи" />}
          href="/calculators/spiritInvasion"
        />
      </SimpleGrid>
    </Stack>
  )
})

export default CalculatorsPage
