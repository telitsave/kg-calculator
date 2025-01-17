import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { CastleCalculator } from '@widgets/castleCalculator'
import { FC, memo } from 'react'


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
