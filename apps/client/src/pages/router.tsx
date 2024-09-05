import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from 'shared/ui/Layout'
import { UserInfo } from '../widgets/userInfo'
import { AboutPage } from './about'
import {
  BarracksCalculatorPage,
  BlacksmithPage,
  CastleCalculatorPage,
  DragonCalculatorPage,
  GalleryPage,
  HeroesCalculatorPage,
  MightiestKingdomPage,
  UltimatePowerPage,
  WitchCalculatorPage,
} from './calculator'
import Inventory from './inventory'
import { HeroesPage, ParametersPage } from './parameters'
import { ServerSettingsPage } from './serverSettings'
import { SpiritInvasionPage } from './spiritInvasionPage'

function getCookie(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()!.split(';').shift()
  return undefined
}

function isAuth() {
  const accessToken = localStorage.getItem('access-token')
  const profileId = getCookie('profileId')
  return !!accessToken && !!profileId
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout rightHeaderSlot={<UserInfo />} isAuth={isAuth()} />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/parameters',
        element: <ParametersPage />,
      },
      {
        path: '/heroes',
        element: <HeroesPage />,
      },
      {
        path: '/serverSettings',
        element: <ServerSettingsPage />,
      },
      {
        path: '/calculator',
        children: [
          {
            index: true,
            element: <Navigate to="/calculator/castle" />,
          },
          {
            path: '/calculator/castle',
            element: <CastleCalculatorPage />,
          },
          {
            path: '/calculator/dragon',
            element: <DragonCalculatorPage />,
          },
          {
            path: '/calculator/witch',
            element: <WitchCalculatorPage />,
          },
          {
            path: '/calculator/barracks',
            element: <BarracksCalculatorPage />,
          },
          {
            path: '/calculator/blacksmith',
            element: <BlacksmithPage />,
          },
          {
            path: '/calculator/gallery',
            element: <GalleryPage />,
          },
          {
            path: '/calculator/heroes',
            element: <HeroesCalculatorPage />,
          },
          {
            path: '/calculator/ultimatePower',
            element: <UltimatePowerPage />,
          },
          {
            path: '/calculator/mightiestKingdom',
            element: <MightiestKingdomPage />,
          },
        ],
      },
      {
        path: '/other',
        children: [
          {
            index: true,
            element: <Navigate to="/other/spiritInvasion" />,
          },
          {
            path: '/other/spiritInvasion',
            element: <SpiritInvasionPage />,
          },
        ],
      },
    ],
  },
])

export default router
