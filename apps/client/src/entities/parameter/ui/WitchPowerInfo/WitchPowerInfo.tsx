import React, { FC, memo } from 'react'
import { Progress } from '@mantine/core'
import type { WitchParameters } from 'kg-calculator-typings/api/Witch'
import Flexbox from 'shared/ui/Flexbox'
import ParameterInfo from '../ParameterInfo'


interface Props {
  className?: string
  witchParameters: WitchParameters
  oldWitchParameters: WitchParameters
}

const WitchPowerInfo: FC<Props> = memo(
  ({ className, witchParameters: { darkLevel, lightLevel }, oldWitchParameters }) => {
    return (
      <Flexbox className={className} justifyContent="space-between" alignItems="center">
        <ParameterInfo
          parameterType="lightPower"
          value={lightLevel}
          oldValue={oldWitchParameters.lightLevel}
          viewMode="bigIcon"
        />
        <Progress.Root size="xl" w="100%">
          <Progress.Section value={(lightLevel / (lightLevel + darkLevel)) * 100} color="#FFAE29"></Progress.Section>
          <Progress.Section value={(darkLevel / (lightLevel + darkLevel)) * 100} color="#9C34DE"></Progress.Section>
        </Progress.Root>
        <ParameterInfo
          parameterType="darkPower"
          value={darkLevel}
          oldValue={oldWitchParameters.darkLevel}
          viewMode="bigIcon"
        />
      </Flexbox>
    )
  },
)

export default WitchPowerInfo
