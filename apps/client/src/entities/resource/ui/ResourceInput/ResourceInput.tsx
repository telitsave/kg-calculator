import { FC, memo, useCallback } from 'react'
import cx from 'classnames'
import { NumberInput } from '@mantine/core'
import type { ResourceType } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import useResource from '../../model/hooks/useResource'
import ResourceIcon from '../ResourceIcon'
import css from './styles.module.sass'


interface Props {
  className?: string
  resourceType: ResourceType
  viewMode?: 'default' | 'bigIcon'
  disabled?: boolean
}

const ResourceInput: FC<Props> = memo(({ className, resourceType, viewMode = 'default', disabled = false }) => {
  const [value = 0, setValue] = useResource(resourceType)

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10) || 0)
    },
    [setValue],
  )

  if (viewMode === 'bigIcon') {
    return (
      <Flexbox className={cx(css.root, css.bigIcon, className)} flexDirection="column" alignItems="center" gap={4}>
        <ResourceIcon className={css.icon} resourceType={resourceType} />
        <NumberInput
          w={140}
          min={0}
          value={value}
          onChange={handleNumberInputChange}
          thousandSeparator=" "
          disabled={disabled}
          allowLeadingZeros={false}
          allowDecimal={false}
          allowNegative={false}
          trimLeadingZeroesOnBlur
        />
      </Flexbox>
    )
  }

  return (
    <NumberInput
      className={cx(css.root, className)}
      min={0}
      flex="1 1 33%"
      disabled={disabled}
      leftSection={<ResourceIcon resourceType={resourceType} />}
      value={value}
      onChange={handleNumberInputChange}
      thousandSeparator=" "
      allowLeadingZeros={false}
      allowDecimal={false}
      allowNegative={false}
      trimLeadingZeroesOnBlur
    />
  )
})

export default ResourceInput
