import React, { FC, ReactNode, memo, useCallback } from 'react'
import cx from 'classnames'
import { Divider } from '@mantine/core'
import { useSettings } from 'entities/calculationSettings'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateBarracks from '../../model/hooks/useCalculateBarracks'
import Inputs from '../Inputs'
import Results from '../Results'
import css from './styles.module.sass'


interface Props {
  className?: string
  getExtremePowerNode: (resources: Partial<Resources>) => ReactNode
  getMightiestKingdomNode: (resources: Partial<Resources>) => ReactNode
}

const BarracksCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const { mutate, data } = useCalculateBarracks()
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const handleSubmitButtonClick = useCallback(() => {
    mutate({
      resources,
      parameters,
      settings,
    })
  }, [mutate, parameters, resources, settings])
  return (
    <Flexbox className={cx(css.root, className)} flexDirection="column" gap={16}>
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
