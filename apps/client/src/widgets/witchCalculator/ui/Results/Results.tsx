import { FC, memo } from 'react'
import { Divider, Flex, Text, Title } from '@mantine/core'
import type {
  CalculateMightiestKingdomResponse,
  CalculateUltimatePowerResponse,
  CalculateWitchResponse,
} from 'kg-calculator-typings'
import { MightiestKingdomStatistics } from 'entities/mightiestKingdom'
import { WitchGemsInfo, WitchPowerInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import { UltimatePowerStatistics } from 'entities/ultimatePower'


interface Props {
  className?: string
  data: CalculateWitchResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mightiestKingdomData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(
  ({
    className,
    data: {
      oldParameters,
      newParameters,
      oldGemsParameters,
      newGemsParameters,
      sourceResources,
      leftResources,
      spentResources,
    },
    ultimatePowerData,
    mightiestKingdomData,
  }) => {
    const { serverSettings } = useServerSettings()

    return (
      <Flex className={className} direction="column" gap={8}>
        <Title order={4}>
          Новый уровень магии ведьмы{' '}
          {spentResources.witchResources_lightReagents === 0 ? <Text c="dimmed">Нет изменений</Text> : ''}
        </Title>
        <WitchPowerInfo params={newParameters} oldParams={oldParameters} />
        {(spentResources.witchResources_lightReagents || 0) > 0 && <Title order={5}>Потраченные ресурсы</Title>}
        {(spentResources.witchResources_lightReagents || 0) > 0 && (
          <ResourceCount
            resourceType="witchResources_lightReagents"
            sourceCount={sourceResources.witchResources_lightReagents}
            count={spentResources.witchResources_lightReagents}
            leftCount={leftResources.witchResources_lightReagents}
          />
        )}
        <Divider />
        <Title order={4}>
          Новые уровни камней ведьмы{' '}
          {spentResources.witchResources_greenWitchPotion === 0 ? <Text c="dimmed">Нет изменений</Text> : ''}
        </Title>
        <WitchGemsInfo
          gemsParams={newGemsParameters}
          oldGemsParams={oldGemsParameters}
          maxRank={serverSettings?.witchGemsMaxRank || 1}
        />
        {(spentResources.witchResources_greenWitchPotion || 0) > 0 && <Title order={5}>Потраченные ресурсы</Title>}
        {(spentResources.witchResources_greenWitchPotion || 0) > 0 && (
          <ResourceCount
            resourceType="witchResources_greenWitchPotion"
            sourceCount={sourceResources.witchResources_greenWitchPotion}
            count={spentResources.witchResources_greenWitchPotion}
            leftCount={leftResources.witchResources_greenWitchPotion}
          />
        )}
        {(spentResources.witchResources_greenWitchPotion || 0) > 0 && (
          <ResourceCount
            resourceType="witchResources_purpleWitchPotion"
            sourceCount={sourceResources.witchResources_purpleWitchPotion}
            count={spentResources.witchResources_purpleWitchPotion}
            leftCount={leftResources.witchResources_purpleWitchPotion}
          />
        )}
        <Divider />

        <MightiestKingdomStatistics data={mightiestKingdomData} />

        <Divider />

        <UltimatePowerStatistics data={ultimatePowerData} />
      </Flex>
    )
  },
)

export default Results
