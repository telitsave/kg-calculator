import { FC, memo } from 'react'
import { SimpleGrid, Stack } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { navigation } from '@shared/assets/icons'
import MenuButtonBig from '@shared/ui/MenuButtonBig'
import PageTitle from '@shared/ui/PageTitle'


const TablesPage: FC = memo(() => (
  <Stack>
    <PageTitle />
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
        icon={<navigation.HeroesTableIcon />}
        text={<FormattedMessage defaultMessage="Герои" />}
        href="/tables/heroesTable"
      />
    </SimpleGrid>
  </Stack>
))

export default TablesPage
