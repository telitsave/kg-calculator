import { FC, memo, useCallback, useMemo, useState } from 'react'
import cx from 'classnames'
import { SegmentedControl, Text, Title } from '@mantine/core'
import type { ResourceType } from 'kg-calculator-typings'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const itemsLikeInGame: ResourceType[] = [
  'gold',
  'witchResources_purpleWitchPotion',
  'witchResources_greenWitchPotion',
  'castleResources_stone',
  'blacksmithResources_hammers',
  'castleResources_wood',
  'castleResources_steel',
  'barracksResources_bow_4',
  'barracksResources_bow_3',
  'barracksResources_bow_2',
  'barracksResources_bow_1',
  'barracksResources_fire_4',
  'barracksResources_fire_3',
  'barracksResources_fire_2',
  'barracksResources_fire_1',
  'barracksResources_ice_4',
  'barracksResources_ice_3',
  'barracksResources_ice_2',
  'barracksResources_ice_1',
  'barracksResources_poison_4',
  'barracksResources_poison_3',
  'barracksResources_poison_2',
  'barracksResources_poison_1',
  'dragonResources_boxes',
  'dragonResources_gold',
  'dragonResources_purple',
  'dragonResources_blue',
  'dragonResources_green',
  'talentsResources_books',
  'talentsResources_oraclesCrowns',
  'galleryResources_shards',
  'barracksResources_random',
  'witchResources_lightReagents',
  'castleResources_boxes',
  'heroesResources_n',
  'heroesResources_r',
  'heroesResources_sr',
  'heroesResources_ssr',
]

const Inventory: FC<Props> = memo(({ className }) => {
  const [viewMode, setViewMode] = useState<'default' | 'bigIcon'>('default')

  const handleViewModeChange = useCallback((value: string) => {
    setViewMode(value as 'default' | 'bigIcon')
  }, [])

  const items = useMemo(() => {
    return itemsLikeInGame.map((it) => <ResourceInput key={it} resourceType={it} viewMode={viewMode} />)
  }, [viewMode])

  return (
    <Flexbox className={cx(css.root, className)} gap={8} flexDirection="column">
      <Title order={4}>Инвентарь</Title>
      <Flexbox alignItems="center" justifyContent="flex-end" gap={8}>
        <Text size="sm">Отображение</Text>
        <SegmentedControl
          data={[
            {
              label: 'По-строчно',
              value: 'default',
            },
            {
              label: 'Большие иконки',
              value: 'bigIcon',
            },
          ]}
          value={viewMode}
          onChange={handleViewModeChange}
        />
      </Flexbox>
      <Flexbox
        flexDirection={viewMode === 'default' ? 'column' : undefined}
        flexWrap={viewMode === 'bigIcon' ? 'wrap' : undefined}
        gap={viewMode === 'default' ? 8 : 16}
        justifyContent="space-between"
      >
        {items}
      </Flexbox>
    </Flexbox>
  )
})

export default Inventory
