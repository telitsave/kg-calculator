import { FC, ReactNode, memo, useCallback } from 'react'
import cx from 'classnames'
import { NumberInput } from '@mantine/core'
import css from './styles.module.sass'


interface Props {
  className?: string
  value: number | undefined
  disabled?: boolean
  icon: ReactNode

  onChange: (value: number) => void
}

const GoalCastleLevelInput: FC<Props> = memo(({ className, value: propValue, disabled = false, onChange, icon }) => {
  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      onChange(parseInt(value.toString(), 10))
    },
    [onChange],
  )

  return (
    <NumberInput
      className={cx(css.root, className)}
      min={0}
      leftSection={icon}
      value={propValue || 0}
      onChange={handleNumberInputChange}
      thousandSeparator=" "
      disabled={disabled}
      label="Желаемый уровень замка"
    />
  )
})

export default GoalCastleLevelInput
