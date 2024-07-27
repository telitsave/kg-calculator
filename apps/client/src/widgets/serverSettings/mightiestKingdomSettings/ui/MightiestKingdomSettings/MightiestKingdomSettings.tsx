import React, { FC, memo } from 'react'
import { Fieldset, Stack } from '@mantine/core'
import { ServerSettingInput } from 'entities/serverSettings'


interface Props {
  className?: string
}

const MightiestKingdomSettings: FC<Props> = memo(({ className }) => (
  <Stack className={className}>
    <Fieldset legend="Количество очков, получаемых за 1 единицу ресурса">
      <ServerSettingInput settingKey="mk_nHeroCard" minValue={0} />
      <ServerSettingInput settingKey="mk_rHeroCard" minValue={0} />
      <ServerSettingInput settingKey="mk_srHeroCard" minValue={0} />
      <ServerSettingInput settingKey="mk_ssrHeroCard" minValue={0} />
      <ServerSettingInput settingKey="mk_barrackBook1" minValue={0} />
      <ServerSettingInput settingKey="mk_barrackBook2" minValue={0} />
      <ServerSettingInput settingKey="mk_barrackBook3" minValue={0} />
      <ServerSettingInput settingKey="mk_barrackBook4" minValue={0} />
      <ServerSettingInput settingKey="mk_dragonRuneGreen" minValue={0} />
      <ServerSettingInput settingKey="mk_dragonRuneBlue" minValue={0} />
      <ServerSettingInput settingKey="mk_dragonRunePurple" minValue={0} />
      <ServerSettingInput settingKey="mk_dragonRuneGold" minValue={0} />
      <ServerSettingInput settingKey="mk_talentsBook" minValue={0} />
      <ServerSettingInput settingKey="mk_oracleCrown" minValue={0} />
      <ServerSettingInput settingKey="mk_lightReagent" minValue={0} />
      <ServerSettingInput settingKey="mk_greenWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="mk_purpleWitchPotion" minValue={0} />
      <ServerSettingInput settingKey="mk_blacksmith" minValue={0} />
      <ServerSettingInput settingKey="mk_galleryShard" minValue={0} />
    </Fieldset>
  </Stack>
))

export default MightiestKingdomSettings
