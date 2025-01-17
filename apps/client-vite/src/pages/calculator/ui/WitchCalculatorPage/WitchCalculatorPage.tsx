import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { WitchCalculator } from '@widgets/witchCalculator'
import { FC, memo } from 'react'


const WitchCalculatorPage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <WitchCalculator />
    </Stack>
  )
})

export default WitchCalculatorPage
