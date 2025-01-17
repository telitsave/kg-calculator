import { type FC } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useIntl } from 'react-intl'
import { SettingsQueue } from '@entities/calculationSettings'
import { HeroesQueue } from '@entities/hero'
import { ParametersQueue } from '@entities/parameter'
import { ResourcesQueue } from '@entities/resource'
import { ServerSettingsQueue } from '@entities/serverSettings'


const ServicesConfig: FC = () => {
  const queryClient = useQueryClient()
  const intl = useIntl()
  ResourcesQueue.queryClient = queryClient
  ParametersQueue.queryClient = queryClient
  SettingsQueue.queryClient = queryClient
  ServerSettingsQueue.queryClient = queryClient
  HeroesQueue.queryClient = queryClient
  ResourcesQueue.intl = intl
  ParametersQueue.intl = intl
  SettingsQueue.intl = intl
  ServerSettingsQueue.intl = intl
  HeroesQueue.intl = intl

  return null
}

export default ServicesConfig
