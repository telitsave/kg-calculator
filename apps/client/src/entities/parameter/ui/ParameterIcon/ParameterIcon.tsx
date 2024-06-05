import React, { FC, memo } from 'react'
import { Tooltip } from '@mantine/core'
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
import { ParameterTypes } from '../../model/types'

interface Props {
  className?: string
  parameterType: ParameterTypes
}

const ParameterIcon: FC<Props> = memo(({ className, parameterType }) => {
  switch (parameterType) {
    case 'castleLevel':
      return (
        <Tooltip label="Уровень замка">
          <CastleIcon className={className} />
        </Tooltip>
      )
    case 'greenEmblem':
      return (
        <Tooltip label="Зеленая эмблема дракона">
          <DragonEmblemGreenIcon className={className} />
        </Tooltip>
      )
    case 'blueEmblem':
      return (
        <Tooltip label="Синяя эмблема дракона">
          <DragonEmblemBlueIcon className={className} />
        </Tooltip>
      )
    case 'purpleEmblem':
      return (
        <Tooltip label="Фиолетовая эмблема дракона">
          <DragonEmblemPurpleIcon className={className} />
        </Tooltip>
      )
    case 'goldEmblem':
      return (
        <Tooltip label="Золотая эмблема дракона">
          <DragonEmblemGoldIcon className={className} />
        </Tooltip>
      )
    case 'dragonLevel':
      return (
        <Tooltip label="Уровень дракона">
          <DragonLevelIcon className={className} />
        </Tooltip>
      )
    case 'lightPower':
      return (
        <Tooltip label="Сила магии света">
          <LightPowerIcon className={className} />
        </Tooltip>
      )
    case 'darkPower':
      return (
        <Tooltip label="Сила магии тьмы">
          <DarkPowerIcon className={className} />
        </Tooltip>
      )
    case 'talentBooks':
      return (
        <Tooltip label="Малый атрибут">
          <TalentBooksIcon className={className} />
        </Tooltip>
      )
    case 'talentCrowns':
      return (
        <Tooltip label="Большой атрибут">
          <TalentCrownsIcon className={className} />
        </Tooltip>
      )
    case 'blacksmithLevel':
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
