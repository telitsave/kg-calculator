import { FC, memo, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { NumberInput } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'
import { ParameterTypes } from '../../model/types'
import ParameterIcon from '../ParameterIcon'
import css from './styles.module.sass'

interface Props {
  className?: string
  parameterType: ParameterTypes
  viewMode?: 'default' | 'bigIcon'
}

const ParameterInput: FC<Props> = memo(({ className, parameterType, viewMode = 'default' }) => {
  const [value, setValue] = useParameter(parameterType)

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10))
    },
    [setValue],
  )

  const max = useMemo(() => {
    if (parameterType === 'lightPower' || parameterType === 'darkPower') {
      return 2000
    }

    return undefined
  }, [parameterType])

  if (viewMode === 'bigIcon') {
    return (
      <Flexbox className={cx(css.root, css.bigIcon, className)} flexDirection="column" alignItems="center" gap={4}>
        <ParameterIcon className={css.icon} parameterType={parameterType} />
        <NumberInput
          maw={140}
          miw={80}
          min={0}
          max={max}
          value={value}
          onChange={handleNumberInputChange}
          thousandSeparator=" "
        />
      </Flexbox>
    )
  }

  return (
    <NumberInput
      className={cx(css.root, className)}
      min={0}
      max={max}
      leftSection={<ParameterIcon parameterType={parameterType} />}
      value={value}
      onChange={handleNumberInputChange}
      thousandSeparator=" "
    />
  )
})

export default ParameterInput
