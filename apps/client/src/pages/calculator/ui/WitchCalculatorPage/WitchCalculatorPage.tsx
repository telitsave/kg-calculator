import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { WitchCalculator } from 'widgets/witchCalculator'


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
