import { FC, memo } from 'react'
import { Fieldset, Stack } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { ServerSettingInput } from '@entities/serverSettings'


interface Props {
  className?: string
}

const UltimatePowerSettings: FC<Props> = memo(({ className }) => (
  <Stack className={className}>
    <Fieldset legend={<FormattedMessage defaultMessage="Количество очков, получаемых за 1 единицу ресурса" />}>
      <ServerSettingInput settingKey="up_nHeroCard" minValue={0} />
      <ServerSettingInput settingKey="up_rHeroCard" minValue={0} />
      <ServerSettingInput settingKey="up_srHeroCard" minValue={0} />
      <ServerSettingInput settingKey="up_ssrHeroCard" minValue={0} />
      <ServerSettingInput settingKey="up_barrackBook1" minValue={0} />
      <ServerSettingInput settingKey="up_barrackBook2" minValue={0} />
      <ServerSettingInput settingKey="up_barrackBook3" minValue={0} />
      <ServerSettingInput settingKey="up_barrackBook4" minValue={0} />
      <ServerSettingInput settingKey="up_dragonRuneGreen" minValue={0} />
      <ServerSettingInput settingKey="up_dragonRuneBlue" minValue={0} />
      <ServerSettingInput settingKey="up_dragonRunePurple" minValue={0} />
      <ServerSettingInput settingKey="up_dragonRuneGold" minValue={0} />
      <ServerSettingInput settingKey="up_talentsBook" minValue={0} />
      <ServerSettingInput settingKey="up_oracleCrown" minValue={0} />
      <ServerSettingInput settingKey="up_stone" minValue={0} />
      <ServerSettingInput settingKey="up_wood" minValue={0} />
      <ServerSettingInput settingKey="up_steel" minValue={0} />
      <ServerSettingInput settingKey="up_lightReagent" minValue={0} />
      <ServerSettingInput settingKey="up_greenWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="up_purpleWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="up_blacksmith" minValue={0} />
      <ServerSettingInput settingKey="up_galleryShard" minValue={0} />
    </Fieldset>
  </Stack>
))

export default UltimatePowerSettings
