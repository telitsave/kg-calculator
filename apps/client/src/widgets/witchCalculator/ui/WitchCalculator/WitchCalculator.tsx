import React, { FC, ReactNode, memo, useCallback } from 'react'
import cx from 'classnames'
import { Divider } from '@mantine/core'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { useCalculateWitch } from 'entities/witch'
import Flexbox from 'shared/ui/Flexbox'
import Inputs from '../Inputs'
import Results from '../Results'
import css from './styles.module.sass'


interface Props {
  className?: string
  getExtremePowerNode: (resources: ResourcesData) => ReactNode
  getMightiestKingdomNode: (resources: ResourcesData) => ReactNode
}

const WitchCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const resources = useResources()
  const parameters = useParameters()
  const { mutate, data } = useCalculateWitch()

  const handleSubmitButtonClick = useCallback(() => {
    mutate({
      resources,
      parameters,
    })
  }, [mutate, parameters, resources])

  return (
    <Flexbox className={cx(css.root, className)} flexDirection="column" gap={16}>
      <Inputs onSubmitButtonClick={handleSubmitButtonClick} />
      <Divider size="md" />
      {data && (
        <Results
          witchParameters={data.newParameters.witch}
          oldWitchParameters={data.oldParameters.witch}
          sourceResources={data.sourceResources.witch}
          spentResources={data.spentResources.witch}
          leftResources={data.leftResources.witch}
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default WitchCalculator
