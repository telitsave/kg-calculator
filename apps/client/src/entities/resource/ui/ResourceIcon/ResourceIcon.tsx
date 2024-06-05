import React, { FC, memo } from 'react'
import { Tooltip } from '@mantine/core'
import {
  BarracksBookIcon,
  BlueRuneIcon,
  CastleBoxIcon,
  GoldIcon,
  GoldRuneIcon,
  GreenRuneIcon,
  HeroCardBlueIcon,
  HeroCardGoldIcon,
  HeroCardGreenIcon,
  HeroCardPurpleIcon,
  HummerIcon,
  LightReagentIcon,
  LuckPotionIcon,
  PurpleRuneIcon,
  RunesBoxIcon,
  SteelIcon,
  StoneIcon,
  StrengthPotionIcon,
  TalentBookIcon,
  TalentCrownIcon,
  WoodIcon,
} from 'shared/assets/icons'
import GalleryShardIcon from 'shared/assets/icons/resources/GalleryShardIcon'
import { ResourceType } from '../../model/types'

interface Props {
  className?: string
  resourceType: ResourceType
}

const ResourceIcon: FC<Props> = memo(({ className, resourceType }) => {
  switch (resourceType) {
    case 'stone':
      return (
        <Tooltip label="Камень">
          <StoneIcon className={className} />
        </Tooltip>
      )
    case 'wood':
      return (
        <Tooltip label="Дерево">
          <WoodIcon className={className} />
        </Tooltip>
      )
    case 'steel':
      return (
        <Tooltip label="Сталь">
          <SteelIcon className={className} />
        </Tooltip>
      )
    case 'customConstructionItem':
      return (
        <Tooltip label="Самовыбор строительства замка">
          <CastleBoxIcon className={className} />
        </Tooltip>
      )
    case 'greenRune':
      return (
        <Tooltip label="Редкая руна дракона">
          <GreenRuneIcon className={className} />
        </Tooltip>
      )
    case 'blueRune':
      return (
        <Tooltip label="Отличная руна дракона">
          <BlueRuneIcon className={className} />
        </Tooltip>
      )
    case 'purpleRune':
      return (
        <Tooltip label="Идеальная руна дракона">
          <PurpleRuneIcon className={className} />
        </Tooltip>
      )
    case 'goldRune':
      return (
        <Tooltip label="Эпическая руна дракона">
          <GoldRuneIcon className={className} />
        </Tooltip>
      )
    case 'runesBox':
      return (
        <Tooltip label="Самовыбор рун дракона">
          <RunesBoxIcon className={className} />
        </Tooltip>
      )
    case 'gold':
      return (
        <Tooltip label="Золото">
          <GoldIcon className={className} />
        </Tooltip>
      )
    case 'lightReagent':
      return (
        <Tooltip label="Реагент света">
          <LightReagentIcon className={className} />
        </Tooltip>
      )
    case 'strengthPotion':
      return (
        <Tooltip label="Укрепляющее зелье">
          <StrengthPotionIcon className={className} />
        </Tooltip>
      )
    case 'luckPotion':
      return (
        <Tooltip label="Зелье удачи">
          <LuckPotionIcon className={className} />
        </Tooltip>
      )
    case 'bookBow1':
      return (
        <Tooltip label="Книга опыта лучниц 1-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank1" />
        </Tooltip>
      )
    case 'bookBow2':
      return (
        <Tooltip label="Книга опыта лучниц 2-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank2" />
        </Tooltip>
      )
    case 'bookBow3':
      return (
        <Tooltip label="Книга опыта лучниц 3-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank3" />
        </Tooltip>
      )
    case 'bookBow4':
      return (
        <Tooltip label="Книга опыта лучниц 4-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank4" />
        </Tooltip>
      )
    case 'bookFire1':
      return (
        <Tooltip label="Книга опыта огненных магов 1-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank1" />
        </Tooltip>
      )
    case 'bookFire2':
      return (
        <Tooltip label="Книга опыта огненных магов 2-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank2" />
        </Tooltip>
      )
    case 'bookFire3':
      return (
        <Tooltip label="Книга опыта огненных магов 3-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank3" />
        </Tooltip>
      )
    case 'bookFire4':
      return (
        <Tooltip label="Книга опыта огненных магов 4-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank4" />
        </Tooltip>
      )
    case 'bookIce1':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 1-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank1" />
        </Tooltip>
      )
    case 'bookIce2':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 2-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank2" />
        </Tooltip>
      )
    case 'bookIce3':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 3-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank3" />
        </Tooltip>
      )
    case 'bookIce4':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 4-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank4" />
        </Tooltip>
      )
    case 'bookPoison1':
      return (
        <Tooltip label="Книга опыта гоблинов 1-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank1" />
        </Tooltip>
      )
    case 'bookPoison2':
      return (
        <Tooltip label="Книга опыта гоблинов 2-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank2" />
        </Tooltip>
      )
    case 'bookPoison3':
      return (
        <Tooltip label="Книга опыта гоблинов 3-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank3" />
        </Tooltip>
      )
    case 'bookPoison4':
      return (
        <Tooltip label="Книга опыта гоблинов 4-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank4" />
        </Tooltip>
      )
    case 'bookRandom':
      return (
        <Tooltip label="Самовыбор книг опыта бойца">
          <BarracksBookIcon className={className} element="random" rank="rank1" />
        </Tooltip>
      )
    case 'talentBook':
      return (
        <Tooltip label="Книга Мастера Таланты">
          <TalentBookIcon className={className} />
        </Tooltip>
      )
    case 'talentCrown':
      return (
        <Tooltip label="Корона оракула">
          <TalentCrownIcon className={className} />
        </Tooltip>
      )
    case 'hummer':
      return (
        <Tooltip label="Кузнечный молот">
          <HummerIcon className={className} />
        </Tooltip>
      )
    case 'galleryShards':
      return (
        <Tooltip label="Осколок галлереи">
          <GalleryShardIcon className={className} />
        </Tooltip>
      )
    case 'heroGreenCards':
      return (
        <Tooltip label="Карты героев N-ранга">
          <HeroCardGreenIcon className={className} />
        </Tooltip>
      )
    case 'heroBlueCards':
      return (
        <Tooltip label="Карты героев R-ранга">
          <HeroCardBlueIcon className={className} />
        </Tooltip>
      )
    case 'heroPurpleCards':
      return (
        <Tooltip label="Карты героев SR-ранга">
          <HeroCardPurpleIcon className={className} />
        </Tooltip>
      )
    case 'heroGoldCards':
      return (
        <Tooltip label="Карты героев SSR-ранга">
          <HeroCardGoldIcon className={className} />
        </Tooltip>
      )
  }

  return null
})

export default ResourceIcon
