import React, { FC, memo } from 'react'
import cx from 'classnames'
import { Divider, Text, Tooltip } from '@mantine/core'
import { CalculateExtremePowerResponse } from 'shared/api'
import { ExtremePowerIcon } from 'shared/assets/icons'
import TypeHelper from 'shared/helpers/typeHelper'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'
import { getModuleByType } from './utils'


interface Props {
  className?: string
  data?: CalculateExtremePowerResponse
  /** @default false */
  showEmpty?: boolean
}

const ExtremePowerTotal: FC<Props> = memo(({ className, data, showEmpty = false }) => (
  <Flexbox className={cx(css.root, className)} flexDirection="column" gap={8}>
    <Flexbox gap={8} alignItems="center" justifyContent="space-between">
      <Flexbox gap={8} alignItems="center">
        <Tooltip label="Очки экстремальной мощи">
          <ExtremePowerIcon />
        </Tooltip>
        <Text>Всего очков: </Text>
      </Flexbox>
      <Text fw={700}>{TypeHelper.isNumber(data?.total) ? data?.total.toLocaleString('ru') : '-'}</Text>
    </Flexbox>
    <Divider size="md" />
    {(data || showEmpty) && (
      <Flexbox className={css.modules} flexDirection="column" gap={4}>
        {getModuleByType('heroesCards', data, showEmpty)}
        {getModuleByType('barracksBooks', data, showEmpty)}
        {getModuleByType('dragonRunes', data, showEmpty)}
        {getModuleByType('barracksTalents', data, showEmpty)}
        {getModuleByType('castle', data, showEmpty)}
        {getModuleByType('witch', data, showEmpty)}
        {getModuleByType('blacksmith', data, showEmpty)}
        {getModuleByType('gallery', data, showEmpty)}
      </Flexbox>
    )}
  </Flexbox>
))

export default ExtremePowerTotal
