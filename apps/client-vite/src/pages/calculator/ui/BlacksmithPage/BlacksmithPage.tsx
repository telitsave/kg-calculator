import css from './styles.module.sass'
import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { BlacksmithCalculator } from '@widgets/blacksmithCalculator'
import cx from 'classnames'
import { FC, memo } from 'react'


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
