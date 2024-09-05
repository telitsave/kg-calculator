import { useCallback } from 'react'
import type { ElementsType } from 'kg-calculator-typings'
import useParameters from './useParameters'


const useTalentParameter = (
  element: ElementsType,
  rank: number,
  param: 'small' | 'big',
): [number | undefined, (val: number) => void] => {
  const { talents, saveTalent } = useParameters()

  const handleSetTalent = useCallback(
    (value: number) => {
      saveTalent(element, rank, param, value)
    },
    [saveTalent],
  )

  return [talents !== undefined ? talents[`${element}_${rank}_${param}`] : undefined, handleSetTalent]
}

export default useTalentParameter
