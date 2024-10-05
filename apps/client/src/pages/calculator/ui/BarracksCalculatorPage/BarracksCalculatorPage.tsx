import { FC, memo } from 'react'
import cx from 'classnames'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { BarracksCalculator } from 'widgets/barracksCalculator'
import css from './styles.module.sass'


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
