import useCalculateBlacksmith from '../../model/hooks/useCalculateBlacksmith'
import Inputs from '../Inputs'
import Results from '../Results'
import { SettingsQueue } from '@entities/calculationSettings'
import { useCalculateMightiestKingdom } from '@entities/mightiestKingdom'
import { ParametersQueue } from '@entities/parameter'
import { ResourcesQueue } from '@entities/resource'
import { useCalculateUltimatePower } from '@entities/ultimatePower'
import { Divider } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import { FC, memo, useCallback } from 'react'

interface Props {
  className?: string
}

const BlacksmithCalculator: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useCalculateBlacksmith()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateMK, data: mkData } = useCalculateMightiestKingdom()

  const handleCalculateButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    mutate()
    calculateUltimatePower(['blacksmith'])
    calculateMK(['blacksmith'])
  }, [mutate, calculateUltimatePower, calculateMK])

  return (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Inputs onCalculateButtonClick={handleCalculateButtonClick} />

      <Divider size="md" />

      {data && <Results data={data} ultimatePowerData={ultimatePowerData} mkData={mkData} />}
    </Flexbox>
  )
})

export default BlacksmithCalculator
