import { FC, memo, useCallback, useEffect, useState } from 'react'
import { NumberInput } from '@mantine/core'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import useServerSettings from '../../model/hooks/useServerSettings'
import { settingsNames } from '../../model/locale'


interface Props {
  className?: string
  settingKey: keyof CustomServerSettingsData
  maxValue?: number
  minValue?: number
}

const ServerSettingInput: FC<Props> = memo(({ className, settingKey, maxValue, minValue }) => {
  const { serverSettings = {}, saveServerSetting } = useServerSettings()
  const [valueState, setValueState] = useState(serverSettings[settingKey])

  const handleChangeInput = useCallback(
    (value: string | number) => {
      saveServerSetting(settingKey, Number(value))
      setValueState(Number(value))
    },
    [saveServerSetting, settingKey],
  )

  useEffect(() => {
    if (serverSettings[settingKey]) {
      setValueState(serverSettings[settingKey])
    }
  }, [serverSettings, settingKey])

  return (
    <NumberInput
      className={className}
      disabled={!serverSettings.enabledCustomServerSettings}
      value={valueState}
      min={minValue}
      max={maxValue}
      onChange={handleChangeInput}
      label={settingsNames[settingKey]}
      thousandSeparator=" "
      clampBehavior="strict"
    />
  )
})

export default ServerSettingInput
