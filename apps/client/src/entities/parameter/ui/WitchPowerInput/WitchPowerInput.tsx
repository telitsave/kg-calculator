import { FC, memo } from 'react'
import { Progress } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'
import ParameterInput from '../ParameterInput'


interface Props {
  className?: string
}

const WitchPowerInput: FC<Props> = memo(({ className }) => {
  const lightLevel = useParameter('witchParams_lightLevel')[0] || 0
  const darkLevel = useParameter('witchParams_darkLevel')[0] || 0
  return (
    <Flexbox className={className} justifyContent="space-between" alignItems="center">
      <ParameterInput parameterType="witchParams_lightLevel" viewMode="bigIcon" />
      <Progress.Root size="xl" w="60%">
        <Progress.Section value={(lightLevel / (lightLevel + darkLevel)) * 100} color="#FFAE29"></Progress.Section>
        <Progress.Section value={(darkLevel / (lightLevel + darkLevel)) * 100} color="#9C34DE"></Progress.Section>
      </Progress.Root>
      <ParameterInput parameterType="witchParams_darkLevel" viewMode="bigIcon" />
    </Flexbox>
  )
})

export default WitchPowerInput
