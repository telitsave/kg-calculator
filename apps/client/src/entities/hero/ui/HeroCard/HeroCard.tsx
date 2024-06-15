import React, { FC, memo } from 'react'
import { Flex, NumberInput, Paper, SimpleGrid } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import HeroIcon from '../HeroIcon'


interface Props {
  className?: string
  hero: Hero
}

const HeroCard: FC<Props> = memo(({ className, hero }) => (
  <Paper shadow="sm" p="md" withBorder>
    <Flex className={className} align="center" gap={50}>
      <HeroIcon heroId={hero.heroId} element={hero.element} />
      <SimpleGrid cols={2}>
        <NumberInput
          maw={140}
          miw={80}
          min={0}
          flex="1 1 50%"
          thousandSeparator=" "
          label="Количество звезд"
          hideControls
        />
        <NumberInput
          maw={140}
          miw={80}
          min={0}
          flex="1 1 50%"
          thousandSeparator=" "
          label="Количество бар"
          hideControls
        />
        <NumberInput maw={140} miw={80} min={0} flex="1 1 50%" thousandSeparator=" " label="Уровень" hideControls />
        <NumberInput
          maw={140}
          miw={80}
          min={0}
          flex="1 1 50%"
          thousandSeparator=" "
          label="Количество карт"
          hideControls
        />
      </SimpleGrid>
    </Flex>
  </Paper>
))

export default HeroCard
