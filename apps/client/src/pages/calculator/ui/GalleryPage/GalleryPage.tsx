import { FC, memo } from 'react'
import { Stack } from '@mantine/core'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { GalleryCalculator } from 'widgets/galleryCalculator'


const GalleryPage: FC = memo(() => {
  return (
    <Stack>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <GalleryCalculator />
    </Stack>
  )
})

export default GalleryPage
