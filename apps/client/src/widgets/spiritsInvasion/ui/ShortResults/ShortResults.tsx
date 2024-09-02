import { FC, memo } from 'react'
import { Flex, Grid, GridCol, NumberFormatter, Text, Title } from '@mantine/core'
import type { SpiritsInvasionShortData } from 'kg-calculator-typings'
import StringHelper from 'shared/helpers/stringHelper'

interface Props {
  data: SpiritsInvasionShortData
}

const ShortResults: FC<Props> = memo(({ data }) => (
  <Grid>
    <GridCol span={12}>
      <Title order={4}>Уровень {data.level}</Title>
    </GridCol>
    <GridCol span={{ md: 6, xs: 12 }}>
      <Title order={5}>Мощь волн</Title>

      <Text>
        1-я волна:{' '}
        <Text span fw={700}>
          {StringHelper.getFormatNumber(data.wave1Power)}
        </Text>
      </Text>

      <Text>
        19-я волна:{' '}
        <Text span fw={700}>
          {StringHelper.getFormatNumber(data.wave19Power)}
        </Text>
      </Text>

      <Text c="purple">
        7-я элитная волна:{' '}
        <Text span fw={700} c="black">
          {StringHelper.getFormatNumber(data.wave7Power)}
        </Text>
      </Text>

      <Text c="purple">
        14-я элитная волна:{' '}
        <Text span fw={700} c="black">
          {StringHelper.getFormatNumber(data.wave14Power)}
        </Text>
      </Text>

      <Text c="purple">
        17-я элитная волна:{' '}
        <Text span fw={700} c="black">
          {StringHelper.getFormatNumber(data.wave17Power)}
        </Text>
      </Text>

      <Text c="red">
        10-я босс-волна:{' '}
        <Text span fw={700} c="black">
          {StringHelper.getFormatNumber(data.wave10Power)}
        </Text>
      </Text>

      <Text c="red">
        20-я босс-волна:{' '}
        <Text span fw={700} c="black">
          {StringHelper.getFormatNumber(data.wave20Power)}
        </Text>
      </Text>
    </GridCol>
    <GridCol span={{ md: 6, xs: 12 }}>
      <Title order={5}>Очки</Title>
      <Flex gap={4}>
        <Text>Всего очков:</Text>
        <Text fw={700}>
          <NumberFormatter value={data.totalScore} thousandSeparator=" " />
        </Text>
      </Flex>
      <Flex gap={4}>
        <Text>Очков за 1 человека:</Text>
        <Text fw={700}>
          <NumberFormatter value={data.scoreByOne} thousandSeparator=" " />
        </Text>
      </Flex>
      <Flex gap={4}>
        <Text>Всего очков за простые волны:</Text>
        <Text fw={700}>
          <NumberFormatter value={data.scoreByCommonWaves} thousandSeparator=" " />
        </Text>
      </Flex>
      <Flex gap={4}>
        <Text>
          Всего очков за{' '}
          <Text span c="purple">
            элитные
          </Text>{' '}
          волны:
        </Text>
        <Text fw={700}>
          <NumberFormatter value={data.scoreByEliteWaves} thousandSeparator=" " />
        </Text>
      </Flex>
      <Flex gap={4}>
        <Text>
          Всего очков за{' '}
          <Text span c="red">
            босс
          </Text>{' '}
          волны:
        </Text>
        <Text fw={700}>
          <NumberFormatter value={data.scoreByBossWaves} thousandSeparator=" " />
        </Text>
      </Flex>
    </GridCol>
  </Grid>
))

export default ShortResults
