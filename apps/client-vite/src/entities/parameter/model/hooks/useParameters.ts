import ParametersQueue from '../ParametersQueue'
import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'
import type { ElementsType, ParameterTypes } from 'kg-calculator-typings'
import { useCallback } from 'react'

const useParameters = () => {
  const { data } = useQuery({
    queryKey: ['parameters'],
    queryFn: api.parameters.getParameters,
  })

  const saveParameter = useCallback((parameterType: ParameterTypes, value: number | string) => {
    ParametersQueue.setParameter(parameterType, value)
  }, [])

  const saveGem = useCallback(
    (rank: number, gem: string, value: number | string) => {
      ParametersQueue.gems = data?.gems || {}
      ParametersQueue.setGem(rank, gem, value)
    },
    [data?.gems],
  )

  const saveTalent = useCallback(
    (element: ElementsType, rank: number, talentType: 'small' | 'big', value: string | number) => {
      ParametersQueue.talents = {
        ...(data?.talents || {}),
        ...ParametersQueue.talents,
      }
      ParametersQueue.setTalent(element, rank, talentType, value)
    },
    [data?.talents],
  )

  return {
    params: data?.params,
    gems: data?.gems,
    talents: data?.talents,
    saveParameter,
    saveGem,
    saveTalent,
  }
}

export default useParameters
