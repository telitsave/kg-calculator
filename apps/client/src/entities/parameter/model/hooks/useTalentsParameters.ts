import { useMemo } from 'react'
import { TalentsParameters } from 'shared/api'
import { BarracksElements } from '../types'
import useTalentParameter from './useTalentParameter'


const useTalentsParametersByRank = (element: BarracksElements, rank: number) => {
  const booksCells = useTalentParameter(element, `rank${rank}`, 'books')
  const crownsCells = useTalentParameter(element, `rank${rank}`, 'crowns')

  return useMemo(
    () => ({
      read: {
        booksCells: booksCells[0],
        crownsCells: crownsCells[0],
      },
      write: {
        booksCells: booksCells[1],
        crownsCells: crownsCells[1],
      },
      readWrite: {
        booksCells: booksCells,
        crownsCells: crownsCells,
      },
    }),
    [booksCells, crownsCells],
  )
}

const useTalentsParametersByElement = (element: BarracksElements) => {
  const rank1 = useTalentsParametersByRank(element, 1)
  const rank2 = useTalentsParametersByRank(element, 2)
  const rank3 = useTalentsParametersByRank(element, 3)
  const rank4 = useTalentsParametersByRank(element, 4)
  const rank5 = useTalentsParametersByRank(element, 5)
  const rank6 = useTalentsParametersByRank(element, 6)
  const rank7 = useTalentsParametersByRank(element, 7)
  const rank8 = useTalentsParametersByRank(element, 8)
  const rank9 = useTalentsParametersByRank(element, 9)
  const rank10 = useTalentsParametersByRank(element, 10)

  return useMemo(
    () => ({
      read: {
        rank: {
          1: rank1.read,
          2: rank2.read,
          3: rank3.read,
          4: rank4.read,
          5: rank5.read,
          6: rank6.read,
          7: rank7.read,
          8: rank8.read,
          9: rank9.read,
          10: rank10.read,
        },
      },
      write: {
        rank: {
          1: rank1.write,
          2: rank2.write,
          3: rank3.write,
          4: rank4.write,
          5: rank5.write,
          6: rank6.write,
          7: rank7.write,
          8: rank8.write,
          9: rank9.write,
          10: rank10.write,
        },
      },
      readWrite: {
        rank: {
          1: rank1,
          2: rank2,
          3: rank3,
          4: rank4,
          5: rank5,
          6: rank6,
          7: rank7,
          8: rank8,
          9: rank9,
          10: rank10,
        },
      },
    }),
    [rank1, rank10, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9],
  )
}

const useTalentsParameters = () => {
  const bowTalents = useTalentsParametersByElement('bow')
  const fireTalents = useTalentsParametersByElement('fire')
  const iceTalents = useTalentsParametersByElement('ice')
  const poisonTalents = useTalentsParametersByElement('poison')

  return useMemo(
    () => ({
      read: {
        bow: bowTalents.read,
        fire: fireTalents.read,
        ice: iceTalents.read,
        poison: poisonTalents.read,
      } as TalentsParameters,
      write: {
        bow: bowTalents.write,
        fire: fireTalents.write,
        ice: iceTalents.write,
        poison: poisonTalents.write,
      },
      readWrite: {
        bow: bowTalents,
        fire: fireTalents,
        ice: iceTalents,
        poison: poisonTalents,
      },
    }),
    [bowTalents, fireTalents, iceTalents, poisonTalents],
  )
}

export default useTalentsParameters
