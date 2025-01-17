import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { HeroesTableSimple } from '@widgets/heroesTable'
import { FC, memo } from 'react'


const HeroesTablePage: FC = memo(() => (
  <Stack>
    <PageTitle />
    <HeroesTableSimple />
  </Stack>
))

export default HeroesTablePage
