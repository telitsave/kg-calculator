import { FC, memo } from 'react'
import { Fieldset, Stack } from '@mantine/core'
import { ServerSettingInput } from 'entities/serverSettings'

interface Props {
  className?: string
}

const ExtremePowerSettings: FC<Props> = memo(({ className }) => (
  <Stack className={className}>
    <Fieldset legend="Количество очков, получаемых за 1 единицу ресурса">
      <ServerSettingInput settingKey="ep_nHeroCard" minValue={0} />
      <ServerSettingInput settingKey="ep_rHeroCard" minValue={0} />
      <ServerSettingInput settingKey="ep_srHeroCard" minValue={0} />
      <ServerSettingInput settingKey="ep_ssrHeroCard" minValue={0} />
      <ServerSettingInput settingKey="ep_barrackBook1" minValue={0} />
      <ServerSettingInput settingKey="ep_barrackBook2" minValue={0} />
      <ServerSettingInput settingKey="ep_barrackBook3" minValue={0} />
      <ServerSettingInput settingKey="ep_barrackBook4" minValue={0} />
      <ServerSettingInput settingKey="ep_dragonRuneGreen" minValue={0} />
      <ServerSettingInput settingKey="ep_dragonRuneBlue" minValue={0} />
      <ServerSettingInput settingKey="ep_dragonRunePurple" minValue={0} />
      <ServerSettingInput settingKey="ep_dragonRuneGold" minValue={0} />
      <ServerSettingInput settingKey="ep_talentsBook" minValue={0} />
      <ServerSettingInput settingKey="ep_oracleCrown" minValue={0} />
      <ServerSettingInput settingKey="ep_stone" minValue={0} />
      <ServerSettingInput settingKey="ep_wood" minValue={0} />
      <ServerSettingInput settingKey="ep_steel" minValue={0} />
      <ServerSettingInput settingKey="ep_lightReagent" minValue={0} />
      <ServerSettingInput settingKey="ep_greenWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="ep_purpleWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="ep_blacksmith" minValue={0} />
      <ServerSettingInput settingKey="ep_galleryShard" minValue={0} />
    </Fieldset>
  </Stack>
))

export default ExtremePowerSettings
