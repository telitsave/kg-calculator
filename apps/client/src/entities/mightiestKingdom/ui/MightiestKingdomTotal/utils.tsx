import React from 'react'
import type { CalculateMightiestKingdomResponse } from 'kg-calculator-typings/api/MightiestKingdom'
import { ResourceIcon } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import NamesHelper from '../../helpers/namesHelper'
import MightiestKingdomElement from '../MightiestKingdomElement'
import MightiestKingdomModule from '../MightiestKingdomModule'


export const getModuleByType = (
  type: keyof Omit<CalculateMightiestKingdomResponse, 'total'>,
  statisticsData?: CalculateMightiestKingdomResponse,
  showEmpty: boolean = false,
) => {
  if (!showEmpty) {
    if (!statisticsData || !(statisticsData[type].total > 0)) {
      return null
    }
  }

  return (
    <MightiestKingdomModule
      value={(statisticsData && statisticsData[type].total) || 0}
      title={NamesHelper.getModuleNameByType(type)}
      elements={getElementsByType(type, statisticsData)}
    />
  )
}

export const getElementsByType = (
  type: keyof Omit<CalculateMightiestKingdomResponse, 'total'>,
  statisticsData?: CalculateMightiestKingdomResponse,
) => {
  switch (type) {
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

const getElementsForDragon = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
    key="greenRune"
    iconNode={<ResourceIcon resourceType="greenRune" />}
    value={statisticsData?.dragonRunes.green}
  />,
  <MightiestKingdomElement
    key="blueRune"
    iconNode={<ResourceIcon resourceType="blueRune" />}
    value={statisticsData?.dragonRunes.blue}
  />,
  <MightiestKingdomElement
    key="purpleRune"
    iconNode={<ResourceIcon resourceType="purpleRune" />}
    value={statisticsData?.dragonRunes.purple}
  />,
  <MightiestKingdomElement
    key="goldRune"
    iconNode={<ResourceIcon resourceType="goldRune" />}
    value={statisticsData?.dragonRunes.gold}
  />,
]

const getElementsForWitch = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
    key="lightReagent"
    iconNode={<ResourceIcon resourceType="lightReagent" />}
    value={statisticsData?.witch.lightReagents}
  />,
  <MightiestKingdomElement
    key="strengthPotion"
    iconNode={<ResourceIcon resourceType="strengthPotion" />}
    value={statisticsData?.witch.greenPotions}
  />,
  <MightiestKingdomElement
    key="luckPotion"
    iconNode={<ResourceIcon resourceType="luckPotion" />}
    value={statisticsData?.witch.purplePotions}
  />,
]

const getElementsForBarracks = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
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
  <MightiestKingdomElement
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
  <MightiestKingdomElement
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
  <MightiestKingdomElement
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

const getElementsForTalents = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
    key="talentsBooks"
    iconNode={<ResourceIcon resourceType="talentBook" />}
    value={statisticsData?.barracksTalents.books}
  />,
  <MightiestKingdomElement
    key="talentsCrowns"
    iconNode={<ResourceIcon resourceType="talentCrown" />}
    value={statisticsData?.barracksTalents.oraclesCrowns}
  />,
]

const getElementsForBlacksmith = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
    key="hammers"
    iconNode={<ResourceIcon resourceType="hummer" />}
    value={statisticsData?.blacksmith.hammers}
  />,
]

const getElementsForGallery = (statisticsData?: CalculateMightiestKingdomResponse) => [
  <MightiestKingdomElement
    key="galleryShards"
    iconNode={<ResourceIcon resourceType="galleryShards" />}
    value={statisticsData?.gallery.shards}
  />,
]
