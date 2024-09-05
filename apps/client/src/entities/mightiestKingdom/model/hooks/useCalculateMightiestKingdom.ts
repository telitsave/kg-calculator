import { useMutation } from '@tanstack/react-query'
import type { MightiestKingdomTypes } from 'kg-calculator-typings'
import api from 'shared/api'


const useCalculateMightiestKingdom = () => {
  return useMutation({
    mutationKey: ['mightiestKingdom'],
    mutationFn: (types: MightiestKingdomTypes[]) =>
      api.mightiestKingdom.calculateMightiestKingdom({
        types,
      }),
  })
}

export default useCalculateMightiestKingdom
