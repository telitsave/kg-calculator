import React, { FC, ReactNode, memo, useCallback } from 'react'
import { Divider } from '@mantine/core'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { useSettings } from 'entities/calculationSettings'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateBarracks from '../../model/hooks/useCalculateBarracks'
import Inputs from '../Inputs'
import Results from '../Results'


interface Props {
  className?: string
  getExtremePowerNode: (resources: ResourcesData) => ReactNode
  getMightiestKingdomNode: (resources: ResourcesData) => ReactNode
}

const BarracksCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const { mutate, data } = useCalculateBarracks()
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const { serverSettings, enabledCustomServerSettings } = useServerSettings()
  const handleSubmitButtonClick = useCallback(() => {
    mutate({
      resources,
      parameters,
      settings,
      customServerSettings: enabledCustomServerSettings ? serverSettings : undefined,
    })
  }, [mutate, parameters, resources, settings])
  return (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Inputs onCalculateButtonClick={handleSubmitButtonClick} />
      <Divider size="md" />
      {data && (
        <Results
          params={data.parameters}
          oldParams={data.oldParameters}
          sourceResources={data.sourceResources}
          leftResources={data.leftResources}
          spentResources={data.spentResources}
          randomBooksUsed={data.randomBooksUsed}
          convertTalentBooks={data.convertTalentBooks}
          convertBooksForBarracks={data.convertBooksForBarracks}
          spentTalentBooks={data.spentTalentBooks}
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default BarracksCalculator
