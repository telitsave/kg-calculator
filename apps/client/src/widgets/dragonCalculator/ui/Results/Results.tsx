import React, { FC, ReactNode, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import type { CalculatePossibleDragonResponse } from 'kg-calculator-typings/api/Dragon'
import { useSetting } from 'entities/calculationSettings'
import { ParameterInfo } from 'entities/parameter'
import { ResourceCount, ResourcesConverts } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  data: CalculatePossibleDragonResponse
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(
  ({
    data: { leftResources, spentResources, spentBoxesResources, sourceResources, oldParameters, newParameters },
    extremePowerNode,
    mightiestKingdomNode,
  }) => {
    const [canUseBoxes] = useSetting('canUseDragonBoxes')
    return (
      <Flexbox flexDirection="column" gap={16}>
        <Title order={4}>Результаты</Title>

        <Flexbox alignItems="center" gap={24} flexWrap="wrap" justifyContent="center">
          <ParameterInfo
            parameterType="greenEmblem"
            value={newParameters.dragonEmblems.green}
            oldValue={oldParameters.dragonEmblems.green}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="blueEmblem"
            value={newParameters.dragonEmblems.blue}
            oldValue={oldParameters.dragonEmblems.blue}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="purpleEmblem"
            value={newParameters.dragonEmblems.purple}
            oldValue={oldParameters.dragonEmblems.purple}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="goldEmblem"
            value={newParameters.dragonEmblems.gold}
            oldValue={oldParameters.dragonEmblems.gold}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="dragonLevel"
            value={newParameters.dragonEmblems.gold + 1}
            oldValue={oldParameters.dragonEmblems.gold + 1}
            viewMode="bigIcon"
          />
        </Flexbox>

        <Flexbox flexDirection="column" gap={4}>
          <Title order={5}>Потраченные ресурсы</Title>
          <Flexbox flexDirection="column" gap={8}>
            <ResourceCount
              resourceType="greenRune"
              sourceCount={sourceResources.dragonsRunes.green}
              count={spentResources.dragonsRunes.green}
              leftCount={leftResources.dragonsRunes.green}
            />
            <ResourceCount
              resourceType="blueRune"
              sourceCount={sourceResources.dragonsRunes.blue}
              count={spentResources.dragonsRunes.blue}
              leftCount={leftResources.dragonsRunes.blue}
            />
            <ResourceCount
              resourceType="purpleRune"
              sourceCount={sourceResources.dragonsRunes.purple}
              count={spentResources.dragonsRunes.purple}
              leftCount={leftResources.dragonsRunes.purple}
            />
            <ResourceCount
              resourceType="goldRune"
              sourceCount={sourceResources.dragonsRunes.gold}
              count={spentResources.dragonsRunes.gold}
              leftCount={leftResources.dragonsRunes.gold}
            />
            <ResourceCount
              resourceType="runesBox"
              sourceCount={sourceResources.dragonsRunes.boxes}
              count={spentResources.dragonsRunes.boxes}
              leftCount={leftResources.dragonsRunes.boxes}
            />
          </Flexbox>
        </Flexbox>

        <Divider size="xs" />

        {canUseBoxes && (
          <Flexbox className={css.converts} flexDirection="column" gap={4}>
            <Title order={5}>Конвертация коробок в руны</Title>
            <ResourcesConverts
              sourceResourceType="runesBox"
              targetResourceType="greenRune"
              sourceValue={spentBoxesResources.green}
              targetValue={spentBoxesResources.green * 200}
            />
            <ResourcesConverts
              sourceResourceType="runesBox"
              targetResourceType="blueRune"
              sourceValue={spentBoxesResources.blue}
              targetValue={spentBoxesResources.blue * 20}
            />
            <ResourcesConverts
              sourceResourceType="runesBox"
              targetResourceType="purpleRune"
              sourceValue={spentBoxesResources.purple}
              targetValue={spentBoxesResources.purple * 2}
            />
            <ResourcesConverts
              sourceResourceType="runesBox"
              targetResourceType="goldRune"
              sourceValue={spentBoxesResources.gold}
              targetValue={spentBoxesResources.gold}
            />
          </Flexbox>
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
