import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { HeroesTable } from '@widgets/heroesTable'
import { FC, memo } from 'react'


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
