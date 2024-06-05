import React, { FC, ReactNode, memo, useCallback } from 'react'
import { Divider } from '@mantine/core'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateGallery from '../../model/hooks/useCalculateGallery'
import Inputs from '../Inputs'
import Results from '../Results'


interface Props {
  className?: string
  getExtremePowerNode: (resources: Partial<Resources>) => ReactNode
  getMightiestKingdomNode: (resources: Partial<Resources>) => ReactNode
}

const GalleryCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const { mutate, data } = useCalculateGallery()
  const resources = useResources()
  const parameters = useParameters()

  const handleCalculateButtonClick = useCallback(() => {
    mutate({
      resources,
      parameters,
    })
  }, [mutate, parameters, resources])

  return (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Inputs onCalculateButtonClick={handleCalculateButtonClick} />

      <Divider size="md" />

      {data && (
        <Results
          sourceParameters={data.sourceParameters.gallery}
          parameters={data.parameters.gallery}
          spentResources={data.spentResources}
          leftResources={data.leftResources}
          sourceResources={data.sourceResources}
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default GalleryCalculator
