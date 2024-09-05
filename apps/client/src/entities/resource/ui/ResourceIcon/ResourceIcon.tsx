import { FC, memo } from 'react'
import { Tooltip } from '@mantine/core'
import type { ResourceType } from 'kg-calculator-typings'
import {
  BarracksBookIcon,
  BlueRuneIcon,
  CastleBoxIcon,
  GalleryShardIcon,
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

interface Props {
  className?: string
  resourceType: ResourceType
}

const ResourceIcon: FC<Props> = memo(({ className, resourceType }) => {
  switch (resourceType) {
    case 'castleResources_stone':
      return (
        <Tooltip label="Камень">
          <StoneIcon className={className} />
        </Tooltip>
      )
    case 'castleResources_wood':
      return (
        <Tooltip label="Дерево">
          <WoodIcon className={className} />
        </Tooltip>
      )
    case 'castleResources_steel':
      return (
        <Tooltip label="Сталь">
          <SteelIcon className={className} />
        </Tooltip>
      )
    case 'castleResources_boxes':
      return (
        <Tooltip label="Самовыбор строительства замка">
          <CastleBoxIcon className={className} />
        </Tooltip>
      )
    case 'dragonResources_green':
      return (
        <Tooltip label="Редкая руна дракона">
          <GreenRuneIcon className={className} />
        </Tooltip>
      )
    case 'dragonResources_blue':
      return (
        <Tooltip label="Отличная руна дракона">
          <BlueRuneIcon className={className} />
        </Tooltip>
      )
    case 'dragonResources_purple':
      return (
        <Tooltip label="Идеальная руна дракона">
          <PurpleRuneIcon className={className} />
        </Tooltip>
      )
    case 'dragonResources_gold':
      return (
        <Tooltip label="Эпическая руна дракона">
          <GoldRuneIcon className={className} />
        </Tooltip>
      )
    case 'dragonResources_boxes':
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
    case 'witchResources_lightReagents':
      return (
        <Tooltip label="Реагент света">
          <LightReagentIcon className={className} />
        </Tooltip>
      )
    case 'witchResources_greenWitchPotion':
      return (
        <Tooltip label="Укрепляющее зелье">
          <StrengthPotionIcon className={className} />
        </Tooltip>
      )
    case 'witchResources_purpleWitchPotion':
      return (
        <Tooltip label="Зелье удачи">
          <LuckPotionIcon className={className} />
        </Tooltip>
      )
    case 'barracksResources_bow_1':
      return (
        <Tooltip label="Книга опыта лучниц 1-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank1" />
        </Tooltip>
      )
    case 'barracksResources_bow_2':
      return (
        <Tooltip label="Книга опыта лучниц 2-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank2" />
        </Tooltip>
      )
    case 'barracksResources_bow_3':
      return (
        <Tooltip label="Книга опыта лучниц 3-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank3" />
        </Tooltip>
      )
    case 'barracksResources_bow_4':
      return (
        <Tooltip label="Книга опыта лучниц 4-го ранга">
          <BarracksBookIcon className={className} element="bow" rank="rank4" />
        </Tooltip>
      )
    case 'barracksResources_fire_1':
      return (
        <Tooltip label="Книга опыта огненных магов 1-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank1" />
        </Tooltip>
      )
    case 'barracksResources_fire_2':
      return (
        <Tooltip label="Книга опыта огненных магов 2-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank2" />
        </Tooltip>
      )
    case 'barracksResources_fire_3':
      return (
        <Tooltip label="Книга опыта огненных магов 3-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank3" />
        </Tooltip>
      )
    case 'barracksResources_fire_4':
      return (
        <Tooltip label="Книга опыта огненных магов 4-го ранга">
          <BarracksBookIcon className={className} element="fire" rank="rank4" />
        </Tooltip>
      )
    case 'barracksResources_ice_1':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 1-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank1" />
        </Tooltip>
      )
    case 'barracksResources_ice_2':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 2-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank2" />
        </Tooltip>
      )
    case 'barracksResources_ice_3':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 3-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank3" />
        </Tooltip>
      )
    case 'barracksResources_ice_4':
      return (
        <Tooltip label="Книга опыта ледяных колдуний 4-го ранга">
          <BarracksBookIcon className={className} element="ice" rank="rank4" />
        </Tooltip>
      )
    case 'barracksResources_poison_1':
      return (
        <Tooltip label="Книга опыта гоблинов 1-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank1" />
        </Tooltip>
      )
    case 'barracksResources_poison_2':
      return (
        <Tooltip label="Книга опыта гоблинов 2-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank2" />
        </Tooltip>
      )
    case 'barracksResources_poison_3':
      return (
        <Tooltip label="Книга опыта гоблинов 3-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank3" />
        </Tooltip>
      )
    case 'barracksResources_poison_4':
      return (
        <Tooltip label="Книга опыта гоблинов 4-го ранга">
          <BarracksBookIcon className={className} element="poison" rank="rank4" />
        </Tooltip>
      )
    case 'barracksResources_random':
      return (
        <Tooltip label="Самовыбор книг опыта бойца">
          <BarracksBookIcon className={className} element="random" rank="rank1" />
        </Tooltip>
      )
    case 'talentsResources_books':
      return (
        <Tooltip label="Книга Мастера Таланты">
          <TalentBookIcon className={className} />
        </Tooltip>
      )
    case 'talentsResources_oraclesCrowns':
      return (
        <Tooltip label="Корона оракула">
          <TalentCrownIcon className={className} />
        </Tooltip>
      )
    case 'blacksmithResources_hammers':
      return (
        <Tooltip label="Кузнечный молот">
          <HummerIcon className={className} />
        </Tooltip>
      )
    case 'galleryResources_shards':
      return (
        <Tooltip label="Осколок галлереи">
          <GalleryShardIcon className={className} />
        </Tooltip>
      )
    case 'heroesResources_n':
      return (
        <Tooltip label="Карты героев N-ранга">
          <HeroCardGreenIcon className={className} />
        </Tooltip>
      )
    case 'heroesResources_r':
      return (
        <Tooltip label="Карты героев R-ранга">
          <HeroCardBlueIcon className={className} />
        </Tooltip>
      )
    case 'heroesResources_sr':
      return (
        <Tooltip label="Карты героев SR-ранга">
          <HeroCardPurpleIcon className={className} />
        </Tooltip>
      )
    case 'heroesResources_ssr':
      return (
        <Tooltip label="Карты героев SSR-ранга">
          <HeroCardGoldIcon className={className} />
        </Tooltip>
      )
  }
})

export default ResourceIcon
