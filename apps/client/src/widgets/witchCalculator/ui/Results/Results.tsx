import React, { FC, ReactNode, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import type { WitchParameters, WitchResources } from 'kg-calculator-typings/api/Witch'
import { WitchGemsInfo, WitchPowerInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import Flexbox from 'shared/ui/Flexbox'


interface Props {
  className?: string
  witchParameters: WitchParameters
  oldWitchParameters: WitchParameters
  sourceResources: WitchResources
  spentResources: WitchResources
  leftResources: WitchResources
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(
  ({
    className,
    witchParameters,
    oldWitchParameters,
    sourceResources,
    leftResources,
    spentResources,
    extremePowerNode,
    mightiestKingdomNode,
  }) => {
    const { serverSettings } = useServerSettings()

    return (
      <Flexbox className={className} flexDirection="column" gap={8}>
        <Title order={4}>
          Новый уровень магии ведьмы {spentResources.lightReagents === 0 ? <Text c="dimmed">Нет изменений</Text> : ''}
        </Title>
        <WitchPowerInfo witchParameters={witchParameters} oldWitchParameters={oldWitchParameters} />
        {spentResources.lightReagents > 0 && <Title order={5}>Потраченные ресурсы</Title>}
        {spentResources.lightReagents > 0 && (
          <ResourceCount
            resourceType="lightReagent"
            sourceCount={sourceResources.lightReagents}
            count={spentResources.lightReagents}
            leftCount={leftResources.lightReagents}
          />
        )}
        <Divider />
        <Title order={4}>
          Новые уровни камней ведьмы{' '}
          {spentResources.greenWitchPotion === 0 ? <Text c="dimmed">Нет изменений</Text> : ''}
        </Title>
        <WitchGemsInfo
          witchParameters={witchParameters}
          oldWitchParameters={oldWitchParameters}
          maxRank={serverSettings?.witchGemsMaxRank || 1}
        />
        {spentResources.greenWitchPotion > 0 && <Title order={5}>Потраченные ресурсы</Title>}
        {spentResources.greenWitchPotion > 0 && (
          <ResourceCount
            resourceType="strengthPotion"
            sourceCount={sourceResources.greenWitchPotion}
            count={spentResources.greenWitchPotion}
            leftCount={leftResources.greenWitchPotion}
          />
        )}
        {spentResources.greenWitchPotion > 0 && (
          <ResourceCount
            resourceType="luckPotion"
            sourceCount={sourceResources.purpleWitchPotion}
            count={spentResources.purpleWitchPotion}
            leftCount={leftResources.purpleWitchPotion}
          />
        )}
        <Divider />
        {mightiestKingdomNode}
        <Divider />
        {extremePowerNode}
      </Flexbox>
    )
  },
)

export default Results
