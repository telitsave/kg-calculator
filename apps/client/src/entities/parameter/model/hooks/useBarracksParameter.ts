import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import useParameter from './useParameter'


const useBarracksParameter = (element: ElementsType) => {
  const bowLevel = useParameter('barracksBowLevel')
  const bowRank = useParameter('barracksBowRank')
  const fireLevel = useParameter('barracksFireLevel')
  const fireRank = useParameter('barracksFireRank')
  const iceLevel = useParameter('barracksIceLevel')
  const iceRank = useParameter('barracksIceRank')
  const poisonLevel = useParameter('barracksPoisonLevel')
  const poisonRank = useParameter('barracksPoisonRank')
  switch (element) {
    case 'bow':
      return {
        rank: bowRank,
        level: bowLevel,
      }
    case 'fire':
      return {
        rank: fireRank,
        level: fireLevel,
      }
    case 'ice':
      return {
        rank: iceRank,
        level: iceLevel,
      }
    case 'poison':
      return {
        rank: poisonRank,
        level: poisonLevel,
      }
  }
}

export default useBarracksParameter
