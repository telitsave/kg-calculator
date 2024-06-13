import React, { FC, memo } from 'react'
import { HeroesGrid } from 'widgets/heroesGrid'

interface Props {
  className?: string
}

const HeroesPage: FC<Props> = memo(({ className }) => (
  <div className={className}>
    <HeroesGrid />
  </div>
))

export default HeroesPage
