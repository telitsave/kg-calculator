import { FC, memo, useMemo } from 'react'
import { Accordion, Divider, Flex, Text, Title } from '@mantine/core'
import type {
  CalculateHeroesResponse,
  CalculateMightiestKingdomResponse,
  CalculateUltimatePowerResponse,
} from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { FaStar } from 'react-icons/fa'
import { MightiestKingdomStatistics } from 'entities/mightiestKingdom'
import { ResourceIcon } from 'entities/resource'
import { UltimatePowerStatistics } from 'entities/ultimatePower'
import HeroExperienceResult from '../HeroExperienceResult'
import HeroResult from '../HeroResult'
import css from './styles.module.sass'


interface Props {
  className?: string
  results: CalculateHeroesResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mightiestKingdomData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(({ className, results, ultimatePowerData, mightiestKingdomData }) => {
  const sortedHeroes = useMemo(
    () => orderBy(results.heroesUpgrades, ({ spentCards }) => spentCards, 'desc'),
    [results.heroesUpgrades],
  )
  const sortedExperienceHeroes = useMemo(
    () =>
      orderBy(
        results.heroesExperienceSpent,
        [({ hero }) => hero.rank, ({ spentCards }) => spentCards],
        ['desc', 'desc'],
      ),
    [results.heroesExperienceSpent],
  )
  return (
    <Flex className={className} direction="column" gap={16}>
      <Title order={4}>Результаты</Title>

      {(sortedHeroes.length > 0 || sortedExperienceHeroes.length > 0) && (
        <Accordion defaultValue="heroes" variant="contained">
          {sortedHeroes.length > 0 && (
            <Accordion.Item value="heroes">
              <Accordion.Control>Прокачка героев</Accordion.Control>
              <Accordion.Panel>
                <Flex direction="column" gap={8}>
                  {sortedHeroes.map((hero) => (
                    <HeroResult
                      key={hero.hero.heroId}
                      hero={hero.hero}
                      maxStars={hero.maxStars}
                      maxBars={hero.maxBars}
                      oldStars={hero.oldStars}
                      newStars={hero.newStars}
                      oldBars={hero.oldBars}
                      newBars={hero.newBars}
                      spentCards={hero.spentCards}
                      spentGoldCards={hero.spentDistributionCards}
                    />
                  ))}
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          )}
          {sortedExperienceHeroes.length > 0 && (
            <Accordion.Item value="experience">
              <Accordion.Control>Потрачено на опыт</Accordion.Control>
              <Accordion.Panel>
                <Flex direction="column" gap={8}>
                  {sortedExperienceHeroes.map((hero) => (
                    <HeroExperienceResult key={hero.hero.heroId} hero={hero.hero} spentCards={hero.spentCards} />
                  ))}
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          )}
        </Accordion>
      )}

      {(sortedHeroes.length > 0 || sortedExperienceHeroes.length > 0) && <Divider />}
      <Flex direction="column" gap={8}>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroesResources_n" />
          <Text>Потрачено всего: {results.spentResources.heroesResources_n || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroesResources_r" />
          <Text>Потрачено всего: {results.spentResources.heroesResources_r || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroesResources_sr" />
          <Text>Потрачено всего: {results.spentResources.heroesResources_sr || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroesResources_ssr" />
          <Text>Потрачено всего: {results.spentResources.heroesResources_ssr || 0}</Text>
        </Flex>

        {(results.spentDistributionCards && (
          <Flex gap={4} align="center">
            <ResourceIcon resourceType="heroesResources_ssr" />
            <Text>Потрачено самовыбора: {results.spentDistributionCards || 0}</Text>
          </Flex>
        )) ||
          null}

        {(results.gettingStars && (
          <Flex gap={4} align="center">
            <FaStar className={css.starIcon} color="var(--mantine-color-yellow-filled)" />
            <Text>Прокачано: {results.gettingStars}</Text>
          </Flex>
        )) ||
          null}
      </Flex>
      <Divider />

      <MightiestKingdomStatistics data={mightiestKingdomData} />

      <Divider />

      <UltimatePowerStatistics data={ultimatePowerData} />
    </Flex>
  )
})

export default Results
