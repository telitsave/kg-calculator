import { useCallback } from 'react'
import type { ParameterTypes } from 'kg-calculator-typings'
import useParameters from './useParameters'


const useParameter = (paramType: ParameterTypes): [number | undefined, (val: number | string) => void] => {
  const { params, saveParameter } = useParameters()

  const handleSetResource = useCallback(
    (value: number | string) => {
      saveParameter(paramType, value)
    },
    [paramType, saveParameter],
  )

  return [params !== undefined ? params[paramType] : undefined, handleSetResource]
}

export default useParameter
