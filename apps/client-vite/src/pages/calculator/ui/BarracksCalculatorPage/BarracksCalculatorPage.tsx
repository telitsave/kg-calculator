import css from './styles.module.sass'
import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { BarracksCalculator } from '@widgets/barracksCalculator'
import cx from 'classnames'
import { FC, memo } from 'react'


interface Props {
  className?: string
}

const BarracksCalculatorPage: FC<Props> = memo(({ className }) => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <BarracksCalculator className={cx(css.root, className)} />
    </Stack>
  )
})

export default BarracksCalculatorPage
