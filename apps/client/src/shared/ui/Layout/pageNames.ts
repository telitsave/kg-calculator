export const getPageName = (pathname: string) => {
  const paths = pathname.split('/')
  let pathName: string = ''
  paths.forEach((path) => {
    if (!path) return

    pathName = PAGE_NAMES[path]
  })

  return pathName
}

export const PAGE_NAMES: Record<string, string> = {
  about: 'О калькуляторе',
  myData: 'Мои ресурсы и параметры',
  inventory: 'Мои ресурсы',
  parameters: 'Мои параметры',
  heroesData: 'Мои герои',
  heroesDistribution: 'Распределение карт самовыбора',
  heroesTable: 'Таблица героев',
  calculators: 'Калькуляторы',
  castle: 'Калькулятор замка',
  dragon: 'Калькулятор дракона',
  witch: 'Калькулятор ведьмы',
  ultimatePower: 'Калькулятор экстремальной мощи',
  barracks: 'Калькулятор казармы',
  mightiestKingdom: 'Калькулятор сильнейшего королевства',
  blacksmith: 'Калькулятор кузнеца',
  gallery: 'Калькулятор галереи',
  heroes: 'Калькулятор героев',
  spiritInvasion: 'Калькулятор вторжения злых духов',
  other: 'Прочее',
  settings: 'Настройки',
  serverSettings: 'Серверные настройки',
  tables: 'Таблицы и гайды',
}
