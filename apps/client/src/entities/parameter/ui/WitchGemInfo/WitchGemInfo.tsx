import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import { WitchGemsIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
  rank: number
  gem: string
  value: number
  oldValue?: number
}

const WitchGemInfo: FC<Props> = memo(({ rank, gem, oldValue, value }) => {
  return (
    <Flexbox className={css.root} flexDirection="column" alignItems="center" gap={4}>
      <WitchGemsIcon rank={rank} gem={gem} faded={!value} />
      {oldValue && oldValue !== value ? (
        <Text>
          {oldValue} &#8594; {value}
        </Text>
      ) : (
        <Text>{value}</Text>
      )}
    </Flexbox>
  )
})

export default WitchGemInfo
