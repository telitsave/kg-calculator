import { ResourceInput } from '@entities/resource'
import { NoAuthNavigate } from '@entities/user'
import { Flex } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { CardDistributionPanel } from '@widgets/heroesCalculator'
import { FC, memo } from 'react'


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
