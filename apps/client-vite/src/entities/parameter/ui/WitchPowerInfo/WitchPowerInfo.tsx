import ParameterInfo from '../ParameterInfo'
import { Progress } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import type { Parameters } from 'kg-calculator-typings'
import { FC, memo } from 'react'

interface Props {
  className?: string
  params: Parameters
  oldParams: Parameters
}

const WitchPowerInfo: FC<Props> = memo(
  ({
    className,
    params: { witchParams_lightLevel: lightLevel = 0, witchParams_darkLevel: darkLevel = 0 },
    oldParams,
  }) => {
    return (
      <Flexbox className={className} justifyContent="space-between" alignItems="center">
        <ParameterInfo
          parameterType="witchParams_lightLevel"
          value={lightLevel || 0}
          oldValue={oldParams.witchParams_lightLevel}
          viewMode="bigIcon"
        />
        <Progress.Root size="xl" w="100%">
          <Progress.Section value={(lightLevel / (lightLevel + darkLevel)) * 100} color="#FFAE29"></Progress.Section>
          <Progress.Section value={(darkLevel / (lightLevel + darkLevel)) * 100} color="#9C34DE"></Progress.Section>
        </Progress.Root>
        <ParameterInfo
          parameterType="witchParams_darkLevel"
          value={darkLevel}
          oldValue={oldParams.witchParams_darkLevel}
          viewMode="bigIcon"
        />
      </Flexbox>
    )
  },
)

export default WitchPowerInfo
