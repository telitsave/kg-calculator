import { FC, memo, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { Switch, SwitchGroup, Text } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import HelpButton from 'shared/ui/HelpButton'
import useSetting from '../../model/hooks/useSetting'
import { SettingsTypes } from '../../model/types'
import HelpNode from '../HelpNode'
import css from './styles.module.sass'

interface Props {
  className?: string
  settingsType: SettingsTypes
}

const SettingsSwitch: FC<Props> = memo(({ className, settingsType }) => {
  const [value, setValue] = useSetting(settingsType)

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
      default:
        return <Text />
    }
  }, [settingsType])

  const handleSwitchChange = useCallback(
    (values: string[]) => {
      setValue(values.includes(settingsType))
    },
    [setValue, settingsType],
  )

  return (
    <SwitchGroup className={cx(css.root, className)} value={value ? [settingsType] : []} onChange={handleSwitchChange}>
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
