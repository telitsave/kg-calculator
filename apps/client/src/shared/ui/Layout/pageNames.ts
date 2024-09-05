export const getPageName = (pathname: string, withParents = false) => {
  const paths = pathname.split('/')
  let pathsNames: string[] = []
  paths.forEach((path) => {
    if (!path) return

    if (withParents) {
      pathsNames.push(PAGE_NAMES[path])
    } else {
      pathsNames = [PAGE_NAMES[path]]
    }
  })

  return pathsNames.join(' - ')
}

export const PAGE_NAMES: Record<string, string> = {
  about: 'О калькуляторе',
  inventory: 'Инвентарь',
  parameters: 'Параметры персонажа',
  calculator: 'Калькуляторы',
  castle: 'Замок',
  dragon: 'Руны дракона',
  witch: 'Ведьма',
  ultimatePower: 'Экстремальная мощь',
  barracks: 'Казарма',
  mightiestKingdom: 'Сильнейшее королевство',
  blacksmith: 'Кузнец',
  gallery: 'Галерея',
  heroes: 'Герои',
  spiritInvasion: 'Вторжение злых духов',
  other: 'Прочее',
  serverSettings: 'Серверные настройки',
}
