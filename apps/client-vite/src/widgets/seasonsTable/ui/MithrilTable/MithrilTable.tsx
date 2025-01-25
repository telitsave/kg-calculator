import { FC, memo, useMemo } from 'react'
import { Flex, Table, type TableData, Text } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ResourceIcon } from '@entities/resource'
import css from './styles.module.sass'


const MithrilTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        <Flex justify="center">{intl.formatMessage({ defaultMessage: 'Сезон' })}</Flex>,
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
      body: [
        [
          37,
          <Text bg="#ffec99">x31250</Text>,
          <Text bg="#ffec99">x31250</Text>,
          <Text bg="#ffec99">x6250</Text>,
          <Text bg="#ffec99">x6250</Text>,
          <Text bg="#ffec99">x15625</Text>,
          <Text bg="#ffec99">x15625</Text>,
          <Text>x625</Text>,
          <Text>x625</Text>,
          <Text>x15625</Text>,
          <Text>x17858</Text>,
        ],
        [
          36,
          <Text>x15625</Text>,
          <Text>x15625</Text>,
          <Text>x3125</Text>,
          <Text>x3125</Text>,
          <Text>x6250</Text>,
          <Text>x6250</Text>,
          <Text bg="#ffec99">x625</Text>,
          <Text bg="#ffec99">x625</Text>,
          <Text bg="#ffec99">x15625</Text>,
          <Text bg="#ffec99">x17858</Text>,
        ],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        [
          14,
          <Text bg="#ffec99">x50</Text>,
          <Text>x50</Text>,
          <Text bg="#ffec99">x50</Text>,
          <Text bg="#ffec99">x50</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text>x25</Text>,
          <Text>x29</Text>,
        ],
        [
          13,
          <Text bg="#ffec99">x50</Text>,
          <Text bg="#ffec99">x50</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text>x10</Text>,
          <Text>x10</Text>,
          <Text>x25</Text>,
          <Text>x29</Text>,
        ],
        [
          12,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text>x10</Text>,
          <Text>x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x29</Text>,
        ],
        [
          11,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x10</Text>,
          <Text>x12</Text>,
        ],
        [
          10,
          <Text>x25</Text>,
          <Text>x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x12</Text>,
        ],
        [
          9,
          <Text bg="#ffec99">x25</Text>,
          <Text bg="#ffec99">x25</Text>,
          <Text>x10</Text>,
          <Text>x10</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x6</Text>,
        ],
        [
          8,
          <Text>x10</Text>,
          <Text>x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text>x5</Text>,
          <Text>x6</Text>,
        ],
        [
          7,
          <Text bg="#ffec99">x10</Text>,
          <Text bg="#ffec99">x10</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text>x2</Text>,
          <Text>x2</Text>,
          <Text>x5</Text>,
          <Text>x6</Text>,
        ],
        [
          6,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x2</Text>,
          <Text>x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x6</Text>,
        ],
        [
          5,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>x2</Text>,
          <Text>x3</Text>,
        ],
        [
          4,
          <Text>x5</Text>,
          <Text>x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x3</Text>,
        ],
        [
          3,
          <Text bg="#ffec99">x5</Text>,
          <Text bg="#ffec99">x5</Text>,
          <Text>x2</Text>,
          <Text>x2</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>x2</Text>,
        ],
        [
          2,
          <Text>x2</Text>,
          <Text>x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>x2</Text>,
        ],
        [
          1,
          <Text bg="#ffec99">x2</Text>,
          <Text bg="#ffec99">x2</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text>0</Text>,
          <Text bg="#ffec99">x2</Text>,
        ],
      ],
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default MithrilTable
