import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { HeroesCalculator } from '@widgets/heroesCalculator'
import { FC, memo } from 'react'


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
