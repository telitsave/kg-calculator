import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { HeroesGrid } from 'widgets/heroesGrid'


const HeroesPage: FC = memo(() => {
  return (
    <Stack maw={600}>
      <NoAuthNavigate to="/myData" />
      <PageTitle />
      <HeroesGrid />
    </Stack>
  )
})

export default HeroesPage
