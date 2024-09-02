import { FC, memo } from 'react'
import { Flex, Tabs } from '@mantine/core'
import { ResourceInput } from 'entities/resource'
import { CardDistributionPanel } from 'widgets/heroesCalculator'
import { HeroesGrid } from 'widgets/heroesGrid'

interface Props {
  className?: string
}

const HeroesPage: FC<Props> = memo(({ className }) => (
  <Tabs className={className} maw={600} defaultValue="heroes" variant="outline">
    <Tabs.List>
      <Tabs.Tab value="heroes">Настройки героев</Tabs.Tab>
      <Tabs.Tab value="cards">Настройки карт самовыбора</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="heroes">
      <HeroesGrid />
    </Tabs.Panel>
    <Tabs.Panel value="cards">
      <Flex mt={8} direction="column" gap={8}>
        <ResourceInput resourceType="heroGoldCards" />
        <CardDistributionPanel />
      </Flex>
    </Tabs.Panel>
  </Tabs>
))

export default HeroesPage
