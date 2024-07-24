import React, { FC, ReactNode, memo, useCallback } from 'react'
import { Divider } from '@mantine/core'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { useSettings } from 'entities/calculationSettings'
import { useHeroes } from 'entities/hero'
import { useResources } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateHeroes from '../../model/hooks/useCalculateHeroes'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import Inputs from '../Inputs'
import Results from '../Results'


interface Props {
  className?: string
  getExtremePowerNode: (resources: ResourcesData) => ReactNode
  getMightiestKingdomNode: (resources: ResourcesData) => ReactNode
}

const HeroesCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const { mutate, data } = useCalculateHeroes()
  const resources = useResources()
  const settings = useSettings()
  const { heroes } = useHeroes()
  const { heroesDistribution } = useHeroesDistributionModel()

  const handleCalculateButtonClick = useCallback(() => {
    mutate({
      resources,
      settings,
      heroesData: heroes,
      heroesDistribution,
    })
  }, [mutate, resources])

  return (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Inputs onCalculateButtonClick={handleCalculateButtonClick} />

      <Divider size="md" />

      {data && (
        <Results
          results={data}
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default HeroesCalculator
