import { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { SettingsSwitch } from '@entities/calculationSettings'
import { WitchGemsInputs, WitchPowerInput } from '@entities/parameter'
import { ResourceInput } from '@entities/resource'
import { useServerSettings } from '@entities/serverSettings'
import Flexbox from '@shared/ui/Flexbox'


interface Props {
  onSubmitButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ onSubmitButtonClick }) => {
  const { serverSettings } = useServerSettings()

  return (
    <>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>
          <FormattedMessage defaultMessage="Мои ресурсы" />
        </Title>
        <ResourceInput resourceType="witchResources_lightReagents" />
        <ResourceInput resourceType="witchResources_greenWitchPotion" />
        <ResourceInput resourceType="witchResources_purpleWitchPotion" />
      </Flexbox>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>
          <FormattedMessage defaultMessage="Мои параметры" />
        </Title>
        <WitchPowerInput />
        <SettingsSwitch settingsType="spentToArtifactLightReagents" />
        <Divider mt={8} mb={8} />
        <WitchGemsInputs maxRank={serverSettings?.witchGemsMaxRank || 1} />
      </Flexbox>
      <Button onClick={onSubmitButtonClick}>
        <FormattedMessage defaultMessage="Посчитать" />
      </Button>
    </>
  )
})

export default Inputs
