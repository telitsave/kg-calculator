import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { CastleCalculator } from 'widgets/castleCalculator'


const CastleCalculatorPage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <CastleCalculator />
    </Stack>
  )
})

export default CastleCalculatorPage
