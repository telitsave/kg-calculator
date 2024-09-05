import { FC, memo, useCallback } from 'react'
import { Divider, Flex } from '@mantine/core'
import { SettingsQueue } from 'entities/calculationSettings'
import { useCalculateMightiestKingdom } from 'entities/mightiestKingdom'
import { ParametersQueue } from 'entities/parameter'
import { ResourcesQueue } from 'entities/resource'
import { useCalculateUltimatePower } from 'entities/ultimatePower'
import useCalculateBarracks from '../../model/hooks/useCalculateBarracks'
import Inputs from '../Inputs'
import Results from '../Results'


interface Props {
  className?: string
}

const BarracksCalculator: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useCalculateBarracks()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateMK, data: mkData } = useCalculateMightiestKingdom()

  const handleSubmitButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    mutate()
    calculateUltimatePower(['barracks'])
    calculateMK(['barracks'])
  }, [mutate, calculateUltimatePower, calculateMK])

  return (
    <Flex className={className} direction="column" gap={16}>
      <Inputs onCalculateButtonClick={handleSubmitButtonClick} />
      <Divider size="md" />
      {data && <Results data={data} ultimatePowerData={ultimatePowerData} mightiestKingdomData={mkData} />}
    </Flex>
  )
})

export default BarracksCalculator
