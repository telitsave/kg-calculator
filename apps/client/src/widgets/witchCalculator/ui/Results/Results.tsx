import React, { FC, ReactNode, memo } from 'react'
import cx from 'classnames'
import { Divider, Text, Title } from '@mantine/core'
import { WitchGemsInfo, WitchPowerInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import { WitchParameters, WitchResources } from 'shared/api'
import Flexbox from '../../../../shared/ui/Flexbox'
import css from './styles.module.sass'


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
  }) => (
    <Flexbox className={cx(css.root, className)} flexDirection="column" gap={8}>
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
        Новые уровни камней ведьмы {spentResources.greenWitchPotion === 0 ? <Text c="dimmed">Нет изменений</Text> : ''}
      </Title>
      <WitchGemsInfo witchParameters={witchParameters} oldWitchParameters={oldWitchParameters} />
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
  ),
)

export default Results
