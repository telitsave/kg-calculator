import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { HeroesCalculator } from 'widgets/heroesCalculator'


const HeroesCalculatorPage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <HeroesCalculator />
    </Stack>
  )
})

export default HeroesCalculatorPage
