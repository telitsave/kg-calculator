import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { DragonCalculator } from 'widgets/dragonCalculator'


const DragonCalculatorPage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <DragonCalculator />
    </Stack>
  )
})

export default DragonCalculatorPage
