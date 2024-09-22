import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Input, MantineProvider, TextInput, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SettingsQueue } from 'entities/calculationSettings'
import { HeroesQueue } from 'entities/hero'
import { ParametersQueue } from 'entities/parameter'
import { ResourcesQueue } from 'entities/resource'
import { ServerSettingsQueue } from 'entities/serverSettings'
import router from 'pages/router'
import AxiosService from 'shared/services/axiosService'
import './App.sass';


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
  AxiosService.init(process.env.REACT_APP_SERVER_URL as string)
  ResourcesQueue.queryClient = queryClient
  ParametersQueue.queryClient = queryClient
  SettingsQueue.queryClient = queryClient
  ServerSettingsQueue.queryClient = queryClient
  HeroesQueue.queryClient = queryClient

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
