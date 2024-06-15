import React, { FC, memo, useMemo } from 'react'
import { orderBy } from 'lodash'
import HeroCard from 'entities/hero/ui/HeroCard'
import Flexbox from 'shared/ui/Flexbox'
import useData from '../../model/hooks/useData'


interface Props {
  className?: string
}

const HeroesGrid: FC<Props> = memo(({ className }) => {
  const { heroes } = useData()
  const sortedHeroes = useMemo(() => orderBy(heroes, ['element', 'rank', 'heroId'], ['asc', 'desc', 'asc']), [heroes])
  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      {sortedHeroes.map((hero) => (
        <HeroCard key={hero.heroId} hero={hero} />
      ))}
    </Flexbox>
  )
})

export default HeroesGrid
