import { FC, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import type { BarracksBooksResources, ElementsType, ParametersData, ResourcesData } from 'kg-calculator-typings'
import { BarracksElementalInfo, BarracksTalentsInfo } from 'entities/parameter'
import { KeysHelper, ResourceCount, ResourcesConverts } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  element: ElementsType
  oldParams: ParametersData
  params: ParametersData
  spentResources: ResourcesData
  randomBooksUsed: BarracksBooksResources
  convertBooksForBarracks: BarracksBooksResources
  convertTalentBooks: BarracksBooksResources
  spentTalentBooks: BarracksBooksResources
}

const ResultElement: FC<Props> = memo(
  ({
    element,
    oldParams,
    params,
    spentResources,
    randomBooksUsed,
    convertBooksForBarracks,
    convertTalentBooks,
    spentTalentBooks,
  }) => {
    const { serverSettings } = useServerSettings()

    return (
      <Flexbox flexDirection="column" gap={16}>
        <BarracksElementalInfo
          element={element}
          oldBarrackParams={oldParams.barracks}
          barrackParams={params.barracks}
        />
        <Divider size="sm" />
        <Title order={5}>Параметры талантов</Title>
        <BarracksTalentsInfo
          element={element}
          oldParameters={oldParams.talents}
          parameters={params.talents}
          maxRank={serverSettings?.talentsMaxRank || 1}
        />
        <Divider size="sm" />
        <Title order={5}>Конвертации ресурсов</Title>
        <Flexbox className={css.converts} flexDirection="column" gap={4}>
          {randomBooksUsed[element].rank1 > 0 && (
            <ResourcesConverts
              sourceResourceType="bookRandom"
              targetResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 1)}
              sourceValue={randomBooksUsed[element].rank1}
              targetValue={randomBooksUsed[element].rank1}
            />
          )}
          {convertBooksForBarracks[element].rank1 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 1)}
              targetResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 2)}
              sourceValue={convertBooksForBarracks[element].rank1}
              targetValue={convertBooksForBarracks[element].rank1 / 5}
            />
          )}
          {convertBooksForBarracks[element].rank2 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 2)}
              targetResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 3)}
              sourceValue={convertBooksForBarracks[element].rank2}
              targetValue={convertBooksForBarracks[element].rank2 / 5}
            />
          )}
          {convertBooksForBarracks[element].rank3 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 3)}
              targetResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 4)}
              sourceValue={convertBooksForBarracks[element].rank3}
              targetValue={convertBooksForBarracks[element].rank3 / 5}
            />
          )}
          {convertTalentBooks[element].rank1 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 1)}
              targetResourceType="talentBook"
              sourceValue={convertTalentBooks[element].rank1}
              targetValue={convertTalentBooks[element].rank1 * 3}
            />
          )}
          {convertTalentBooks[element].rank2 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 2)}
              targetResourceType="talentBook"
              sourceValue={convertTalentBooks[element].rank2}
              targetValue={convertTalentBooks[element].rank2 * 15}
            />
          )}
          {convertTalentBooks[element].rank3 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 3)}
              targetResourceType="talentBook"
              sourceValue={convertTalentBooks[element].rank3}
              targetValue={convertTalentBooks[element].rank3 * 72}
            />
          )}
          {convertTalentBooks[element].rank4 > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 4)}
              targetResourceType="talentBook"
              sourceValue={convertTalentBooks[element].rank4}
              targetValue={convertTalentBooks[element].rank4 * 358}
            />
          )}
        </Flexbox>
        <Divider size="sm" />
        <Title order={5}>Потрачено ресурсов</Title>
        <Flexbox gap={16} flexWrap="wrap">
          {spentResources.barracksBooks[element].rank1 > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 1)}
              count={spentResources.barracksBooks[element].rank1}
            />
          )}
          {spentResources.barracksBooks[element].rank2 > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 2)}
              count={spentResources.barracksBooks[element].rank2}
            />
          )}
          {spentResources.barracksBooks[element].rank3 > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 3)}
              count={spentResources.barracksBooks[element].rank3}
            />
          )}
          {spentResources.barracksBooks[element].rank4 > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBarracksBookResourceTypeByElementRank(element, 4)}
              count={spentResources.barracksBooks[element].rank4}
            />
          )}
          {spentTalentBooks[element].rank1 > 0 && (
            <ResourceCount resourceType="talentBook" count={spentTalentBooks[element].rank1} />
          )}
          {spentTalentBooks[element].rank2 > 0 && (
            <ResourceCount resourceType="talentCrown" count={spentTalentBooks[element].rank2} />
          )}
        </Flexbox>
      </Flexbox>
    )
  },
)

export default ResultElement
