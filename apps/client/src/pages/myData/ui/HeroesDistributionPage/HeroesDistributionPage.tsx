import { FC, memo } from 'react'
import { Flex } from '@mantine/core'
import { ResourceInput } from 'entities/resource'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { CardDistributionPanel } from 'widgets/heroesCalculator'


const HeroesDistributionPage: FC = memo(() => {
  return (
    <Flex maw={600} mt={8} direction="column" gap={8}>
      <NoAuthNavigate to="/myData" />
      <PageTitle />
      <ResourceInput resourceType="heroesResources_ssr" />
      <CardDistributionPanel />
    </Flex>
  )
})

export default HeroesDistributionPage
