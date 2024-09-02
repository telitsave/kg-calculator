import { FC, ReactNode, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import type { BlacksmithParameters, BlacksmithResources } from 'kg-calculator-typings/api/Blacksmith'
import { ParameterInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  sourceResources: BlacksmithResources
  spentResources: BlacksmithResources
  leftResources: BlacksmithResources
  sourceParameters: BlacksmithParameters
  parameters: BlacksmithParameters
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(
  ({
    className,
    sourceResources,
    spentResources,
    leftResources,
    sourceParameters,
    parameters,
    extremePowerNode,
    mightiestKingdomNode,
  }) => (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Результаты</Title>

        <Flexbox flexDirection="column" gap={8}>
          <ParameterInfo
            parameterType="blacksmithLevel"
            value={parameters.level}
            oldValue={sourceParameters.level}
            viewMode="bigIcon"
          />
        </Flexbox>

        <Divider size="xs" />

        <Title order={5}>Потраченные ресурсы</Title>

        <Flexbox flexDirection="column" gap={8}>
          <ResourceCount
            resourceType="hummer"
            sourceCount={sourceResources.hammers}
            count={spentResources.hammers}
            leftCount={leftResources.hammers}
          />
        </Flexbox>
      </Flexbox>

      <Divider />

      {mightiestKingdomNode}

      <Divider />

      {extremePowerNode}
    </Flexbox>
  ),
)

export default Results
