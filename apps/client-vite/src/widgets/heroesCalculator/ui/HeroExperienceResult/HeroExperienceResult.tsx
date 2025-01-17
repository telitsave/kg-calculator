import { FC, memo } from 'react'
import { Flex, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { HeroIcon } from '@entities/hero'
import { KeysHelper, ResourceIcon } from '@entities/resource'
import { useLocaleContext } from '@features/setLocale'


interface Props {
  className?: string
  hero: Hero
  spentCards: number
}

const HeroExperienceResult: FC<Props> = memo(({ className, hero, spentCards }) => {
  const { locale } = useLocaleContext()
  const heroName = locale === 'en' && hero.nameEn ? hero.nameEn : hero.name
  return (
    <Flex className={className} gap={16} align="center">
      <Flex direction="column" align="center" w={100} gap={4}>
        <HeroIcon heroId={hero.heroId} element={hero.element} />
        <Text size="sm">{heroName}</Text>
      </Flex>
      <Flex direction="column">
        <Flex gap={4} align="center">
          <ResourceIcon resourceType={KeysHelper.getHeroCardsByRank(hero.rank)} />
          <Text>
            <FormattedMessage defaultMessage="Потрачено:" /> {spentCards}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default HeroExperienceResult
