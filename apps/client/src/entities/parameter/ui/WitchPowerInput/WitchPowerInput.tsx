import React, { FC, memo } from 'react'
import { Progress } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import useParameters from '../../model/hooks/useParameters'
import ParameterInput from '../ParameterInput'

interface Props {
  className?: string
}

const WitchPowerInput: FC<Props> = memo(({ className }) => {
  const {
    witch: { lightLevel, darkLevel },
  } = useParameters()
  return (
    <Flexbox className={className} justifyContent="space-between" alignItems="center">
      <ParameterInput parameterType="lightPower" viewMode="bigIcon" />
      <Progress.Root size="xl" w="100%">
        <Progress.Section value={(lightLevel / (lightLevel + darkLevel)) * 100} color="#FFAE29"></Progress.Section>
        <Progress.Section value={(darkLevel / (lightLevel + darkLevel)) * 100} color="#9C34DE"></Progress.Section>
      </Progress.Root>
      <ParameterInput parameterType="darkPower" viewMode="bigIcon" />
    </Flexbox>
  )
})

export default WitchPowerInput
