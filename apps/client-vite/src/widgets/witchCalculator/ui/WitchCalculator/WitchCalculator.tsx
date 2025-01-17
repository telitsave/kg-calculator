import Inputs from '../Inputs'
import Results from '../Results'
import css from './styles.module.sass'
import { SettingsQueue } from '@entities/calculationSettings'
import { useCalculateMightiestKingdom } from '@entities/mightiestKingdom'
import { ParametersQueue } from '@entities/parameter'
import { ResourcesQueue } from '@entities/resource'
import { useCalculateUltimatePower } from '@entities/ultimatePower'
import { useCalculateWitch } from '@entities/witch'
import { Divider, Flex } from '@mantine/core'
import cx from 'classnames'
import { FC, memo, useCallback } from 'react'

interface Props {
  className?: string
}

const WitchCalculator: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useCalculateWitch()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateMK, data: mkData } = useCalculateMightiestKingdom()

  const handleSubmitButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    mutate()
    calculateUltimatePower(['witch'])
    calculateMK(['witch'])
  }, [mutate, calculateUltimatePower, calculateMK])

  return (
    <Flex className={cx(css.root, className)} direction="column" gap={16}>
      <Inputs onSubmitButtonClick={handleSubmitButtonClick} />
      <Divider size="md" />
      {data && <Results data={data} mightiestKingdomData={mkData} ultimatePowerData={ultimatePowerData} />}
    </Flex>
  )
})

export default WitchCalculator
