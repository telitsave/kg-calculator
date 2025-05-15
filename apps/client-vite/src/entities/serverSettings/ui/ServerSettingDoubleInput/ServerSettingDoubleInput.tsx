import { FC, type ReactNode, memo, useCallback, useEffect, useState } from 'react'
import { Flex, NumberInput } from '@mantine/core'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import useServerSettings from '../../model/hooks/useServerSettings'


type SettingsKeys = 'talentsBook' | 'oracleCrown' | 'greenWitchPotion' | 'purpleWitchPotion'

interface Props {
  className?: string
  settingKey: SettingsKeys
  icon: ReactNode
}

const getServerSettingsCountKey = (key: SettingsKeys): keyof CustomServerSettingsData => {
  switch (key) {
    case 'talentsBook':
      return 'talentsBookCount'
    case 'oracleCrown':
      return 'oracleCrownCount'
    case 'greenWitchPotion':
      return 'greenWitchPotionCount'
    case 'purpleWitchPotion':
      return 'purpleWitchPotionCount'
  }
}

const getServerSettingsCostKey = (key: SettingsKeys): keyof CustomServerSettingsData => {
  switch (key) {
    case 'talentsBook':
      return 'talentsBookCost'
    case 'oracleCrown':
      return 'oracleCrownCost'
    case 'greenWitchPotion':
      return 'greenWitchPotionCost'
    case 'purpleWitchPotion':
      return 'purpleWitchPotionCost'
  }
}

const ServerSettingDoubleInput: FC<Props> = memo(({ className, icon, settingKey }) => {
  const { serverSettings = {}, saveServerSetting } = useServerSettings()
  const [valueCount, setValueCount] = useState(serverSettings[getServerSettingsCountKey(settingKey)])
  const [valueCost, setValueCost] = useState(serverSettings[getServerSettingsCostKey(settingKey)])

  const handleChangeInputCount = useCallback(
    (value: string | number) => {
      saveServerSetting(getServerSettingsCountKey(settingKey), Number(value))
      setValueCount(Number(value))
    },
    [saveServerSetting, settingKey],
  )

  const handleChangeInputCost = useCallback(
    (value: string | number) => {
      saveServerSetting(getServerSettingsCostKey(settingKey), Number(value))
      setValueCost(Number(value))
    },
    [saveServerSetting, settingKey],
  )

  useEffect(() => {
    if (serverSettings[getServerSettingsCountKey(settingKey)]) {
      setValueCount(serverSettings[getServerSettingsCountKey(settingKey)])
    }
    if (serverSettings[getServerSettingsCostKey(settingKey)]) {
      setValueCost(serverSettings[getServerSettingsCostKey(settingKey)])
    }
  }, [serverSettings, settingKey])

  return (
    <Flex align="center" gap="xs">
      {icon}
      <FormattedMessage
        defaultMessage="За {inputCount} <b>шт</b> получить {inputCost} <b>очков</b>"
        values={{
          b: (text) => <strong>{text}</strong>,
          inputCount: (
            <NumberInput
              w={75}
              size="xs"
              className={className}
              defaultValue={1}
              disabled={!serverSettings.enabledCustomServerSettings}
              value={valueCount}
              min={1}
              max={999999}
              onChange={handleChangeInputCount}
              thousandSeparator=" "
              clampBehavior="strict"
            />
          ),
          inputCost: (
            <NumberInput
              w={75}
              size="xs"
              className={className}
              disabled={!serverSettings.enabledCustomServerSettings}
              value={valueCost}
              min={0}
              max={999999}
              onChange={handleChangeInputCost}
              thousandSeparator=" "
              clampBehavior="strict"
            />
          ),
        }}
      />
    </Flex>
  )
})

export default ServerSettingDoubleInput
