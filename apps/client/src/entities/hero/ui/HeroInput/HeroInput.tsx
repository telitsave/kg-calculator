import React, { FC, memo } from 'react'
import { NumberInput } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import HeroIcon from '../HeroIcon'


interface Props {
  className?: string
  hero: Hero
}

const HeroInput: FC<Props> = memo(({ className, hero }) => {
  return (
    <Flexbox className={className} flexDirection="column" alignItems="center" gap={4}>
      <HeroIcon heroId={hero.heroId} element={hero.element} />
      <NumberInput maw={140} miw={80} min={0} thousandSeparator=" " label="Количество звезд" />
      <NumberInput maw={140} miw={80} min={0} thousandSeparator=" " label="Количество бар" />
      <NumberInput maw={140} miw={80} min={0} thousandSeparator=" " label="Уровень" />
      <NumberInput maw={140} miw={80} min={0} thousandSeparator=" " label="Количество карт" />
    </Flexbox>
  )
})

export default HeroInput
