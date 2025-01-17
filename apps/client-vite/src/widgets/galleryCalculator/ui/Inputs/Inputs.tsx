import { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { GalleryInput } from '@entities/parameter'
import { ResourceInput } from '@entities/resource'
import Flexbox from '@shared/ui/Flexbox'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => (
  <Flexbox className={className} flexDirection="column" gap={8}>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>
        <FormattedMessage defaultMessage="Мои ресурсы" />
      </Title>
      <ResourceInput resourceType="galleryResources_shards" />
    </Flexbox>

    <Divider size="xs" />

    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>
        <FormattedMessage defaultMessage="Мои параметры" />
      </Title>
      <GalleryInput />
    </Flexbox>

    <Button onClick={onCalculateButtonClick}>
      <FormattedMessage defaultMessage="Посчитать" />
    </Button>
  </Flexbox>
))

export default Inputs
