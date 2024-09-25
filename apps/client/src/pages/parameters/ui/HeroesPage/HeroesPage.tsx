import { FC, memo, useState } from 'react'
import { Flex, Tabs } from '@mantine/core'
import { ResourceInput } from 'entities/resource'
import { CardDistributionPanel } from 'widgets/heroesCalculator'
import { HeroesGrid } from 'widgets/heroesGrid'
import { HeroesTable } from 'widgets/heroesTable'


interface Props {
  className?: string
}

const HeroesPage: FC<Props> = memo(({ className }) => {
  const [value, setValue] = useState<string | null>('heroes')
  return (
    <Tabs
      className={className}
      maw={value !== 'table' ? 600 : undefined}
      value={value}
      variant="outline"
      onChange={setValue}
    >
      <Tabs.List>
        <Tabs.Tab value="heroes">Настройки героев</Tabs.Tab>
        <Tabs.Tab value="cards">Настройки карт самовыбора</Tabs.Tab>
        <Tabs.Tab value="table">Таблица всех героев</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="heroes">
        <HeroesGrid />
      </Tabs.Panel>
      <Tabs.Panel value="cards">
        <Flex mt={8} direction="column" gap={8}>
          <ResourceInput resourceType="heroesResources_ssr" />
          <CardDistributionPanel />
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="table">
        <HeroesTable />
      </Tabs.Panel>
    </Tabs>
  )
})

export default HeroesPage
