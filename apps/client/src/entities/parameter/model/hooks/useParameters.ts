import { Parameters } from 'shared/api'
import useParameter from './useParameter'
import useTalentsParameters from './useTalentsParameters'
import useWitchGemParameters from './useWitchGemParameters'


const useParameters = (): Parameters => {
  const gems = useWitchGemParameters()
  return {
    dragonEmblems: {
      green: useParameter('greenEmblem')[0],
      blue: useParameter('blueEmblem')[0],
      purple: useParameter('purpleEmblem')[0],
      gold: useParameter('goldEmblem')[0],
    },
    castle: {
      level: useParameter('castleLevel')[0],
    },
    witch: {
      lightLevel: useParameter('lightPower')[0],
      darkLevel: useParameter('darkPower')[0],
      gems,
    },
    barracks: {
      bowLevel: useParameter('barracksBowLevel')[0],
      bowRank: useParameter('barracksBowRank')[0],
      fireLevel: useParameter('barracksFireLevel')[0],
      fireRank: useParameter('barracksFireRank')[0],
      iceLevel: useParameter('barracksIceLevel')[0],
      iceRank: useParameter('barracksIceRank')[0],
      poisonLevel: useParameter('barracksPoisonLevel')[0],
      poisonRank: useParameter('barracksPoisonRank')[0],
    },
    talents: useTalentsParameters().read,
    blacksmith: {
      level: useParameter('blacksmithLevel')[0],
    },
    gallery: {
      step: useParameter('galleryStep')[0],
      level: useParameter('galleryLevel')[0],
    },
  }
}

export default useParameters
