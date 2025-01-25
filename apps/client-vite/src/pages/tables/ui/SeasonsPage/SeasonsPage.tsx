import { FC, memo } from 'react'
import { Divider, Stack, Title } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { ExchangeShopTable, MithrilTable, SeasonsTable } from '@widgets/seasonsTable'


const SeasonsPage: FC = memo(() => {
  return (
    <Stack gap="md">
      <Title order={3}>
        <FormattedMessage defaultMessage="Награды по сезонам" />
      </Title>
      <SeasonsTable />
      <Divider />
      <Title order={3}>
        <FormattedMessage defaultMessage="Коэффициенты в магазине мифрила" />
      </Title>
      <MithrilTable />
      <Divider />
      <Title order={3}>
        <FormattedMessage defaultMessage="Коэффициенты в магазине обмена" />
      </Title>
      <ExchangeShopTable />
    </Stack>
  )
})

export default SeasonsPage
