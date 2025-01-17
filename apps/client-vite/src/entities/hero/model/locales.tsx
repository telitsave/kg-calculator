import type { ReactNode } from 'react'
import { FormattedMessage, type IntlShape } from 'react-intl'


export const SKILL_NAMES: Record<number, ReactNode> = {
  1: <FormattedMessage defaultMessage="Стремительный марш" />,
  2: <FormattedMessage defaultMessage="Груз" />,
  3: <FormattedMessage defaultMessage="Мастер-партизан" />,
  4: <FormattedMessage defaultMessage="Первая помощь" />,
  5: <FormattedMessage defaultMessage="Надзиратель" />,
  6: <FormattedMessage defaultMessage="Мастер сбора" />,
  7: <FormattedMessage defaultMessage="Мастер стрельбы" />,
  8: <FormattedMessage defaultMessage="Регенерация" />,
  9: <FormattedMessage defaultMessage="Противодействие монстрам" />,
  10: <FormattedMessage defaultMessage="Эксперт по пожарам" />,
  11: <FormattedMessage defaultMessage="Вдохновление" />,
}

export const SKILL_VALUE_LABELS: Record<number, ReactNode> = {
  1: <FormattedMessage defaultMessage="Скорость войск" />,
  2: <FormattedMessage defaultMessage="Грузоподъемность" />,
  3: <FormattedMessage defaultMessage="Мощь всех войск" />,
  4: <FormattedMessage defaultMessage="Скорость восстановления" />,
  5: <FormattedMessage defaultMessage="Добыча золота оффлайн" />,
  6: <FormattedMessage defaultMessage="Скорость сбора золота" />,
  7: <FormattedMessage defaultMessage="Мощь лучниц" />,
  8: <FormattedMessage defaultMessage="Восстановленных бойцов" />,
  9: <FormattedMessage defaultMessage="Сокращение трат ОД на монстров" />,
  10: <FormattedMessage defaultMessage="Мощь огненных магов" />,
  11: <FormattedMessage defaultMessage="Мощь гоблинов" />,
}

export const PLACE_LABELS = (intl: IntlShape): Record<number, string> => ({
  1: intl.formatMessage({ defaultMessage: 'Таверна (обычная вербовка)' }),
  2: intl.formatMessage({ defaultMessage: 'Таверна (продвинутая вербовка)' }),
  3: intl.formatMessage({ defaultMessage: 'Таверна (вербовка по показателям)' }),
  4: intl.formatMessage({ defaultMessage: 'Карты самовыбора' }),
  5: intl.formatMessage({ defaultMessage: 'VIP' }),
  6: intl.formatMessage({ defaultMessage: 'Аукцион' }),
  7: intl.formatMessage({ defaultMessage: 'Зал наград' }),
  8: intl.formatMessage({ defaultMessage: 'Обычная рулетка (ивент)' }),
  9: intl.formatMessage({ defaultMessage: 'Безумная рулетка (ивент)' }),
  10: intl.formatMessage({ defaultMessage: 'Хрустальный шар' }),
  11: intl.formatMessage({ defaultMessage: 'Колесо фортуны' }),
})
