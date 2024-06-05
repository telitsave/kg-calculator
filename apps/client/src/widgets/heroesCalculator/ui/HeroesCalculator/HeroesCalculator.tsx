import React, { FC, ReactNode, memo, useCallback } from 'react'
import { Divider } from '@mantine/core'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { useResources } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateHeroes from '../../model/hooks/useCalculateHeroes'
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

  const handleCalculateButtonClick = useCallback(() => {
    mutate({
      resources,
    })
  }, [mutate, resources])

  return (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Inputs onCalculateButtonClick={handleCalculateButtonClick} />

      <Divider size="md" />

      {data && (
        <Results
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default HeroesCalculator
