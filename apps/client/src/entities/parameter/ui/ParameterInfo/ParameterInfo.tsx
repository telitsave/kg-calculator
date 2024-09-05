import { FC, memo } from 'react'
import cx from 'classnames'
import { Text } from '@mantine/core'
import type { ParameterTypes } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import ParameterIcon from '../ParameterIcon'
import css from './styles.module.sass'


interface Props {
  className?: string
  parameterType: ParameterTypes
  value: number
  oldValue?: number
  viewMode?: 'default' | 'bigIcon'
}

const ParameterInfo: FC<Props> = memo(({ className, parameterType, value, oldValue, viewMode = 'default' }) => {
  if (viewMode === 'bigIcon') {
    return (
      <Flexbox className={cx(css.root, css.bigIcon, className)} flexDirection="column" alignItems="center" gap={4}>
        <ParameterIcon className={css.icon} parameterType={parameterType} />
        {oldValue && oldValue !== value ? (
          <Flexbox gap={4}>
            <Text>{oldValue}</Text>
            <Text>&#8594;</Text>
            <Text c="green" fw={700}>
              {value}
            </Text>
          </Flexbox>
        ) : (
          <Text>{value}</Text>
        )}
      </Flexbox>
    )
  }

  return (
    <Flexbox className={cx(css.root, css.bigIcon, className)} alignItems="center" gap={8}>
      <ParameterIcon parameterType={parameterType} />
      {oldValue && oldValue !== value ? (
        <Flexbox gap={4}>
          <Text>{oldValue}</Text>
          <Text>&#8594;</Text>
          <Text c="green" fw={700}>
            {value}
          </Text>
        </Flexbox>
      ) : (
        <Text>{value}</Text>
      )}
    </Flexbox>
  )
})

export default ParameterInfo
