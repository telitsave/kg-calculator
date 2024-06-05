import React, { FC, ReactNode, memo, useCallback } from 'react'
import cx from 'classnames'
import { useSettings } from 'entities/calculationSettings'
import { useCalculateDragon } from 'entities/dragonRunes'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import Inputs from '../Inputs'
import Results from '../Results'
import css from './styles.module.sass'


interface Props {
  className?: string
  getExtremePowerNode: (resources: Partial<Resources>) => ReactNode
  getMightiestKingdomNode: (resources: Partial<Resources>) => ReactNode
}

const DragonCalculator: FC<Props> = memo(({ className, getExtremePowerNode, getMightiestKingdomNode }) => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const { mutate, data } = useCalculateDragon()

  const handleSubmitButtonClick = useCallback(() => {
    mutate({
      resources,
      parameters,
      settings,
    })
  }, [mutate, parameters, resources, settings])

  return (
    <Flexbox className={cx(css.root, className)} flexDirection="column" gap={16}>
      <Inputs onSubmitButtonClick={handleSubmitButtonClick} />
      {data && (
        <Results
          data={data}
          extremePowerNode={getExtremePowerNode(data.spentResources)}
          mightiestKingdomNode={getMightiestKingdomNode(data.spentResources)}
        />
      )}
    </Flexbox>
  )
})

export default DragonCalculator
