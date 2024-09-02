import { FC, memo, useCallback, useMemo } from 'react'
import { NumberInput } from '@mantine/core'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import { useServerSettings } from '../../index'
import { settingsNames } from '../../model/locale'
import type { ServerSettingsKeys } from '../../model/types'

interface Props {
  className?: string
  settingKey: ServerSettingsKeys
  maxValue?: number
  minValue?: number
}

const ServerSettingInput: FC<Props> = memo(({ className, settingKey, maxValue, minValue }) => {
  const { serverSettings, setCustomServerSettings, enabledCustomServerSettings } = useServerSettings()

  const value = useMemo(() => {
    if (settingKey.startsWith('ep')) {
      const [, epKey] = settingKey.split('_')
      return (
        serverSettings?.extremePowerConversionRate &&
        serverSettings.extremePowerConversionRate[epKey as keyof CustomServerSettingsData['extremePowerConversionRate']]
      )
    }
    if (settingKey.startsWith('mk')) {
      const [, mkKey] = settingKey.split('_')
      return (
        serverSettings?.mightiestKingdomConversionRate &&
        serverSettings.mightiestKingdomConversionRate[
          mkKey as keyof CustomServerSettingsData['mightiestKingdomConversionRate']
        ]
      )
    }
    if (settingKey.startsWith('talentBooksConversionRate')) {
      const [, rank] = settingKey.split('_')
      return (
        serverSettings?.talentBooksConversionRate &&
        serverSettings.talentBooksConversionRate[rank as keyof CustomServerSettingsData['talentBooksConversionRate']]
      )
    }

    return serverSettings && (serverSettings[settingKey as keyof CustomServerSettingsData] as number)
  }, [settingKey, serverSettings])

  const handleChangeInput = useCallback(
    (value: string | number) => {
      if (settingKey.startsWith('ep')) {
        const [, epKey] = settingKey.split('_')
        setCustomServerSettings((val) => ({
          ...val,
          extremePowerConversionRate: {
            ...val.extremePowerConversionRate,
            [epKey]: Number(value),
          },
        }))
      } else if (settingKey.startsWith('mk')) {
        const [, mkKey] = settingKey.split('_')
        setCustomServerSettings((val) => ({
          ...val,
          mightiestKingdomConversionRate: {
            ...val.mightiestKingdomConversionRate,
            [mkKey]: Number(value),
          },
        }))
      } else if (settingKey.startsWith('talentBooksConversionRate')) {
        const [, rank] = settingKey.split('_')
        setCustomServerSettings((val) => ({
          ...val,
          talentBooksConversionRate: {
            ...val.talentBooksConversionRate,
            [rank]: Number(value),
          },
        }))
      } else {
        setCustomServerSettings((val) => ({
          ...val,
          [settingKey]: Number(value),
        }))
      }
    },
    [settingKey],
  )

  return (
    <NumberInput
      className={className}
      disabled={!enabledCustomServerSettings}
      value={value}
      min={minValue}
      max={maxValue}
      onChange={handleChangeInput}
      label={settingsNames[settingKey]}
      thousandSeparator=" "
    />
  )
})

export default ServerSettingInput
