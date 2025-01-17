import { type IntlShape } from 'react-intl'
import { PLACE_LABELS } from '@entities/hero'


export const filterElementsElement = (intl: IntlShape) => [
  {
    value: 'bow',
    label: intl.formatMessage({ defaultMessage: 'Лучники' }),
  },
  {
    value: 'fire',
    label: intl.formatMessage({ defaultMessage: 'Огонь' }),
  },
  {
    value: 'ice',
    label: intl.formatMessage({ defaultMessage: 'Лед' }),
  },
  {
    value: 'poison',
    label: intl.formatMessage({ defaultMessage: 'Гоблины' }),
  },
]

export const filterElementsRank = (intl: IntlShape) => [
  {
    value: 'n',
    label: intl.formatMessage({ defaultMessage: 'N ранг' }),
  },
  {
    value: 'r',
    label: intl.formatMessage({ defaultMessage: 'R ранг' }),
  },
  {
    value: 'sr',
    label: intl.formatMessage({ defaultMessage: 'SR ранг' }),
  },
  {
    value: 'ssr',
    label: intl.formatMessage({ defaultMessage: 'SSR ранг' }),
  },
]

export const filterElementsSkills = (intl: IntlShape) => [
  {
    value: 'skill_speed',
    label: intl.formatMessage({ defaultMessage: 'Скорость войск' }),
  },
  {
    value: 'skill_power',
    label: intl.formatMessage({ defaultMessage: 'Мощь войск' }),
  },
  {
    value: 'skill_heal',
    label: intl.formatMessage({ defaultMessage: 'Лечение' }),
  },
  {
    value: 'skill_regeneration',
    label: intl.formatMessage({ defaultMessage: 'Регенерация' }),
  },
  {
    value: 'skill_actionPoints',
    label: intl.formatMessage({ defaultMessage: 'Сокращение ОД' }),
  },
  {
    value: 'skill_weight',
    label: intl.formatMessage({ defaultMessage: 'Грузоподъемность' }),
  },
  {
    value: 'skill_offlineGold',
    label: intl.formatMessage({ defaultMessage: 'Оффлайн золото' }),
  },
  {
    value: 'skill_collectGold',
    label: intl.formatMessage({ defaultMessage: 'Сбор золота' }),
  },
]

export const filterElementsStars = (intl: IntlShape) => [
  {
    value: '0',
    label: intl.formatMessage({ defaultMessage: '0 звезд' }),
  },
  {
    value: '1',
    label: intl.formatMessage({ defaultMessage: '1 звезда' }),
  },
  {
    value: '2',
    label: intl.formatMessage({ defaultMessage: '2 звезды' }),
  },
  {
    value: '3',
    label: intl.formatMessage({ defaultMessage: '3 звезды' }),
  },
  {
    value: '4',
    label: intl.formatMessage({ defaultMessage: '4 звезды' }),
  },
  {
    value: '5',
    label: intl.formatMessage({ defaultMessage: '5 звезд' }),
  },
]

export const filterElementsPlaces = (intl: IntlShape) => [
  {
    value: '1',
    label: PLACE_LABELS(intl)[1],
  },
  {
    value: '2',
    label: PLACE_LABELS(intl)[2],
  },
  {
    value: '3',
    label: PLACE_LABELS(intl)[3],
  },
  {
    value: '4',
    label: PLACE_LABELS(intl)[4],
  },
  {
    value: '5',
    label: PLACE_LABELS(intl)[5],
  },
  {
    value: '6',
    label: PLACE_LABELS(intl)[6],
  },
  {
    value: '7',
    label: PLACE_LABELS(intl)[7],
  },
  {
    value: '8',
    label: PLACE_LABELS(intl)[8],
  },
  {
    value: '9',
    label: PLACE_LABELS(intl)[9],
  },
  {
    value: '10',
    label: PLACE_LABELS(intl)[10],
  },
  {
    value: '11',
    label: PLACE_LABELS(intl)[11],
  },
]
