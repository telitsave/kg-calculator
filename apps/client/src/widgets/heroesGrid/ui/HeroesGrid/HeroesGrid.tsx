import React, { FC, memo, useMemo, useState } from 'react'
import { Flex } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { HeroHelper } from 'entities/hero'
import HeroCard from 'entities/hero/ui/HeroCard'
import useData from '../../model/hooks/useData'
import ElementFilter from '../ElementFilter'


interface Props {
  className?: string
}

const HeroesGrid: FC<Props> = memo(({ className }) => {
  const { heroes, onRemoveBar, onAddBar, onRemoveStar, onAddStar, onSetCards } = useData()
  const [elementsFilter, setElementsFilter] = useState<ElementsType | null>(null)
  const heroesFilteredSorted = useMemo(() => {
    let result = [...heroes]
    if (elementsFilter) {
      result = result.filter((it) => it.element === elementsFilter)
    }

    return orderBy(result, ['element', 'rank', 'name'], ['asc', 'desc', 'asc'])
  }, [elementsFilter, heroes])
  return (
    <Flex direction="column" gap={16}>
      <Flex justify="flex-end">
        <ElementFilter value={elementsFilter} onChange={setElementsFilter} />
      </Flex>
      <Flex className={className} direction="column" gap={8}>
        {heroesFilteredSorted.map((hero) => (
          <HeroCard
            key={hero.heroId}
            element={hero.element}
            id={hero.heroId}
            stars={hero.stars || 0}
            bars={hero.bars || 0}
            name={hero.name}
            cards={hero.cards || 0}
            rank={hero.rank}
            maxStars={HeroHelper.getMaxStars(hero.rank)}
            maxBars={HeroHelper.getMaxBars(hero.rank, hero.stars || 0)}
            onAddBar={onAddBar}
            onRemoveBar={onRemoveBar}
            onAddStar={onAddStar}
            onRemoveStar={onRemoveStar}
            onSetCards={onSetCards}
          />
        ))}
      </Flex>
    </Flex>
  )
})

export default HeroesGrid
