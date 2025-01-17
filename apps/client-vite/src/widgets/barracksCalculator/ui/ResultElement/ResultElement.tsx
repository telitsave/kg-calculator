import { FC, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import type { ElementsType, Parameters, Resources } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { BarracksElementalInfo, BarracksTalentsInfo } from '@entities/parameter'
import { KeysHelper, ResourceCount, ResourcesConverts } from '@entities/resource'
import { useServerSettings } from '@entities/serverSettings'
import Flexbox from '@shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
  element: ElementsType
  oldParams: Parameters
  params: Parameters
  oldTalentParams: Record<string, number>
  talentParams: Record<string, number>
  spentResources: Resources
  randomBooksUsed: Resources
  convertBooksForBarracks: Resources
  convertTalentBooks: Resources
  spentTalentBooks: Resources
}

const ResultElement: FC<Props> = memo(
  ({
    element,
    oldParams,
    params,
    oldTalentParams,
    talentParams,
    spentResources,
    randomBooksUsed,
    convertBooksForBarracks,
    convertTalentBooks,
    spentTalentBooks,
  }) => {
    const { serverSettings } = useServerSettings()
    const {
      talentBooks_rank1 = 3,
      talentBooks_rank2 = 15,
      talentBooks_rank3 = 72,
      talentBooks_rank4 = 358,
    } = serverSettings

    return (
      <Flexbox flexDirection="column" gap={16}>
        <BarracksElementalInfo element={element} oldParams={oldParams} newParams={params} />
        <Divider size="sm" />
        <Title order={5}>
          <FormattedMessage defaultMessage="Параметры талантов" />
        </Title>
        <BarracksTalentsInfo
          element={element}
          oldTalentParams={oldTalentParams}
          newTalentParams={talentParams}
          maxRank={serverSettings?.talentsMaxRank || 1}
        />
        <Divider size="sm" />
        <Title order={5}>
          <FormattedMessage defaultMessage="Конвертации ресурсов" />
        </Title>
        <Flexbox className={css.converts} flexDirection="column" gap={4}>
          {(randomBooksUsed[KeysHelper.getBaracksKey(element, 1)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType="barracksResources_random"
              targetResourceType={KeysHelper.getBaracksKey(element, 1)}
              sourceValue={randomBooksUsed[KeysHelper.getBaracksKey(element, 1)]}
              targetValue={randomBooksUsed[KeysHelper.getBaracksKey(element, 1)]}
            />
          )}
          {(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 1)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 1)}
              targetResourceType={KeysHelper.getBaracksKey(element, 2)}
              sourceValue={convertBooksForBarracks[KeysHelper.getBaracksKey(element, 1)]}
              targetValue={(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 1)] || 0) / 5}
            />
          )}
          {(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 2)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 2)}
              targetResourceType={KeysHelper.getBaracksKey(element, 3)}
              sourceValue={convertBooksForBarracks[KeysHelper.getBaracksKey(element, 2)]}
              targetValue={(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 2)] || 0) / 5}
            />
          )}
          {(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 3)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 3)}
              targetResourceType={KeysHelper.getBaracksKey(element, 4)}
              sourceValue={convertBooksForBarracks[KeysHelper.getBaracksKey(element, 3)]}
              targetValue={(convertBooksForBarracks[KeysHelper.getBaracksKey(element, 3)] || 0) / 5}
            />
          )}
          {(convertTalentBooks[KeysHelper.getBaracksKey(element, 1)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 1)}
              targetResourceType="talentsResources_books"
              sourceValue={convertTalentBooks[KeysHelper.getBaracksKey(element, 1)]}
              targetValue={(convertTalentBooks[KeysHelper.getBaracksKey(element, 1)] || 0) * talentBooks_rank1}
            />
          )}
          {(convertTalentBooks[KeysHelper.getBaracksKey(element, 2)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 2)}
              targetResourceType="talentsResources_books"
              sourceValue={convertTalentBooks[KeysHelper.getBaracksKey(element, 2)]}
              targetValue={(convertTalentBooks[KeysHelper.getBaracksKey(element, 2)] || 0) * talentBooks_rank2}
            />
          )}
          {(convertTalentBooks[KeysHelper.getBaracksKey(element, 3)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 3)}
              targetResourceType="talentsResources_books"
              sourceValue={convertTalentBooks[KeysHelper.getBaracksKey(element, 3)]}
              targetValue={(convertTalentBooks[KeysHelper.getBaracksKey(element, 3)] || 0) * talentBooks_rank3}
            />
          )}
          {(convertTalentBooks[KeysHelper.getBaracksKey(element, 4)] || 0) > 0 && (
            <ResourcesConverts
              sourceResourceType={KeysHelper.getBaracksKey(element, 4)}
              targetResourceType="talentsResources_books"
              sourceValue={convertTalentBooks[KeysHelper.getBaracksKey(element, 4)]}
              targetValue={(convertTalentBooks[KeysHelper.getBaracksKey(element, 4)] || 0) * talentBooks_rank4}
            />
          )}
        </Flexbox>
        <Divider size="sm" />
        <Title order={5}>
          <FormattedMessage defaultMessage="Потрачено ресурсов" />
        </Title>
        <Flexbox gap={16} flexWrap="wrap">
          {(spentResources[KeysHelper.getBaracksKey(element, 1)] || 0) > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBaracksKey(element, 1)}
              count={spentResources[KeysHelper.getBaracksKey(element, 1)]}
            />
          )}
          {(spentResources[KeysHelper.getBaracksKey(element, 2)] || 0) > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBaracksKey(element, 2)}
              count={spentResources[KeysHelper.getBaracksKey(element, 2)]}
            />
          )}
          {(spentResources[KeysHelper.getBaracksKey(element, 3)] || 0) > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBaracksKey(element, 3)}
              count={spentResources[KeysHelper.getBaracksKey(element, 3)]}
            />
          )}
          {(spentResources[KeysHelper.getBaracksKey(element, 4)] || 0) > 0 && (
            <ResourceCount
              resourceType={KeysHelper.getBaracksKey(element, 4)}
              count={spentResources[KeysHelper.getBaracksKey(element, 4)]}
            />
          )}
          {(spentTalentBooks[KeysHelper.getBaracksKey(element, 1)] || 0) > 0 && (
            <ResourceCount
              resourceType="talentsResources_books"
              count={spentTalentBooks[KeysHelper.getBaracksKey(element, 1)]}
            />
          )}
          {(spentTalentBooks[KeysHelper.getBaracksKey(element, 2)] || 0) > 0 && (
            <ResourceCount
              resourceType="talentsResources_oraclesCrowns"
              count={spentTalentBooks[KeysHelper.getBaracksKey(element, 2)]}
            />
          )}
        </Flexbox>
      </Flexbox>
    )
  },
)

export default ResultElement
