import React from 'react'
import type { CalculateExtremePowerResponse } from 'kg-calculator-typings/api/ExtremePower'
import { ResourceIcon } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import NamesHelper from '../../helpers/namesHelper'
import ExtremePowerElement from '../ExtremePowerElement'
import ExtremePowerModule from '../ExtremePowerModule'


export const getModuleByType = (
  type: keyof Omit<CalculateExtremePowerResponse, 'total'>,
  statisticsData?: CalculateExtremePowerResponse,
  showEmpty: boolean = false,
) => {
  if (!showEmpty) {
    if (!statisticsData || !(statisticsData[type].total > 0)) {
      return null
    }
  }

  return (
    <ExtremePowerModule
      value={(statisticsData && statisticsData[type].total) || 0}
      title={NamesHelper.getModuleNameByType(type)}
      elements={getElementsByType(type, statisticsData)}
    />
  )
}

export const getElementsByType = (
  type: keyof Omit<CalculateExtremePowerResponse, 'total'>,
  statisticsData?: CalculateExtremePowerResponse,
) => {
  switch (type) {
    case 'castle':
      return getElementsForCastle(statisticsData)
    case 'dragonRunes':
      return getElementsForDragon(statisticsData)
    case 'witch':
      return getElementsForWitch(statisticsData)
    case 'barracksBooks':
      return getElementsForBarracks(statisticsData)
    case 'barracksTalents':
      return getElementsForTalents(statisticsData)
    case 'blacksmith':
      return getElementsForBlacksmith(statisticsData)
    case 'gallery':
      return getElementsForGallery(statisticsData)
    default:
      return []
  }
}

const getElementsForCastle = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="stone"
    iconNode={<ResourceIcon resourceType="stone" />}
    value={statisticsData?.castle.stone}
  />,
  <ExtremePowerElement
    key="wood"
    iconNode={<ResourceIcon resourceType="wood" />}
    value={statisticsData?.castle.wood}
  />,
  <ExtremePowerElement
    key="steel"
    iconNode={<ResourceIcon resourceType="steel" />}
    value={statisticsData?.castle.steel}
  />,
]

const getElementsForDragon = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="greenRune"
    iconNode={<ResourceIcon resourceType="greenRune" />}
    value={statisticsData?.dragonRunes.green}
  />,
  <ExtremePowerElement
    key="blueRune"
    iconNode={<ResourceIcon resourceType="blueRune" />}
    value={statisticsData?.dragonRunes.blue}
  />,
  <ExtremePowerElement
    key="purpleRune"
    iconNode={<ResourceIcon resourceType="purpleRune" />}
    value={statisticsData?.dragonRunes.purple}
  />,
  <ExtremePowerElement
    key="goldRune"
    iconNode={<ResourceIcon resourceType="goldRune" />}
    value={statisticsData?.dragonRunes.gold}
  />,
]

const getElementsForWitch = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="lightReagent"
    iconNode={<ResourceIcon resourceType="lightReagent" />}
    value={statisticsData?.witch.lightReagents}
  />,
  <ExtremePowerElement
    key="strengthPotion"
    iconNode={<ResourceIcon resourceType="strengthPotion" />}
    value={statisticsData?.witch.greenPotions}
  />,
  <ExtremePowerElement
    key="luckPotion"
    iconNode={<ResourceIcon resourceType="luckPotion" />}
    value={statisticsData?.witch.purplePotions}
  />,
]

const getElementsForBarracks = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="barracksBooksRank1"
    iconNode={
      <Flexbox>
        <ResourceIcon resourceType="bookBow1" />
        <ResourceIcon resourceType="bookFire1" />
        <ResourceIcon resourceType="bookIce1" />
        <ResourceIcon resourceType="bookPoison1" />
      </Flexbox>
    }
    value={statisticsData?.barracksBooks.rank1}
  />,
  <ExtremePowerElement
    key="barracksBooksRank2"
    iconNode={
      <Flexbox>
        <ResourceIcon resourceType="bookBow2" />
        <ResourceIcon resourceType="bookFire2" />
        <ResourceIcon resourceType="bookIce2" />
        <ResourceIcon resourceType="bookPoison2" />
      </Flexbox>
    }
    value={statisticsData?.barracksBooks.rank2}
  />,
  <ExtremePowerElement
    key="barracksBooksRank3"
    iconNode={
      <Flexbox>
        <ResourceIcon resourceType="bookBow3" />
        <ResourceIcon resourceType="bookFire3" />
        <ResourceIcon resourceType="bookIce3" />
        <ResourceIcon resourceType="bookPoison3" />
      </Flexbox>
    }
    value={statisticsData?.barracksBooks.rank3}
  />,
  <ExtremePowerElement
    key="barracksBooksRank4"
    iconNode={
      <Flexbox>
        <ResourceIcon resourceType="bookBow4" />
        <ResourceIcon resourceType="bookFire4" />
        <ResourceIcon resourceType="bookIce4" />
        <ResourceIcon resourceType="bookPoison4" />
      </Flexbox>
    }
    value={statisticsData?.barracksBooks.rank4}
  />,
]

const getElementsForTalents = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="talentsBooks"
    iconNode={<ResourceIcon resourceType="talentBook" />}
    value={statisticsData?.barracksTalents.books}
  />,
  <ExtremePowerElement
    key="talentsCrowns"
    iconNode={<ResourceIcon resourceType="talentCrown" />}
    value={statisticsData?.barracksTalents.oraclesCrowns}
  />,
]

const getElementsForBlacksmith = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="hammers"
    iconNode={<ResourceIcon resourceType="hummer" />}
    value={statisticsData?.blacksmith.hammers}
  />,
]

const getElementsForGallery = (statisticsData?: CalculateExtremePowerResponse) => [
  <ExtremePowerElement
    key="galleryShards"
    iconNode={<ResourceIcon resourceType="galleryShards" />}
    value={statisticsData?.gallery.shards}
  />,
]
