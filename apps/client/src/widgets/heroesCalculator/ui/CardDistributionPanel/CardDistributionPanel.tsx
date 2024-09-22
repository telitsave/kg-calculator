import { FC, memo, useMemo, useState } from 'react'
import { Accordion, Alert, Button, Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import type { Hero } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { FaStar } from 'react-icons/fa'
import { useServerSettings } from 'entities/serverSettings'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import CardDistribution from '../CardDistribution'


interface Props {
  className?: string
}

const CardDistributionPanel: FC<Props> = memo(({ className }) => {
  const isMobile = useMediaQuery('(max-width: 50em)')
  const [sortField] = useState<keyof Hero>('rank')
  const { heroes, leftCards, fillStars, fillMaxScores, onSetCards, onReset } = useHeroesDistributionModel()
  const {
    serverSettings: { season },
  } = useServerSettings()

  const sortedHeroes = useMemo(() => {
    if (!heroes) return []
    return orderBy(heroes, [(hero) => hero[sortField], (hero) => hero.season], ['desc', 'asc'])
  }, [heroes, season, sortField])

  if (!heroes) return null

  return (
    <Flex className={className} direction="column" gap={8}>
      <Accordion variant="contained">
        <Accordion.Item key="alert" value="alert">
          <Accordion.Control>Как это работает?</Accordion.Control>
          <Accordion.Panel>
            <Alert>
              <Text>На данной странице вы можете распределить карты самовыбора между героями.</Text>
              <Text>Для удобства, есть три кнопки: MAX очки, MAX звезды и Сбросить</Text>
              <br />
              <Text>
                Кнопка{' '}
                <Text component="span" fw={700}>
                  MAX очки
                </Text>{' '}
                автоматически распределит карты самовыбора так, чтобы "выжать" из ваших героев максимум, и набрать
                наиболее возможное количество очков на событиях Сильнейшее королевство/Экстремальная мощь. Проще говоря
                - использует максимально возможное количество карт.
              </Text>
              <Text>
                Если у вас много карт самовыбора, эта кнопка потратит их не все. Она распределит карты там, где нужно,
                для "максимальной выжимки", а оставшиеся карты вы можете распределить сами на своё усмотрение. Разницы в
                очках уже не будет.
              </Text>
              <br />
              <Text>
                Кнопка{' '}
                <Text component="span" fw={700}>
                  MAX звезды
                </Text>{' '}
                автоматически распределит карты самовыбора так, чтобы прокачать как можно больше звезд вашим героям.
                Кнопка остановится, когда больше нельзя будет поднять никому новую звезду с оставшимся количеством карт
                самовыбора.
              </Text>
              <br />
              <Text>
                Кнопка{' '}
                <Text component="span" fw={700}>
                  Сбросить
                </Text>{' '}
                произведет полный сброс распределения карт самовыбора.
              </Text>
              <br />
              <Text>
                Вы можете "комбинировать" эти кнопки, нажимая сначала одну, потом вторую, в любом порядке. А можно
                использовать только одну из, и оставшиеся карты самовыбора распределять самостоятельно, на ваше
                усмотрение.
              </Text>
            </Alert>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Flex
        justify="space-between"
        align="center"
        pos="sticky"
        top={isMobile ? 45 : 60}
        bg="white"
        pt="sm"
        pb="sm"
        style={{
          zIndex: 5,
        }}
      >
        <Text>
          Карт осталось:{' '}
          <Text component={isMobile ? 'p' : 'span'} fw={700}>
            {leftCards}
          </Text>
        </Text>
        <Flex align="center" gap="xs">
          <Button variant="default" onClick={fillMaxScores} size="xs">
            MAX очки
          </Button>
          <Button
            variant="default"
            onClick={fillStars}
            rightSection={<FaStar color="var(--mantine-color-yellow-filled)" />}
            size="xs"
          >
            MAX
          </Button>
          <Button variant="default" onClick={onReset} size="xs">
            Сбросить
          </Button>
        </Flex>
      </Flex>
      {sortedHeroes.map((hero) => (
        <CardDistribution
          key={hero.heroId}
          heroId={hero.heroId}
          stars={hero.stars || 0}
          bars={hero.bars || 0}
          cards={hero.cards || 0}
          distributionCards={hero.distributionCards || 0}
          rank={hero.rank}
          name={hero.name}
          element={hero.element}
          onSetCards={onSetCards}
        />
      ))}
    </Flex>
  )
})

export default CardDistributionPanel
