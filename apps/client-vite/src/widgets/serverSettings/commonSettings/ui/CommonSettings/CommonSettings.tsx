import { FC, memo } from 'react'
import { Fieldset, Stack } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { ResourceIcon } from '@entities/resource'
import { ServerSettingInput } from '@entities/serverSettings'
import ServerSettingDoubleInput from '@entities/serverSettings/ui/ServerSettingDoubleInput'


interface Props {
  className?: string
}

const CommonSettings: FC<Props> = memo(({ className }) => (
  <Stack className={className} gap={16}>
    <ServerSettingInput settingKey="season" minValue={0} />
    <ServerSettingInput settingKey="talentsMaxRank" minValue={1} maxValue={12} />
    <ServerSettingInput settingKey="witchGemsMaxRank" minValue={1} maxValue={11} />

    <Fieldset
      legend={<FormattedMessage defaultMessage="Курс обмена книг бойцов казармы на книги талантов в магазине обмена" />}
    >
      <ServerSettingInput settingKey="talentBooks_rank1" minValue={1} />
      <ServerSettingInput settingKey="talentBooks_rank2" minValue={1} />
      <ServerSettingInput settingKey="talentBooks_rank3" minValue={1} />
      <ServerSettingInput settingKey="talentBooks_rank4" minValue={1} />
    </Fieldset>

    <Fieldset legend={<FormattedMessage defaultMessage="Очки на событиях Сильнейшее королевство/Экстремальная мощь" />}>
      <Stack gap="xs">
        <ServerSettingDoubleInput
          icon={<ResourceIcon resourceType="talentsResources_books" />}
          settingKey="talentsBook"
        />
        <ServerSettingDoubleInput
          icon={<ResourceIcon resourceType="talentsResources_oraclesCrowns" />}
          settingKey="oracleCrown"
        />
        <ServerSettingDoubleInput
          icon={<ResourceIcon resourceType="witchResources_greenWitchPotion" />}
          settingKey="greenWitchPotion"
        />
        <ServerSettingDoubleInput
          icon={<ResourceIcon resourceType="witchResources_purpleWitchPotion" />}
          settingKey="purpleWitchPotion"
        />
      </Stack>
    </Fieldset>
  </Stack>
))

export default CommonSettings
