import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import type { UltimatePowerTypes } from 'kg-calculator-typings'

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
