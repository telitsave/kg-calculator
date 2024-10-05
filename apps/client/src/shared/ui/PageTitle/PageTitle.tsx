import { FC, memo } from 'react'
import { Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { getPageName } from '../Layout/pageNames'


interface Props {
  className?: string
}

const PageTitle: FC<Props> = memo(() => {
  const isMobile = useMediaQuery('(max-width: 36em)')

  if (!isMobile) return null

  return <Title order={3}>{getPageName(location.pathname)}</Title>
})

export default PageTitle
