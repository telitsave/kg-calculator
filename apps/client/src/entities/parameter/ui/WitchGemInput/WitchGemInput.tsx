import { FC, memo, useCallback } from 'react'
import { Button, Flex, NumberInput } from '@mantine/core'
import { WitchGemsIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useWitchGemParameter from '../../model/hooks/useWitchGemParameter'
import { Ranks } from '../../model/types'
import css from './styles.module.sass'

interface Props {
  rank: Ranks
  gem: number
}

const WitchGemInput: FC<Props> = memo(({ rank, gem }) => {
  const [value, setValue] = useWitchGemParameter(rank, gem)

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10))
    },
    [setValue],
  )
  const handleMinButtonClick = useCallback(() => {
    setValue(0)
  }, [])

  const handleMaxButtonClick = useCallback(() => {
    setValue(20)
  }, [])

  return (
    <Flexbox className={css.root} flexDirection="column" alignItems="center" gap={4}>
      <WitchGemsIcon rank={rank} gem={gem} faded={!value} />
      <NumberInput
        name={`gem-${rank}-${gem}`}
        w={100}
        min={0}
        max={20}
        value={value}
        onChange={handleNumberInputChange}
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
