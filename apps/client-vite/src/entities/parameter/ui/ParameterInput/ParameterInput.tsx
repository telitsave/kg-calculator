import useParameter from '../../model/hooks/useParameter'
import ParameterIcon from '../ParameterIcon'
import css from './styles.module.sass'
import { NumberInput } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import type { ParameterTypes } from 'kg-calculator-typings'
import { FC, memo, useCallback, useMemo } from 'react'

interface Props {
  className?: string
  parameterType: ParameterTypes
  viewMode?: 'default' | 'bigIcon'
}

const ParameterInput: FC<Props> = memo(({ className, parameterType, viewMode = 'default' }) => {
  const [value = 0, setValue] = useParameter(parameterType)

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10))
    },
    [setValue],
  )

  const max = useMemo(() => {
    if (parameterType === 'witchParams_lightLevel' || parameterType === 'witchParams_darkLevel') {
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
          clampBehavior="strict"
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
      clampBehavior="strict"
    />
  )
})

export default ParameterInput
