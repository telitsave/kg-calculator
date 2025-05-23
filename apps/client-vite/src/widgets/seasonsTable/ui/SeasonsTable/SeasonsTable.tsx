import { FC, memo, useMemo } from 'react'
import { Flex, Stack, Table, type TableData } from '@mantine/core'
import { useIntl } from 'react-intl'
import { ItemIcon, ItemWithLabel } from '@entities/item'
import { seasonsData } from '../../model/seasonsData'
import css from './styles.module.sass'


const SeasonsTable: FC = memo(() => {
  const intl = useIntl()
  const tableData: TableData = useMemo(
    () => ({
      head: [
        intl.formatMessage({ defaultMessage: 'Сезон ОЭ' }),
        intl.formatMessage({ defaultMessage: 'Награды в СК' }),
        intl.formatMessage({ defaultMessage: 'Питомцы в магазине мифрила' }),
        intl.formatMessage({ defaultMessage: 'Награда за трон ОЭ/БЛ' }),
      ],
      body: seasonsData.map((season) => {
        if (season.season === -1) return ['-', '-', '-', '-']

        return [
          `${season.season}`,
          <Stack gap="xs">
            {season.rewardsMK.map((it) => (
              <ItemWithLabel key={it} itemType={it} />
            ))}
          </Stack>,
          <Flex gap="xs">
            {season.beastsMithril.map((it) => (
              <ItemIcon key={it} itemType={it} />
            ))}
          </Flex>,
          <Flex>
            <ItemWithLabel itemType={season.rewardBL} />
          </Flex>,
        ]
      }),
    }),
    [intl],
  )
  return <Table className={css.table} data={tableData} striped />
})

export default SeasonsTable
