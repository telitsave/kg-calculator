import { FC, memo } from 'react'
import cx from 'classnames'
import { Divider, Flex, Text, Tooltip } from '@mantine/core'
import type { CalculateUltimatePowerResponse } from 'kg-calculator-typings'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { UltimatePowerIcon } from '@shared/assets/icons'
import TypeHelper from '@shared/helpers/typeHelper'
import { ResourceIcon } from '../../../resource'
import UltimatePowerElement from '../UltimatePowerElement'
import UltimatePowerModule from '../UltimatePowerModule'
import css from './styles.module.sass'


interface Props {
  className?: string
  data?: CalculateUltimatePowerResponse
  /** @default false */
  showEmpty?: boolean
}

const UltimatePowerTotal: FC<Props> = memo(({ className, data, showEmpty = false }) => (
  <Flex className={cx(css.root, className)} direction="column" gap={8}>
    <Flex gap={8} align="center" justify="space-between">
      <Flex gap={8} align="center">
        <Tooltip label={<FormattedMessage defaultMessage="Очки экстремальной мощи" />}>
          <UltimatePowerIcon />
        </Tooltip>
        <Text>
          <FormattedMessage defaultMessage="Всего очков: " />
        </Text>
      </Flex>
      <Text fw={700}>{TypeHelper.isNumber(data?.total) ? <FormattedNumber value={data.total} /> : '-'}</Text>
    </Flex>
    <Divider size="md" />
    {(data || showEmpty) && (
      <Flex className={css.modules} direction="column" gap={4}>
        {((data && data.heroesResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.heroesResources_total) || 0}
            title={<FormattedMessage defaultMessage="Карточки героев" />}
            elements={[
              <UltimatePowerElement
                key="heroesResources_n"
                value={data?.heroesResources_n}
                iconNode={<ResourceIcon resourceType="heroesResources_n" />}
              />,
              <UltimatePowerElement
                key="heroesResources_r"
                value={data?.heroesResources_r}
                iconNode={<ResourceIcon resourceType="heroesResources_r" />}
              />,
              <UltimatePowerElement
                key="heroesResources_sr"
                value={data?.heroesResources_sr}
                iconNode={<ResourceIcon resourceType="heroesResources_sr" />}
              />,
              <UltimatePowerElement
                key="heroesResources_ssr"
                value={data?.heroesResources_ssr}
                iconNode={<ResourceIcon resourceType="heroesResources_ssr" />}
              />,
            ]}
          />
        )}
        {((data && data.barracksResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.barracksResources_total) || 0}
            title={<FormattedMessage defaultMessage="Казарма и таланты" />}
            elements={[
              <UltimatePowerElement
                key="barracksResources_1"
                value={data?.barracksResources_1}
                iconNode={
                  <Flex>
                    <ResourceIcon resourceType="barracksResources_bow_1" />
                    <ResourceIcon resourceType="barracksResources_fire_1" />
                    <ResourceIcon resourceType="barracksResources_ice_1" />
                    <ResourceIcon resourceType="barracksResources_poison_1" />
                  </Flex>
                }
              />,
              <UltimatePowerElement
                key="barracksResources_2"
                value={data?.barracksResources_2}
                iconNode={
                  <Flex>
                    <ResourceIcon resourceType="barracksResources_bow_2" />
                    <ResourceIcon resourceType="barracksResources_fire_2" />
                    <ResourceIcon resourceType="barracksResources_ice_2" />
                    <ResourceIcon resourceType="barracksResources_poison_2" />
                  </Flex>
                }
              />,
              <UltimatePowerElement
                key="barracksResources_3"
                value={data?.barracksResources_3}
                iconNode={
                  <Flex>
                    <ResourceIcon resourceType="barracksResources_bow_3" />
                    <ResourceIcon resourceType="barracksResources_fire_3" />
                    <ResourceIcon resourceType="barracksResources_ice_3" />
                    <ResourceIcon resourceType="barracksResources_poison_3" />
                  </Flex>
                }
              />,
              <UltimatePowerElement
                key="barracksResources_4"
                value={data?.barracksResources_4}
                iconNode={
                  <Flex>
                    <ResourceIcon resourceType="barracksResources_bow_4" />
                    <ResourceIcon resourceType="barracksResources_fire_4" />
                    <ResourceIcon resourceType="barracksResources_ice_4" />
                    <ResourceIcon resourceType="barracksResources_poison_4" />
                  </Flex>
                }
              />,
              <UltimatePowerElement
                key="talentsResources_books"
                value={data?.talentsResources_books}
                iconNode={<ResourceIcon resourceType="talentsResources_books" />}
              />,
              <UltimatePowerElement
                key="talentsResources_oraclesCrowns"
                value={data?.talentsResources_oraclesCrowns}
                iconNode={<ResourceIcon resourceType="talentsResources_oraclesCrowns" />}
              />,
            ]}
          />
        )}
        {((data && data.dragonResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.dragonResources_total) || 0}
            title={<FormattedMessage defaultMessage="Руны дракона" />}
            elements={[
              <UltimatePowerElement
                key="dragonResources_green"
                value={data?.dragonResources_green}
                iconNode={<ResourceIcon resourceType="dragonResources_green" />}
              />,
              <UltimatePowerElement
                key="dragonResources_blue"
                value={data?.dragonResources_blue}
                iconNode={<ResourceIcon resourceType="dragonResources_blue" />}
              />,
              <UltimatePowerElement
                key="dragonResources_purple"
                value={data?.dragonResources_purple}
                iconNode={<ResourceIcon resourceType="dragonResources_purple" />}
              />,
              <UltimatePowerElement
                key="dragonResources_gold"
                value={data?.dragonResources_gold}
                iconNode={<ResourceIcon resourceType="dragonResources_gold" />}
              />,
            ]}
          />
        )}
        {((data && data.castleResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.castleResources_total) || 0}
            title={<FormattedMessage defaultMessage="Замок" />}
            elements={[
              <UltimatePowerElement
                key="castleResources_stone"
                value={data?.castleResources_stone}
                iconNode={<ResourceIcon resourceType="castleResources_stone" />}
              />,
              <UltimatePowerElement
                key="castleResources_wood"
                value={data?.castleResources_wood}
                iconNode={<ResourceIcon resourceType="castleResources_wood" />}
              />,
              <UltimatePowerElement
                key="castleResources_steel"
                value={data?.castleResources_steel}
                iconNode={<ResourceIcon resourceType="castleResources_steel" />}
              />,
            ]}
          />
        )}
        {((data && data.witchResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.witchResources_total) || 0}
            title={<FormattedMessage defaultMessage="Ведьма" />}
            elements={[
              <UltimatePowerElement
                key="witchResources_lightReagents"
                value={data?.witchResources_lightReagents}
                iconNode={<ResourceIcon resourceType="witchResources_lightReagents" />}
              />,
              <UltimatePowerElement
                key="witchResources_greenWitchPotion"
                value={data?.witchResources_greenWitchPotion}
                iconNode={<ResourceIcon resourceType="witchResources_greenWitchPotion" />}
              />,
              <UltimatePowerElement
                key="witchResources_purpleWitchPotion"
                value={data?.witchResources_purpleWitchPotion}
                iconNode={<ResourceIcon resourceType="witchResources_purpleWitchPotion" />}
              />,
            ]}
          />
        )}
        {((data && data.blacksmithResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.blacksmithResources_total) || 0}
            title={<FormattedMessage defaultMessage="Кузнец" />}
            elements={[
              <UltimatePowerElement
                key="blacksmithResources_hammers"
                value={data?.blacksmithResources_hammers}
                iconNode={<ResourceIcon resourceType="blacksmithResources_hammers" />}
              />,
            ]}
          />
        )}
        {((data && data.galleryResources_total > 0) || showEmpty) && (
          <UltimatePowerModule
            value={(data && data.galleryResources_total) || 0}
            title={<FormattedMessage defaultMessage="Галерея" />}
            elements={[
              <UltimatePowerElement
                key="galleryResources_shards"
                value={data?.galleryResources_shards}
                iconNode={<ResourceIcon resourceType="galleryResources_shards" />}
              />,
            ]}
          />
        )}
      </Flex>
    )}
  </Flex>
))

export default UltimatePowerTotal
