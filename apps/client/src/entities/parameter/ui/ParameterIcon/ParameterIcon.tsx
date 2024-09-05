import { FC, memo } from 'react'
import { Tooltip } from '@mantine/core'
import type { ParameterTypes } from 'kg-calculator-typings'
import {
  BlacksmithIcon,
  CastleIcon,
  DarkPowerIcon,
  DragonEmblemBlueIcon,
  DragonEmblemGoldIcon,
  DragonEmblemGreenIcon,
  DragonEmblemPurpleIcon,
  DragonLevelIcon,
  LightPowerIcon,
  TalentBooksIcon,
  TalentCrownsIcon,
} from 'shared/assets/icons'

interface Props {
  className?: string
  parameterType: ParameterTypes
}

const ParameterIcon: FC<Props> = memo(({ className, parameterType }) => {
  switch (parameterType) {
    case 'castleParams_level':
      return (
        <Tooltip label="Уровень замка">
          <CastleIcon className={className} />
        </Tooltip>
      )
    case 'dragonParams_green':
      return (
        <Tooltip label="Зеленая эмблема дракона">
          <DragonEmblemGreenIcon className={className} />
        </Tooltip>
      )
    case 'dragonParams_blue':
      return (
        <Tooltip label="Синяя эмблема дракона">
          <DragonEmblemBlueIcon className={className} />
        </Tooltip>
      )
    case 'dragonParams_purple':
      return (
        <Tooltip label="Фиолетовая эмблема дракона">
          <DragonEmblemPurpleIcon className={className} />
        </Tooltip>
      )
    case 'dragonParams_gold':
      return (
        <Tooltip label="Золотая эмблема дракона">
          <DragonEmblemGoldIcon className={className} />
        </Tooltip>
      )
    case 'dragonParams_level':
      return (
        <Tooltip label="Уровень дракона">
          <DragonLevelIcon className={className} />
        </Tooltip>
      )
    case 'witchParams_lightLevel':
      return (
        <Tooltip label="Сила магии света">
          <LightPowerIcon className={className} />
        </Tooltip>
      )
    case 'witchParams_darkLevel':
      return (
        <Tooltip label="Сила магии тьмы">
          <DarkPowerIcon className={className} />
        </Tooltip>
      )
    case 'talentParams_books':
      return (
        <Tooltip label="Малый атрибут">
          <TalentBooksIcon className={className} />
        </Tooltip>
      )
    case 'talentParams_crowns':
      return (
        <Tooltip label="Большой атрибут">
          <TalentCrownsIcon className={className} />
        </Tooltip>
      )
    case 'blacksmithParams_level':
      return (
        <Tooltip label="Уровень кузнеца">
          <BlacksmithIcon className={className} />
        </Tooltip>
      )
    default:
      return null
  }
})

export default ParameterIcon
