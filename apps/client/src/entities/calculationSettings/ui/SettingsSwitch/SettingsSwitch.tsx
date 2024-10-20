import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import cx from 'classnames'
import { Switch, SwitchGroup, Text } from '@mantine/core'
import type { Settings } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import HelpButton from 'shared/ui/HelpButton'
import useSetting from '../../model/hooks/useSetting'
import HelpNode from '../HelpNode'
import css from './styles.module.sass'


interface Props {
  className?: string
  settingsType: keyof Settings
}

const SettingsSwitch: FC<Props> = memo(({ className, settingsType }) => {
  const [value, setValue] = useSetting(settingsType)
  const [stateValue, setStateValue] = useState(value)

  const switchLabel = useMemo(() => {
    switch (settingsType) {
      case 'canUseCastleBoxes':
        return <Text>Используем коробки ресурсов замка?</Text>
      case 'canUseDragonBoxes':
        return <Text>Используем коробки с рунами дракона?</Text>
      case 'canConvertCastleResources':
        return <Text>Конвертируем ресурсы замка?</Text>
      case 'canConvertBarracksBooksToTalents':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Меняем излишки книг казармы на таланты?</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'canUseRandomBarracksBooks':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Меняем книги казармы самовыбора в приоритетную стихию?</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'canUseTalentsToNonPriorityElements':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>
              Прокачиваем таланты для <b>не приоритетных</b> стихий?
            </Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'useAdvancedHeroMode':
        return <Text>Продвинутый режим героев</Text>
      case 'useCastleLimit':
        return <Text>Учитывать уровень замка при прокачке дракона</Text>
      case 'usePossibleCastleLimit':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Учитывать возможный уровень замка при прокачке дракона</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'spentToArtifactBarracks':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Потратить остатки книг казармы в артефакт</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'spentToArtifactCastle':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Потратить все ресурсы в артефакт вместо прокачки замка</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'spentToArtifactDragon':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Потратить ресурсы дракона в артефакт</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'spentToArtifactLightReagents':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Потратить излишки светлых реагентов в артефакт</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      case 'spentToArtifactHammers':
        return (
          <Flexbox alignItems="center" gap={4} justifyContent="space-between">
            <Text>Потратить излишки кузнечных молотов в артефакт</Text>
            <HelpButton helpContent={<HelpNode settingsType={settingsType} />} />
          </Flexbox>
        )
      default:
        return <Text />
    }
  }, [settingsType])

  const handleSwitchChange = useCallback(
    (values: string[]) => {
      setValue(values.includes(settingsType))
      setStateValue(values.includes(settingsType))
    },
    [setValue, settingsType],
  )

  useEffect(() => {
    if (value) {
      setStateValue(value)
    }
  }, [value])

  return (
    <SwitchGroup
      className={cx(css.root, className)}
      value={stateValue ? [settingsType] : []}
      onChange={handleSwitchChange}
    >
      <Switch
        label={switchLabel}
        value={settingsType}
        styles={{
          body: {
            alignItems: 'center',
          },
          labelWrapper: {
            flex: '1 1 auto',
          },
          track: {
            flexShrink: 0,
          },
        }}
      />
    </SwitchGroup>
  )
})

export default SettingsSwitch
