import React, { FC, memo, useMemo, useState } from 'react'
import { Flex } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import HeroCard from 'entities/hero/ui/HeroCard'
import useData from '../../model/hooks/useData'
import ElementFilter from '../ElementFilter'


interface Props {
  className?: string
}

const HeroesGrid: FC<Props> = memo(({ className }) => {
  const { heroes } = useData()
  const [elementsFilter, setElementsFilter] = useState<ElementsType | null>(null)
  const heroesFilteredSorted = useMemo(() => {
    let result = [...heroes]
    if (elementsFilter) {
      result = result.filter((it) => it.element === elementsFilter)
    }

    return orderBy(result, ['element', 'rank', 'heroId'], ['asc', 'desc', 'asc'])
  }, [elementsFilter, heroes])
  return (
    <Flex direction="column" gap={16}>
      <Flex justify="flex-end">
        <ElementFilter value={elementsFilter} onChange={setElementsFilter} />
      </Flex>
      <Flex className={className} direction="column" gap={8}>
        {heroesFilteredSorted.map((hero) => (
          <HeroCard key={hero.heroId} heroData={hero} />
        ))}
      </Flex>
    </Flex>
  )
})

export default HeroesGrid
