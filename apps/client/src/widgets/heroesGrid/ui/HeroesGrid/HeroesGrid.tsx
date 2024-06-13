import React, { FC, memo } from 'react'
import { HeroInput } from 'entities/hero'
import Flexbox from 'shared/ui/Flexbox'
import useData from '../../model/hooks/useData'


interface Props {
  className?: string
}

const HeroesGrid: FC<Props> = memo(({ className }) => {
  const { heroes } = useData()
  return (
    <Flexbox className={className} flexWrap="wrap" gap={8}>
      {heroes.map((hero) => (
        <HeroInput key={hero.heroId} hero={hero} />
      ))}
    </Flexbox>
  )
})

export default HeroesGrid
