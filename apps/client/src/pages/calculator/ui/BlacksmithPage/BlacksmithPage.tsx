import { FC, memo } from 'react'
import cx from 'classnames'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { BlacksmithCalculator } from 'widgets/blacksmithCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const BlacksmithPage: FC<Props> = memo(({ className }) => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <BlacksmithCalculator className={cx(css.root, className)} />
    </Stack>
  )
})

export default BlacksmithPage
