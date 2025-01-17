import { NoAuthNavigate } from '@entities/user'
import { Stack } from '@mantine/core'
import PageTitle from '@shared/ui/PageTitle'
import { GalleryCalculator } from '@widgets/galleryCalculator'
import { FC, memo } from 'react'


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
