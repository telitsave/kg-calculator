import { Resources } from 'shared/api'
import useResource from './useResource'

const useResources = (): Resources => {
  return {
    gold: useResource('gold')[0],
    castle: {
      stone: useResource('stone')[0],
      wood: useResource('wood')[0],
      steel: useResource('steel')[0],
      boxes: useResource('customConstructionItem')[0],
    },
    dragonsRunes: {
      green: useResource('greenRune')[0],
      blue: useResource('blueRune')[0],
      purple: useResource('purpleRune')[0],
      gold: useResource('goldRune')[0],
      boxes: useResource('runesBox')[0],
    },
    blacksmith: {
      hammers: useResource('hummer')[0],
    },
    witch: {
      lightReagents: useResource('lightReagent')[0],
      purpleWitchPotion: useResource('luckPotion')[0],
      greenWitchPotion: useResource('strengthPotion')[0],
    },
    talents: {
      books: useResource('talentBook')[0],
      oraclesCrowns: useResource('talentCrown')[0],
    },
    barracksBooks: {
      bow: {
        rank1: useResource('bookBow1')[0],
        rank2: useResource('bookBow2')[0],
        rank3: useResource('bookBow3')[0],
        rank4: useResource('bookBow4')[0],
      },
      fire: {
        rank1: useResource('bookFire1')[0],
        rank2: useResource('bookFire2')[0],
        rank3: useResource('bookFire3')[0],
        rank4: useResource('bookFire4')[0],
      },
      ice: {
        rank1: useResource('bookIce1')[0],
        rank2: useResource('bookIce2')[0],
        rank3: useResource('bookIce3')[0],
        rank4: useResource('bookIce4')[0],
      },
      poison: {
        rank1: useResource('bookPoison1')[0],
        rank2: useResource('bookPoison2')[0],
        rank3: useResource('bookPoison3')[0],
        rank4: useResource('bookPoison4')[0],
      },
      random: useResource('bookRandom')[0],
    },
    galleryShards: useResource('galleryShards')[0],
    heroesCards: {
      n: 0,
      ssr: 0,
      sr: 0,
      r: 0,
    },
  }
}

export default useResources
