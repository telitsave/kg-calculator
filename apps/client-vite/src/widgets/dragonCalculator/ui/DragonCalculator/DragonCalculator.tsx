import Inputs from '../Inputs'
import Results from '../Results'
import css from './styles.module.sass'
import { SettingsQueue } from '@entities/calculationSettings'
import { useCalculateDragon } from '@entities/dragonRunes'
import { useCalculateMightiestKingdom } from '@entities/mightiestKingdom'
import { ParametersQueue } from '@entities/parameter'
import { ResourcesQueue } from '@entities/resource'
import { useCalculateUltimatePower } from '@entities/ultimatePower'
import { Flex } from '@mantine/core'
import cx from 'classnames'
import { FC, memo, useCallback } from 'react'

interface Props {
  className?: string
}

const DragonCalculator: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useCalculateDragon()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateMK, data: mkData } = useCalculateMightiestKingdom()

  const handleSubmitButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    mutate()
    calculateUltimatePower(['dragon'])
    calculateMK(['dragon'])
  }, [mutate, calculateUltimatePower, calculateMK])

  return (
    <Flex className={cx(css.root, className)} direction="column" gap={16}>
      <Inputs onSubmitButtonClick={handleSubmitButtonClick} />
      {data && <Results data={data} ultimatePowerData={ultimatePowerData} mightiestKingdomData={mkData} />}
    </Flex>
  )
})

export default DragonCalculator
