import { FC, ReactNode, memo, useMemo } from 'react'
import { Accordion, Divider, Flex, Text, Title } from '@mantine/core'
import type { CalculateHeroesResponse } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { FaStar } from 'react-icons/fa'
import { ResourceIcon } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import HeroExperienceResult from '../HeroExperienceResult'
import HeroResult from '../HeroResult'
import css from './styles.module.sass'

interface Props {
  className?: string
  results: CalculateHeroesResponse
  extremePowerNode?: ReactNode
  mightiestKingdomNode?: ReactNode
}

const Results: FC<Props> = memo(({ className, results, extremePowerNode, mightiestKingdomNode }) => {
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
    <Flexbox className={className} flexDirection="column" gap={16}>
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
          <ResourceIcon resourceType="heroGreenCards" />
          <Text>Потрачено всего: {results.spentResources.heroesCards.n || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroBlueCards" />
          <Text>Потрачено всего: {results.spentResources.heroesCards.r || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroPurpleCards" />
          <Text>Потрачено всего: {results.spentResources.heroesCards.sr || 0}</Text>
        </Flex>
        <Flex gap={4} align="center">
          <ResourceIcon resourceType="heroGoldCards" />
          <Text>Потрачено всего: {results.spentResources.heroesCards.ssr || 0}</Text>
        </Flex>

        {(results.spentDistributionCards && (
          <Flex gap={4} align="center">
            <ResourceIcon resourceType="heroGoldCards" />
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
      {mightiestKingdomNode}

      <Divider />

      {extremePowerNode}
    </Flexbox>
  )
})

export default Results
