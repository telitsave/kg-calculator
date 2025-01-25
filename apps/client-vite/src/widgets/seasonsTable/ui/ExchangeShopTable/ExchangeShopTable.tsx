import { FC, memo, useMemo } from 'react'
import { Flex, Table, type TableData, Text } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ResourceIcon } from '@entities/resource'
import css from './styles.module.sass'


const ExchangeShopTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        <Flex justify="center">{intl.formatMessage({ defaultMessage: 'Сезон' })}</Flex>,
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
      body: [
        [
          37,
          <Text bg="#ffec99">x17858</Text>,
          <Text bg="#ffec99">x89286</Text>,
          <Text bg="#ffec99">x446429</Text>,
          <Text bg="#ffec99">x2232143</Text>,
          <Text bg="#ffec99">x313</Text>,
          <Text bg="#ffec99">x3125</Text>,
          <Text bg="#ffec99">x31250</Text>,
          <Text bg="#ffec99">x62500</Text>,
          <Text bg="#ffec99">x1117</Text>,
          <Text>x1563</Text>,
        ],
        [
          36,
          <Text>x8929</Text>,
          <Text>x44643</Text>,
          <Text>x223215</Text>,
          <Text>x1116072</Text>,
          <Text>x157</Text>,
          <Text>x1563</Text>,
          <Text>x15625</Text>,
          <Text>x31250</Text>,
          <Text>x447</Text>,
          <Text bg="#ffec99">x1563</Text>,
        ],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        [
          14,
          <Text>x29</Text>,
          <Text>-</Text>,
          <Text>-</Text>,
          <Text>-</Text>,
          <Text bg="#ffec99">x3</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x250</Text>,
          <Text bg="#ffec99">x500</Text>,
          <Text>-</Text>,
          <Text>x3</Text>,
        ],
        [
          13,
          <Text bg="#ffec99">x29</Text>,
          <Text bg="#ffec99">x143</Text>,
          <Text bg="#ffec99">x715</Text>,
          <Text bg="#ffec99">x3572</Text>,
          <Text>x2</Text>,
          <Text>x13</Text>,
          <Text>x125</Text>,
          <Text>x250</Text>,
          <Text>-</Text>,
          <Text>x3</Text>,
        ],
        [
          12,
          <Text>x15</Text>,
          <Text>x72</Text>,
          <Text>x358</Text>,
          <Text>x1786</Text>,
          <Text>x2</Text>,
          <Text>x13</Text>,
          <Text>x125</Text>,
          <Text>x250</Text>,
          <Text>-</Text>,
          <Text bg="#ffec99">x3</Text>,
        ],
        [
          11,
          <Text>x15</Text>,
          <Text>x72</Text>,
          <Text>x358</Text>,
          <Text>x1786</Text>,
          <Text>x2</Text>,
          <Text>x13</Text>,
          <Text>x125</Text>,
          <Text>x250</Text>,
          <Text>-</Text>,
          <Text>x1</Text>,
        ],
        [
          10,
          <Text>x15</Text>,
          <Text>x72</Text>,
          <Text>x358</Text>,
          <Text>x1786</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x13</Text>,
          <Text bg="#ffec99">x125</Text>,
          <Text bg="#ffec99">x250</Text>,
          <Text>-</Text>,
          <Text>x1</Text>,
        ],
        [
          9,
          <Text bg="#ffec99">x15</Text>,
          <Text bg="#ffec99">x72</Text>,
          <Text bg="#ffec99">x358</Text>,
          <Text bg="#ffec99">x1786</Text>,
          <Text>x1</Text>,
          <Text>x5</Text>,
          <Text>x50</Text>,
          <Text>x100</Text>,
          <Text>-</Text>,
          <Text>x1</Text>,
        ],
        [
          8,
          <Text>x6</Text>,
          <Text>x29</Text>,
          <Text>x146</Text>,
          <Text>x715</Text>,
          <Text>x1</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x50</Text>,
          <Text bg="#ffec99">x100</Text>,
          <Text>-</Text>,
          <Text>x1</Text>,
        ],
        [
          7,
          <Text bg="#ffec99">x6</Text>,
          <Text bg="#ffec99">x29</Text>,
          <Text bg="#ffec99">x146</Text>,
          <Text bg="#ffec99">x715</Text>,
          <Text>x1</Text>,
          <Text>x3</Text>,
          <Text>x25</Text>,
          <Text>x50</Text>,
          <Text>-</Text>,
          <Text>x1</Text>,
        ],
        [
          6,
          <Text>x3</Text>,
          <Text>x15</Text>,
          <Text>x72</Text>,
          <Text>x358</Text>,
          <Text>x1</Text>,
          <Text>x3</Text>,
          <Text>x25</Text>,
          <Text>x50</Text>,
          <Text>-</Text>,
          <Text bg="#ffec99">x1</Text>,
        ],
        [
          5,
          <Text>x3</Text>,
          <Text>x15</Text>,
          <Text>x72</Text>,
          <Text>x358</Text>,
          <Text>x1</Text>,
          <Text>x3</Text>,
          <Text>x25</Text>,
          <Text>x50</Text>,
          <Text>-</Text>,
          <Text>-</Text>,
        ],
        [
          4,
          <Text bg="#ffec99">x3</Text>,
          <Text bg="#ffec99">x15</Text>,
          <Text bg="#ffec99">x72</Text>,
          <Text bg="#ffec99">x358</Text>,
          <Text bg="#ffec99">x1</Text>,
          <Text bg="#ffec99">x3</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x50</Text>,
          <Text>-</Text>,
          <Text>-</Text>,
        ],
      ],
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default ExchangeShopTable
