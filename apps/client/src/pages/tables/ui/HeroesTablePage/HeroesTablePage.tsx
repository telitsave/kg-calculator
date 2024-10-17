import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import PageTitle from 'shared/ui/PageTitle'
import { HeroesTableSimple } from 'widgets/heroesTable'


const HeroesTablePage: FC = memo(() => (
  <Stack>
    <PageTitle />
    <HeroesTableSimple />
  </Stack>
))

export default HeroesTablePage
