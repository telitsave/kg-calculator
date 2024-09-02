import { FC, memo, useCallback, useMemo, useState } from 'react'
import cx from 'classnames'
import { SegmentedControl, Text, Title } from '@mantine/core'
import { ResourceInput, ResourceType } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const itemsByGroups: ResourceType[] = [
  'gold',
  'stone',
  'wood',
  'steel',
  'customConstructionItem',
  'greenRune',
  'blueRune',
  'purpleRune',
  'goldRune',
  'runesBox',
  'lightReagent',
  'strengthPotion',
  'luckPotion',
  'bookBow1',
  'bookBow2',
  'bookBow3',
  'bookBow4',
  'bookFire1',
  'bookFire2',
  'bookFire3',
  'bookFire4',
  'bookIce1',
  'bookIce2',
  'bookIce3',
  'bookIce4',
  'bookPoison1',
  'bookPoison2',
  'bookPoison3',
  'bookPoison4',
  'bookRandom',
  'talentBook',
  'talentCrown',
  'hummer',
  'galleryShards',
  'heroGreenCards',
  'heroBlueCards',
  'heroPurpleCards',
  'heroGoldCards',
]
const itemsLikeInGame: ResourceType[] = [
  'gold',
  'luckPotion',
  'strengthPotion',
  'stone',
  'hummer',
  'wood',
  'steel',
  'bookBow4',
  'bookBow3',
  'bookBow2',
  'bookBow1',
  'bookFire4',
  'bookFire3',
  'bookFire2',
  'bookFire1',
  'bookIce4',
  'bookIce3',
  'bookIce2',
  'bookIce1',
  'bookPoison4',
  'bookPoison3',
  'bookPoison2',
  'bookPoison1',
  'runesBox',
  'goldRune',
  'purpleRune',
  'blueRune',
  'greenRune',
  'talentBook',
  'talentCrown',
  'galleryShards',
  'bookRandom',
  'lightReagent',
  'customConstructionItem',
  'heroGreenCards',
  'heroBlueCards',
  'heroPurpleCards',
  'heroGoldCards',
]

const Inventory: FC<Props> = memo(({ className }) => {
  const [viewMode, setViewMode] = useState<'default' | 'bigIcon'>('default')
  const [sortMode, setSortMode] = useState<'likeGame' | 'byGroups'>('byGroups')

  const handleViewModeChange = useCallback((value: string) => {
    setViewMode(value as 'default' | 'bigIcon')
  }, [])

  const handleSortModeChange = useCallback((value: string) => {
    setSortMode(value as 'likeGame' | 'byGroups')
  }, [])

  const items = useMemo(() => {
    const sortedItemsKeys = sortMode === 'byGroups' ? itemsByGroups : itemsLikeInGame

    return sortedItemsKeys.map((it) => <ResourceInput key={it} resourceType={it} viewMode={viewMode} />)
  }, [sortMode, viewMode])

  return (
    <Flexbox className={cx(css.root, className)} gap={8} flexDirection="column">
      <Title order={4}>Инвентарь</Title>
      <Flexbox alignItems="center" justifyContent="flex-end" gap={8}>
        <Text size="sm">Сортировка</Text>
        <SegmentedControl
          data={[
            {
              label: 'Как в игре',
              value: 'likeGame',
            },
            {
              label: 'По группам',
              value: 'byGroups',
            },
          ]}
          value={sortMode}
          onChange={handleSortModeChange}
        />
      </Flexbox>
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
