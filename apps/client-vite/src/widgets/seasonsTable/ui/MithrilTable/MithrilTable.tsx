import { FC, memo, useMemo } from 'react'
import { Flex, Table, type TableData, Text } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ResourceIcon } from '@entities/resource'
import { seasonsData } from '../../model/seasonsData'
import css from './styles.module.sass'


const MithrilTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        <Flex justify="center">{intl.formatMessage({ defaultMessage: 'Сезон ОЭ (сезон фактический)' })}</Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="talentsResources_oraclesCrowns" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="talentsResources_books" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="dragonResources_deluxeSoulStone" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="dragonResources_soulStone" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="blacksmithResources_bloodTitan" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="blacksmithResources_elementalVial" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="beastsResources_perfectSummoningSpell" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="beastsResources_advancedSummoningSpell" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="witchResources_purpleWitchPotion" />
        </Flex>,
        <Flex justify="center">
          <ResourceIcon resourceType="witchResources_greenWitchPotion" />
        </Flex>,
      ],
      body: seasonsData.map((s, i) => {
        if (s.season === -1) {
          return ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        }

        let prevS = i < seasonsData.length - 1 ? seasonsData[i + 1] : undefined
        if (prevS?.season === -1) {
          prevS = undefined
        }

        const data = s.coefficientsMithril
        const prevData = prevS?.coefficientsMithril || undefined

        return [
          `${s.season} (${s.season + 1})`,
          <Text bg={!prevData || prevData.oracleCrowns !== data.oracleCrowns ? '#ffec99' : undefined}>
            {(data.oracleCrowns && `x${data.oracleCrowns}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.talentsBooks !== data.talentsBooks ? '#ffec99' : undefined}>
            {(data.talentsBooks && `x${data.talentsBooks}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.deluxeDragonSoul !== data.deluxeDragonSoul ? '#ffec99' : undefined}>
            {(data.deluxeDragonSoul && `x${data.deluxeDragonSoul}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.dragonSoul !== data.dragonSoul ? '#ffec99' : undefined}>
            {(data.dragonSoul && `x${data.dragonSoul}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.titansBlood !== data.titansBlood ? '#ffec99' : undefined}>
            {(data.titansBlood && `x${data.titansBlood}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.elementalVial !== data.elementalVial ? '#ffec99' : undefined}>
            {(data.elementalVial && `x${data.elementalVial}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.perfectSummonSpell !== data.perfectSummonSpell ? '#ffec99' : undefined}>
            {(data.perfectSummonSpell && `x${data.perfectSummonSpell}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.advancedSummonSpell !== data.advancedSummonSpell ? '#ffec99' : undefined}>
            {(data.advancedSummonSpell && `x${data.advancedSummonSpell}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.fortunePotion !== data.fortunePotion ? '#ffec99' : undefined}>
            {(data.fortunePotion && `x${data.fortunePotion}`) || '-'}
          </Text>,
          <Text bg={!prevData || prevData.strengthPotion !== data.strengthPotion ? '#ffec99' : undefined}>
            {(data.strengthPotion && `x${data.strengthPotion}`) || '-'}
          </Text>,
        ]
      }),
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default MithrilTable
