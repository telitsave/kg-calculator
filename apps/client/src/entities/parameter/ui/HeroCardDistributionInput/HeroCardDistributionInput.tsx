import { FC, memo } from 'react'
import { NumberInput } from '@mantine/core'

interface Props {
  className?: string
}

const HeroCardDistributionInput: FC<Props> = memo(({ className }) => (
  <NumberInput className={className} size="xs" hideControls w={75} min={0} />
))

export default HeroCardDistributionInput
