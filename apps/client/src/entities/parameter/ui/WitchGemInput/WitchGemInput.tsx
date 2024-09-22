import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Button, Flex, NumberInput } from '@mantine/core'
import { WitchGemsIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useWitchGemParameter from '../../model/hooks/useWitchGemParameter'
import css from './styles.module.sass'


interface Props {
  rank: number
  gem: string
}

const WitchGemInput: FC<Props> = memo(({ rank, gem }) => {
  const [value, setValue] = useWitchGemParameter(rank, gem)
  const [stateValue, setStateValue] = useState(value || 0)

  useEffect(() => {
    if (value) {
      setStateValue(value)
    }
  }, [value])

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10))
      setStateValue(parseInt(value.toString(), 10))
    },
    [setValue],
  )
  const handleMinButtonClick = useCallback(() => {
    setValue(0)
    setStateValue(0)
  }, [setValue])

  const handleMaxButtonClick = useCallback(() => {
    setValue(20)
    setStateValue(20)
  }, [setValue])

  return (
    <Flexbox className={css.root} flexDirection="column" alignItems="center" gap={4}>
      <WitchGemsIcon rank={rank} gem={gem} faded={!stateValue} />
      <NumberInput
        name={`gem-${rank}-${gem}`}
        w={100}
        min={0}
        max={20}
        value={stateValue}
        onChange={handleNumberInputChange}
        clampBehavior="strict"
      />
      <Flex gap={8}>
        <Button onClick={handleMinButtonClick} size="xs">
          MIN
        </Button>
        <Button onClick={handleMaxButtonClick} size="xs">
          MAX
        </Button>
      </Flex>
    </Flexbox>
  )
})

export default WitchGemInput
