import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { DragonCalculator } from '@widgets/dragonCalculator'
import { FC, memo } from 'react'


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
