import React, { FC, memo, useCallback } from 'react'
import { SegmentedControl, Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { ElementIcon } from 'shared/assets/icons'


interface Props {
  value: ElementsType | null

  onChange: (value: ElementsType | null) => void
}

const ElementFilter: FC<Props> = memo(({ value, onChange }) => {
  const handleSegmentedControlChange = useCallback((val: string) => {
    if (val === 'all') {
      onChange(null)
    } else {
      onChange(val as ElementsType)
    }
  }, [])

  return (
    <SegmentedControl
      size="xs"
      data={[
        {
          value: 'all',
          label: (
            <Text
              h={32}
              display="flex"
              style={{
                alignItems: 'center',
              }}
            >
              Все
            </Text>
          ),
        },
        { value: 'bow', label: <ElementIcon element="bow" /> },
        { value: 'fire', label: <ElementIcon element="fire" /> },
        { value: 'ice', label: <ElementIcon element="ice" /> },
        { value: 'poison', label: <ElementIcon element="poison" /> },
      ]}
      value={value || 'all'}
      onChange={handleSegmentedControlChange}
    />
  )
})

export default ElementFilter
