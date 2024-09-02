import { FC, memo, useCallback } from 'react'
import { SegmentedControl, Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { ElementIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import usePriorityElementSetting from '../../model/hooks/usePriorityElementSetting'

const SettingPriorityElement: FC = memo(() => {
  const [value, setValue] = usePriorityElementSetting()

  const handleSegmentedChange = useCallback(
    (val: string) => {
      setValue(val as ElementsType)
    },
    [setValue],
  )

  return (
    <Flexbox alignItems="center" gap={8}>
      <Text fw={600}>Приоритетная стихия:</Text>
      <SegmentedControl
        w={220}
        data={[
          { value: 'bow', label: <ElementIcon element="bow" /> },
          { value: 'fire', label: <ElementIcon element="fire" /> },
          { value: 'ice', label: <ElementIcon element="ice" /> },
          { value: 'poison', label: <ElementIcon element="poison" /> },
        ]}
        value={value}
        onChange={handleSegmentedChange}
      />
    </Flexbox>
  )
})

export default SettingPriorityElement
