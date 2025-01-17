import { FC, useCallback, useMemo, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Input, MantineProvider, TextInput, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import { SettingsQueue } from '@entities/calculationSettings'
import { HeroesQueue } from '@entities/hero'
import { ParametersQueue } from '@entities/parameter'
import { ResourcesQueue } from '@entities/resource'
import { ServerSettingsQueue } from '@entities/serverSettings'
import { LocaleContext, type LocaleContextType } from '@features/setLocale'
import router from '@pages/router'
import AxiosService from '@shared/services/axiosService'
import LocaleService from '@shared/services/localeService'
import './App.sass'
import ServicesConfig from './ServicesConfig'
import EnMessages from './lang/en.json'
import RuMessages from './lang/ru.json'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

const theme = createTheme({
  components: {
    Input: Input.extend({
      vars: () => ({
        wrapper: {
          '--input-fz': '16px',
        },
      }),
      defaultProps: {
        size: 'md',
      },
    }),
    TextInput: TextInput.extend({
      vars: () => ({
        wrapper: {
          '--input-fz': '16px',
        },
      }),
      defaultProps: {
        size: 'md',
      },
    }),
  },
})

const App: FC = () => {
  AxiosService.init(import.meta.env.VITE_SERVER_URL as string)
  ResourcesQueue.queryClient = queryClient
  ParametersQueue.queryClient = queryClient
  SettingsQueue.queryClient = queryClient
  ServerSettingsQueue.queryClient = queryClient
  HeroesQueue.queryClient = queryClient
  const [localeService] = useState(new LocaleService())
  const [currentLocale, setCurrentLocale] = useState<'ru' | 'en'>(localeService.currentLocale)

  const handleChangeLocale = useCallback(
    (locale: 'ru' | 'en') => {
      localeService.setLocale(locale)
      setCurrentLocale(locale)
    },
    [localeService],
  )

  const localeContext = useMemo<LocaleContextType>(
    () => ({
      locale: currentLocale,
      setLocale: handleChangeLocale,
    }),
    [currentLocale, handleChangeLocale],
  )

  return (
    <MantineProvider theme={theme}>
      <LocaleContext.Provider value={localeContext}>
        <IntlProvider locale={currentLocale} messages={currentLocale === 'ru' ? RuMessages : EnMessages}>
          <Notifications />
          <QueryClientProvider client={queryClient}>
            <ServicesConfig />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </IntlProvider>
      </LocaleContext.Provider>
    </MantineProvider>
  )
}

export default App
