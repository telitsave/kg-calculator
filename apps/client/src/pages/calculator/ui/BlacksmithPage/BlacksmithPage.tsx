import { FC, memo } from 'react'
import cx from 'classnames'
import { BlacksmithCalculator } from 'widgets/blacksmithCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const BlacksmithPage: FC<Props> = memo(({ className }) => {
  return <BlacksmithCalculator className={cx(css.root, className)} />
})

export default BlacksmithPage
