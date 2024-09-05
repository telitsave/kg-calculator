import { FC, memo, useCallback } from 'react'
import { Divider, Flex } from '@mantine/core'
import { SettingsQueue } from 'entities/calculationSettings'
import { useCalculateMightiestKingdom } from 'entities/mightiestKingdom'
import { ParametersQueue } from 'entities/parameter'
import { ResourcesQueue } from 'entities/resource'
import { useCalculateUltimatePower } from 'entities/ultimatePower'
import useCalculateGallery from '../../model/hooks/useCalculateGallery'
import Inputs from '../Inputs'
import Results from '../Results'


interface Props {
  className?: string
}

const GalleryCalculator: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useCalculateGallery()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateMK, data: mkData } = useCalculateMightiestKingdom()

  const handleCalculateButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    mutate()
    calculateUltimatePower(['gallery'])
    calculateMK(['gallery'])
  }, [mutate, calculateUltimatePower, calculateMK])

  return (
    <Flex className={className} direction="column" gap={16}>
      <Inputs onCalculateButtonClick={handleCalculateButtonClick} />

      <Divider size="md" />

      {data && <Results data={data} mightiestKingdomData={mkData} ultimatePowerData={ultimatePowerData} />}
    </Flex>
  )
})

export default GalleryCalculator
