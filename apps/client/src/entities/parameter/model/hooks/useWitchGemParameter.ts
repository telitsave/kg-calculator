import { useCallback } from 'react'
import useParameters from './useParameters'


const useWitchGemParameter = (rank: number, gem: string): [number | undefined, (val: number) => void] => {
  const { gems, saveGem } = useParameters()

  const handleSetGem = useCallback(
    (value: number) => {
      saveGem(rank, gem, value)
    },
    [saveGem],
  )

  return [gems !== undefined ? gems[`${rank}_${gem}`] : undefined, handleSetGem]
}

export default useWitchGemParameter
