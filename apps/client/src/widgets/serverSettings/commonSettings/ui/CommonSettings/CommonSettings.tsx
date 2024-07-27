import React, { FC, memo } from 'react'
import { Fieldset, Stack } from '@mantine/core'
import { ServerSettingInput } from 'entities/serverSettings'


interface Props {
  className?: string
}

const CommonSettings: FC<Props> = memo(({ className }) => (
  <Stack className={className} gap={16}>
    <ServerSettingInput settingKey="season" minValue={0} />
    <ServerSettingInput settingKey="talentsMaxRank" minValue={1} maxValue={10} />
    <ServerSettingInput settingKey="witchGemsMaxRank" minValue={1} maxValue={9} />

    <Fieldset legend="Курс обмена книг бойцов казармы на книги талантов в магазине обмена">
      <ServerSettingInput settingKey="talentBooksConversionRate_rank1" minValue={1} />
      <ServerSettingInput settingKey="talentBooksConversionRate_rank2" minValue={1} />
      <ServerSettingInput settingKey="talentBooksConversionRate_rank3" minValue={1} />
      <ServerSettingInput settingKey="talentBooksConversionRate_rank4" minValue={1} />
    </Fieldset>
  </Stack>
))

export default CommonSettings
