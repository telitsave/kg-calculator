import { FC, memo } from 'react'
import { Alert, Divider, Flex, Grid, GridCol, NumberFormatter, Stack, Text, Title } from '@mantine/core'
import type { SpiritsInvasionShortData } from 'kg-calculator-typings'
import { FormattedMessage, useIntl } from 'react-intl'
import StringHelper from '@shared/helpers/stringHelper'


interface Props {
  data: SpiritsInvasionShortData
}

const ShortResults: FC<Props> = memo(({ data }) => {
  const intl = useIntl()
  return (
    <Grid>
      <GridCol span={12}>
        <Alert color="yellow">
          <Text>
            <FormattedMessage
              defaultMessage="В некоторых случаях были замечены погрешности в мощи 19й волны. В игре мощь 19й волны может быть немного
            больше/меньше, нежели указано в калькуляторе."
            />
          </Text>
        </Alert>
      </GridCol>
      <GridCol span={12}>
        <Title order={4}>
          <FormattedMessage defaultMessage="Уровень " />
          {data.level}
        </Title>
      </GridCol>
      {data.wave1Power === -1 && (
        <GridCol span={12}>
          <Alert color="red">
            <Text>
              <FormattedMessage defaultMessage="Информация по мощи волн для данного уровня отсутствует." />
            </Text>
          </Alert>
        </GridCol>
      )}
      <Flex gap="xl" p="md" wrap="wrap">
        <Stack gap={0}>
          <Title order={5}>
            <FormattedMessage defaultMessage="Мощь волн" />
          </Title>

          <Text>
            <FormattedMessage defaultMessage="1-я волна" />:{' '}
            <Text span fw={700}>
              {StringHelper.getFormatNumber(data.wave1Power, intl)}
            </Text>
          </Text>

          <Text>
            <FormattedMessage defaultMessage="19-я волна" />:{' '}
            <Text span fw={700}>
              {StringHelper.getFormatNumber(data.wave19Power, intl)}
            </Text>
          </Text>

          <Text c="purple">
            <FormattedMessage defaultMessage="7-я элитная волна" />:{' '}
            <Text span fw={700} c="black">
              {StringHelper.getFormatNumber(data.wave7Power, intl)}
            </Text>
          </Text>

          <Text c="purple">
            <FormattedMessage defaultMessage="14-я элитная волна" />:{' '}
            <Text span fw={700} c="black">
              {StringHelper.getFormatNumber(data.wave14Power, intl)}
            </Text>
          </Text>

          <Text c="purple">
            <FormattedMessage defaultMessage="17-я элитная волна" />:{' '}
            <Text span fw={700} c="black">
              {StringHelper.getFormatNumber(data.wave17Power, intl)}
            </Text>
          </Text>

          <Text c="red">
            <FormattedMessage defaultMessage="10-я босс-волна" />:{' '}
            <Text span fw={700} c="black">
              {StringHelper.getFormatNumber(data.wave10Power, intl)}
            </Text>
          </Text>

          <Text c="red">
            <FormattedMessage defaultMessage="20-я босс-волна" />:{' '}
            <Text span fw={700} c="black">
              {StringHelper.getFormatNumber(data.wave20Power, intl)}
            </Text>
          </Text>
        </Stack>
        <Divider orientation="vertical" />
        <Stack gap={0}>
          <Title order={5}>
            <FormattedMessage defaultMessage="Очки" />
          </Title>
          <Flex gap={4}>
            <Text>
              <FormattedMessage defaultMessage="Всего очков:" />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.totalScore} thousandSeparator=" " />
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text>
              <FormattedMessage defaultMessage="Очков за 1 человека (простые волны):" />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.scoreByOneCommon} thousandSeparator=" " />
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text>
              <FormattedMessage defaultMessage="Очков за 1 человека (элитные волны):" />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.scoreByOneElite} thousandSeparator=" " />
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text>
              <FormattedMessage defaultMessage="Всего очков за простые волны:" />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.scoreByCommonWaves} thousandSeparator=" " />
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text>
              <FormattedMessage
                defaultMessage="Всего очков за <Purple>элитные</Purple> волны:"
                values={{
                  Purple: (text) => (
                    <Text span c="purple">
                      {text}
                    </Text>
                  ),
                }}
              />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.scoreByEliteWaves} thousandSeparator=" " />
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text>
              <FormattedMessage
                defaultMessage="Всего очков за <Red>босс</Red> волны:"
                values={{
                  Red: (text) => (
                    <Text span c="red">
                      {text}
                    </Text>
                  ),
                }}
              />
            </Text>
            <Text fw={700}>
              <NumberFormatter value={data.scoreByBossWaves} thousandSeparator=" " />
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Grid>
  )
})

export default ShortResults
