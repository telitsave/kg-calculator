import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { HeroesGrid } from '@widgets/heroesGrid'
import { FC, memo } from 'react'


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
