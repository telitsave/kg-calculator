import { FC, memo, useCallback, useEffect, useState } from 'react'
import { SegmentedControl, Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { ElementIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import useSetting from '../../model/hooks/useSetting'


const SettingPriorityElement: FC = memo(() => {
  const [value, setValue] = useSetting('priorityElement')
  const [stateValue, setStateValue] = useState(value)

  const handleSegmentedChange = useCallback(
    (val: string) => {
      setValue(val as ElementsType)
      setStateValue(val)
    },
    [setValue],
  )

  useEffect(() => {
    if (value) {
      setStateValue(value)
    }
  }, [value])

  return (
    <Flexbox alignItems="center" gap={8}>
      <Text fw={600}>
        <FormattedMessage defaultMessage="Приоритетная стихия:" />
      </Text>
      <SegmentedControl
        w={220}
        data={[
          { value: 'bow', label: <ElementIcon element="bow" /> },
          { value: 'fire', label: <ElementIcon element="fire" /> },
          { value: 'ice', label: <ElementIcon element="ice" /> },
          { value: 'poison', label: <ElementIcon element="poison" /> },
        ]}
        value={stateValue as string}
        onChange={handleSegmentedChange}
      />
    </Flexbox>
  )
})

export default SettingPriorityElement
