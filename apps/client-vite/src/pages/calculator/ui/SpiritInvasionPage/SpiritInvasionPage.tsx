import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { SpiritsInvasion } from '@widgets/spiritsInvasion'
import { FC, memo } from 'react'


const SpiritInvasionPage: FC = memo(() => (
  <Stack>
    <PageTitle />
    <SpiritsInvasion />
  </Stack>
))

export default SpiritInvasionPage
