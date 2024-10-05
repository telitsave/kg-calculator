import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { HeroesTable } from 'widgets/heroesTable'


const HeroesTablePage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/myData" />
      <PageTitle />
      <HeroesTable />
    </Stack>
  )
})

export default HeroesTablePage
