import { FC, memo, useMemo } from 'react'
import { Flex, Stack, Table, type TableData } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ItemIcon, ItemWithLabel } from '@entities/item'
import css from './styles.module.sass'


const SeasonsTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        intl.formatMessage({ defaultMessage: 'Сезон' }),
        intl.formatMessage({ defaultMessage: 'Диапазон серверов' }),
        intl.formatMessage({ defaultMessage: 'Награды в СК' }),
        intl.formatMessage({ defaultMessage: 'Питомцы в магазине мифрила' }),
        intl.formatMessage({ defaultMessage: 'Награда за трон ОЭ/БЛ' }),
      ],
      body: [
        [
          38,
          '401-1195',
          <Stack gap="xs">
            <ItemWithLabel itemType={'weaponEqip_t11'} />
            <ItemWithLabel itemType={'weaponEqip_t10'} />
            <ItemWithLabel itemType={'weaponEqip_t8'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t5'} />
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t9'} />
          </Flex>,
        ],
        [
          37,
          '-',
          <Stack gap="xs">
            <ItemWithLabel itemType={'dragonEqip_t10'} />
            <ItemWithLabel itemType={'dragonEqip_t9'} />
            <ItemWithLabel itemType={'dragonEqip_t7'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t5'} />
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t9'} />
          </Flex>,
        ],
        ['-', '-', '-', '-', '-'],
        [
          15,
          '1196-1207, 1209, 1210, 1216-1275',
          <Stack gap="xs">
            <ItemWithLabel itemType={'beast_t7'} />
            <ItemWithLabel itemType={'beast_t6'} />
            <ItemWithLabel itemType={'beast_t4'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t5'} />
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t6'} />
          </Flex>,
        ],
        [
          14,
          '1276-1346',
          <Stack gap="xs">
            <ItemWithLabel itemType={'weaponEqip_t7'} />
            <ItemWithLabel itemType={'weaponEqip_t6'} />
            <ItemWithLabel itemType={'weaponEqip_t4'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t6'} />
          </Flex>,
        ],
        [
          13,
          '1347-1428',
          <Stack gap="xs">
            <ItemWithLabel itemType={'witchGem_t7'} />
            <ItemWithLabel itemType={'witchGem_t6'} />
            <ItemWithLabel itemType={'witchGem_t4'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t6'} />
          </Flex>,
        ],
        [
          12,
          '1429-1490',
          <Stack gap="xs">
            <ItemWithLabel itemType={'dragonEqip_t7'} />
            <ItemWithLabel itemType={'dragonEqip_t6'} />
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t6'} />
          </Flex>,
        ],
        [
          11,
          '1491-1577',
          <Stack gap="xs">
            <ItemWithLabel itemType={'dragonEqip_t7'} />
            <ItemWithLabel itemType={'dragonEqip_t6'} />
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t6'} />
          </Flex>,
        ],
        [
          10,
          '1578-1691',
          <Stack gap="xs">
            <ItemWithLabel itemType={'witchGem_t6'} />
            <ItemWithLabel itemType={'witchGem_t5'} />
            <ItemWithLabel itemType={'witchGem_t3'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t5'} />
          </Flex>,
        ],
        [
          9,
          '1692-1810',
          <Stack gap="xs">
            <ItemWithLabel itemType={'beast_t6'} />
            <ItemWithLabel itemType={'beast_t5'} />
            <ItemWithLabel itemType={'beast_t3'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t4'} />
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t5'} />
          </Flex>,
        ],
        [
          8,
          '1811-1957',
          <Stack gap="xs">
            <ItemWithLabel itemType={'weaponEqip_t6'} />
            <ItemWithLabel itemType={'weaponEqip_t5'} />
            <ItemWithLabel itemType={'weaponEqip_t3'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t5'} />
          </Flex>,
        ],
        [
          7,
          '1958-2019',
          <Stack gap="xs">
            <ItemWithLabel itemType={'witchGem_t6'} />
            <ItemWithLabel itemType={'witchGem_t5'} />
            <ItemWithLabel itemType={'witchGem_t3'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t5'} />
          </Flex>,
        ],
        [
          6,
          '2020-2059',
          <Stack gap="xs">
            <ItemWithLabel itemType={'dragonEqip_t6'} />
            <ItemWithLabel itemType={'dragonEqip_t5'} />
            <ItemWithLabel itemType={'dragonEqip_t3'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t5'} />
          </Flex>,
        ],
        [
          5,
          '2060-2101',
          <Stack gap="xs">
            <ItemWithLabel itemType={'beast_t5'} />
            <ItemWithLabel itemType={'beast_t4'} />
            <ItemWithLabel itemType={'beast_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
        [
          4,
          '2102-2189',
          <Stack gap="xs">
            <ItemWithLabel itemType={'weaponEqip_t5'} />
            <ItemWithLabel itemType={'weaponEqip_t4'} />
            <ItemWithLabel itemType={'weaponEqip_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
        [
          3,
          '2190-2279',
          <Stack gap="xs">
            <ItemWithLabel itemType={'witchGem_t5'} />
            <ItemWithLabel itemType={'witchGem_t4'} />
            <ItemWithLabel itemType={'witchGem_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t3'} />
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
        [
          2,
          '2280-2325',
          <Stack gap="xs">
            <ItemWithLabel itemType={'dragonEqip_t5'} />
            <ItemWithLabel itemType={'dragonEqip_t4'} />
            <ItemWithLabel itemType={'dragonEqip_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
        [
          1,
          '2326-2355',
          <Stack gap="xs">
            <ItemWithLabel itemType={'weaponEqip_t5'} />
            <ItemWithLabel itemType={'weaponEqip_t4'} />
            <ItemWithLabel itemType={'weaponEqip_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t2'} />
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
        [
          1,
          '2356-2375',
          <Stack gap="xs">
            <ItemWithLabel itemType={'witchGem_t5'} />
            <ItemWithLabel itemType={'witchGem_t4'} />
            <ItemWithLabel itemType={'witchGem_t2'} />
          </Stack>,
          <Flex gap="xs">
            <ItemIcon itemType={'beast_t1'} />
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={'dragonEqip_t4'} />
          </Flex>,
        ],
      ],
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default SeasonsTable
