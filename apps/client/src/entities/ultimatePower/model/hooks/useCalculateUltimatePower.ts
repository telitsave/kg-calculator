import { useMutation } from '@tanstack/react-query'
import type { UltimatePowerTypes } from 'kg-calculator-typings'
import api from 'shared/api'


const useCalculateUltimatePower = (goalCastleLevel?: number) => {
  return useMutation({
    mutationKey: ['ultimatePower'],
    mutationFn: (types: UltimatePowerTypes[]) =>
      api.ultimatePower.calculateUltimatePower({
        types,
        goalCastleLevel,
      }),
  })
}

export default useCalculateUltimatePower
