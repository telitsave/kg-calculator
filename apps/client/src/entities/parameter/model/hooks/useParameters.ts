import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { ElementsType, ParameterTypes } from 'kg-calculator-typings'
import api from 'shared/api'
import ParametersQueue from '../ParametersQueue'


const useParameters = () => {
  const { data } = useQuery({
    queryKey: ['parameters'],
    queryFn: api.parameters.getParameters,
  })

  const saveParameter = useCallback((parameterType: ParameterTypes, value: number) => {
    ParametersQueue.setParameter(parameterType, value)
  }, [])

  const saveGem = useCallback(
    (rank: number, gem: string, value: number) => {
      ParametersQueue.gems = data?.gems || {}
      ParametersQueue.setGem(rank, gem, value)
    },
    [data?.gems],
  )

  const saveTalent = useCallback(
    (element: ElementsType, rank: number, talentType: 'small' | 'big', value: number) => {
      console.log(data?.talents)
      console.log(ParametersQueue.talents)
      ParametersQueue.talents = {
        ...(data?.talents || {}),
        ...ParametersQueue.talents,
      }
      console.log(ParametersQueue.talents)
      ParametersQueue.setTalent(element, rank, talentType, value)
      console.log(ParametersQueue.talents)
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
