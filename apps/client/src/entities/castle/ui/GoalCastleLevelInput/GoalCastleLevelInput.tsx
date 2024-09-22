import { FC, ReactNode, memo, useCallback } from 'react'
import cx from 'classnames'
import { NumberInput } from '@mantine/core'
import css from './styles.module.sass'


interface Props {
  className?: string
  value: number | string | undefined
  disabled?: boolean
  icon: ReactNode

  onChange: (value: number | string) => void
}

const GoalCastleLevelInput: FC<Props> = memo(({ className, value: propValue, disabled = false, onChange, icon }) => {
  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      onChange(value)
    },
    [onChange],
  )

  return (
    <NumberInput
      className={cx(css.root, className)}
      min={0}
      max={9999}
      leftSection={icon}
      defaultValue={0}
      value={propValue}
      onChange={handleNumberInputChange}
      thousandSeparator=" "
      disabled={disabled}
      label="Желаемый уровень замка"
      clampBehavior="strict"
    />
  )
})

export default GoalCastleLevelInput
