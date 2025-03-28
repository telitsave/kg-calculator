import { FC, memo, useMemo } from 'react'
import { Flex, Table, type TableData, Text } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ResourceIcon } from '@entities/resource'
import { seasonsData } from '../../model/seasonsData'
import css from './styles.module.sass'


const ExchangeShopTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        <Flex justify="center">{intl.formatMessage({ defaultMessage: 'Сезон ОЭ' })}</Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="barracksResources_bow_1" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="talentsResources_books" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="barracksResources_bow_2" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="talentsResources_books" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="barracksResources_bow_3" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="talentsResources_books" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="barracksResources_bow_4" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="talentsResources_books" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="dragonResources_green" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="dragonResources_soulStone" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="dragonResources_blue" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="dragonResources_soulStone" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="dragonResources_purple" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="dragonResources_soulStone" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="dragonResources_gold" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="dragonResources_soulStone" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="blacksmithResources_hammers" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="blacksmithResources_elementalVial" />
        </Flex>,
        <Flex justify="center" align="center" gap="xs">
          <ResourceIcon resourceType="witchResources_lightReagents" />
          <Text size="xl">&#8594;</Text>
          <ResourceIcon resourceType="witchResources_greenWitchPotion" />
        </Flex>,
      ],
      body: seasonsData
        .filter((it) => it.season >= 4)
        .map((s, i, arr) => {
          if (s.season === -1) {
            return ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
          }

          let prevS = i < arr.length - 1 ? arr[i + 1] : undefined
          if (prevS?.season === -1) {
            prevS = undefined
          }

          const data = s.coefficientsExchangeShop
          const prevData = prevS?.coefficientsExchangeShop || undefined

          return [
            `${s.season}`,
            <Text bg={!prevData || prevData.t1Barracks !== data.t1Barracks ? '#ffec99' : undefined}>
              {(data.t1Barracks && `x${data.t1Barracks}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.t2Barracks !== data.t2Barracks ? '#ffec99' : undefined}>
              {(data.t2Barracks && `x${data.t2Barracks}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.t3Barracks !== data.t3Barracks ? '#ffec99' : undefined}>
              {(data.t3Barracks && `x${data.t3Barracks}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.t4Barracks !== data.t4Barracks ? '#ffec99' : undefined}>
              {(data.t4Barracks && `x${data.t4Barracks}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.greenRune !== data.greenRune ? '#ffec99' : undefined}>
              {(data.greenRune && `x${data.greenRune}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.blueRune !== data.blueRune ? '#ffec99' : undefined}>
              {(data.blueRune && `x${data.blueRune}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.purpleRune !== data.purpleRune ? '#ffec99' : undefined}>
              {(data.purpleRune && `x${data.purpleRune}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.goldRune !== data.goldRune ? '#ffec99' : undefined}>
              {(data.goldRune && `x${data.goldRune}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.hammers !== data.hammers ? '#ffec99' : undefined}>
              {(data.hammers && `x${data.hammers}`) || '-'}
            </Text>,
            <Text bg={!prevData || prevData.lightReagent !== data.lightReagent ? '#ffec99' : undefined}>
              {(data.lightReagent && `x${data.lightReagent}`) || '-'}
            </Text>,
          ]
        }),
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default ExchangeShopTable
