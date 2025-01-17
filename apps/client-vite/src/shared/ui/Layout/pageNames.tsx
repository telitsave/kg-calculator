import { FormattedMessage } from 'react-intl'

export type PagesType =
  | 'about'
  | 'myData'
  | 'inventory'
  | 'parameters'
  | 'heroesData'
  | 'heroesDistribution'
  | 'heroesTable'
  | 'calculators'
  | 'castle'
  | 'dragon'
  | 'witch'
  | 'ultimatePower'
  | 'barracks'
  | 'mightiestKingdom'
  | 'blacksmith'
  | 'gallery'
  | 'heroes'
  | 'spiritInvasion'
  | 'other'
  | 'settings'
  | 'serverSettings'
  | 'tables'

export const getPageKey = (pathname: string) => {
  const paths = pathname.split('/')
  let pathName = ''
  paths.forEach((path) => {
    if (!path) return

    pathName = path
  })

  return pathName as PagesType
}

export const getPageName = (pathname: string) => {
  switch (getPageKey(pathname)) {
    case 'about':
      return <FormattedMessage defaultMessage="О калькуляторе" />
    case 'myData':
      return <FormattedMessage defaultMessage="Мои ресурсы и параметры" />
    case 'inventory':
      return <FormattedMessage defaultMessage="Мои ресурсы" />
    case 'parameters':
      return <FormattedMessage defaultMessage="Мои параметры" />
    case 'heroesData':
      return <FormattedMessage defaultMessage="Мои герои" />
    case 'heroesDistribution':
      return <FormattedMessage defaultMessage="Распределение карт самовыбора" />
    case 'heroesTable':
      return <FormattedMessage defaultMessage="Таблица героев" />
    case 'calculators':
      return <FormattedMessage defaultMessage="Калькуляторы" />
    case 'castle':
      return <FormattedMessage defaultMessage="Калькулятор замка" />
    case 'dragon':
      return <FormattedMessage defaultMessage="Калькулятор дракона" />
    case 'witch':
      return <FormattedMessage defaultMessage="Калькулятор ведьмы" />
    case 'ultimatePower':
      return <FormattedMessage defaultMessage="Калькулятор экстремальной мощи" />
    case 'barracks':
      return <FormattedMessage defaultMessage="Калькулятор казармы" />
    case 'mightiestKingdom':
      return <FormattedMessage defaultMessage="Калькулятор сильнейшего королевства" />
    case 'blacksmith':
      return <FormattedMessage defaultMessage="Калькулятор кузнеца" />
    case 'gallery':
      return <FormattedMessage defaultMessage="Калькулятор галереи" />
    case 'heroes':
      return <FormattedMessage defaultMessage="Калькулятор героев" />
    case 'spiritInvasion':
      return <FormattedMessage defaultMessage="Калькулятор вторжения злых духов" />
    case 'other':
      return <FormattedMessage defaultMessage="Прочее" />
    case 'settings':
      return <FormattedMessage defaultMessage="Настройки" />
    case 'serverSettings':
      return <FormattedMessage defaultMessage="Серверные настройки" />
    case 'tables':
      return <FormattedMessage defaultMessage="Таблицы и гайды" />
    default:
      return ''
  }
}
