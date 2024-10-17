import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from 'shared/ui/Layout'
import { UserInfo } from '../widgets/userInfo'
import { AboutPage } from './about'
import {
  BarracksCalculatorPage,
  BlacksmithPage,
  CalculatorsPage,
  CastleCalculatorPage,
  DragonCalculatorPage,
  GalleryPage,
  HeroesCalculatorPage,
  MightiestKingdomPage,
  SpiritInvasionPage,
  UltimatePowerPage,
  WitchCalculatorPage,
} from './calculator'
import {
  HeroesDistributionPage,
  HeroesPage,
  HeroesTablePage,
  InventoryPage,
  MyDataPage,
  ParametersPage,
} from './myData'
import { ServerSettingsPage, SettingsPage } from './settings'
import { HeroesTablePage as CommonHeroesTablePage, TablesPage } from './tables'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout rightHeaderSlot={<UserInfo />} />,
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
        path: '/myData',
        element: <MyDataPage />,
      },
      {
        path: '/myData/inventory',
        element: <InventoryPage />,
      },
      {
        path: '/myData/parameters',
        element: <ParametersPage />,
      },
      {
        path: '/myData/heroesData',
        element: <HeroesPage />,
      },
      {
        path: '/myData/heroesDistribution',
        element: <HeroesDistributionPage />,
      },
      {
        path: '/myData/heroesTable',
        element: <HeroesTablePage />,
      },
      {
        path: '/calculators',
        element: <CalculatorsPage />,
      },
      {
        path: '/calculators/castle',
        element: <CastleCalculatorPage />,
      },
      {
        path: '/calculators/dragon',
        element: <DragonCalculatorPage />,
      },
      {
        path: '/calculators/witch',
        element: <WitchCalculatorPage />,
      },
      {
        path: '/calculators/barracks',
        element: <BarracksCalculatorPage />,
      },
      {
        path: '/calculators/blacksmith',
        element: <BlacksmithPage />,
      },
      {
        path: '/calculators/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/calculators/heroes',
        element: <HeroesCalculatorPage />,
      },
      {
        path: '/calculators/ultimatePower',
        element: <UltimatePowerPage />,
      },
      {
        path: '/calculators/mightiestKingdom',
        element: <MightiestKingdomPage />,
      },
      {
        path: '/calculators/spiritInvasion',
        element: <SpiritInvasionPage />,
      },
      {
        path: '/tables',
        element: <TablesPage />,
      },
      {
        path: '/tables/heroesTable',
        element: <CommonHeroesTablePage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/settings/serverSettings',
        element: <ServerSettingsPage />,
      },
    ],
  },
])

export default router
