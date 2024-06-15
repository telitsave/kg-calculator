import React, { FC, memo } from 'react'
import { Box } from '@mantine/core'
import { HeroesGrid } from 'widgets/heroesGrid'


interface Props {
  className?: string
}

const HeroesPage: FC<Props> = memo(({ className }) => (
  <Box className={className} maw={600}>
    <HeroesGrid />
  </Box>
))

export default HeroesPage
