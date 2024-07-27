import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from 'shared/ui/Layout'
import {
  BarracksCalculatorPage,
  BlacksmithPage,
  CastleCalculatorPage,
  DragonCalculatorPage,
  ExtremePowerPage,
  GalleryPage,
  HeroesCalculatorPage,
  MightiestKingdomPage,
  WitchCalculatorPage,
} from './calculator'
import Inventory from './inventory'
import { ParametersPage } from './parameters'
import HeroesPage from './parameters/ui/HeroesPage'
import { ServerSettingsPage } from './serverSettings'
import { SpiritInvasionPage } from './spiritInvasionPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/inventory" />,
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
            path: '/calculator/extremePower',
            element: <ExtremePowerPage />,
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
