import { FC, memo, useMemo } from 'react'
import { Tooltip } from '@mantine/core'
import type { ItemTypes } from 'kg-calculator-typings'
import { useIntl } from 'react-intl'
import { DragonEqupIcon, WeaponIcon, WitchGemsIcon } from '@shared/assets/icons'
import BeastIcon from '@shared/assets/icons/BeastIcon'
import { getItemLabels } from '../../model/locales'


interface Props {
  className?: string
  itemType: ItemTypes
}

const ItemIcon: FC<Props> = memo(({itemType}) => {
  const intl = useIntl()
  const labels: Record<ItemTypes, string> = useMemo(() => getItemLabels(intl), [intl])
  const tooltipLabel = labels[itemType]
  switch (itemType) {
    case 'dragonEqip_t1':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={1}/>
        </Tooltip>
      )
    case 'dragonEqip_t2':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={2}/>
        </Tooltip>
      )
    case 'dragonEqip_t3':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={3}/>
        </Tooltip>
      )
    case 'dragonEqip_t4':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={4}/>
        </Tooltip>
      )
    case 'dragonEqip_t5':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={5}/>
        </Tooltip>
      )
    case 'dragonEqip_t6':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={6}/>
        </Tooltip>
      )
    case 'dragonEqip_t7':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={7}/>
        </Tooltip>
      )
    case 'dragonEqip_t8':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={8}/>
        </Tooltip>
      )
    case 'dragonEqip_t9':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={9}/>
        </Tooltip>
      )
    case 'dragonEqip_t10':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={10}/>
        </Tooltip>
      )
    case 'dragonEqip_t11':
      return (
        <Tooltip label={tooltipLabel}>
          <DragonEqupIcon rank={11}/>
        </Tooltip>
      )
    case 'weaponEqip_t1':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={1}/>
        </Tooltip>
      )
    case 'weaponEqip_t2':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={2}/>
        </Tooltip>
      )
    case 'weaponEqip_t3':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={3}/>
        </Tooltip>
      )
    case 'weaponEqip_t4':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={4}/>
        </Tooltip>
      )
    case 'weaponEqip_t5':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={5}/>
        </Tooltip>
      )
    case 'weaponEqip_t6':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={6}/>
        </Tooltip>
      )
    case 'weaponEqip_t7':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={7}/>
        </Tooltip>
      )
    case 'weaponEqip_t8':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={8}/>
        </Tooltip>
      )
    case 'weaponEqip_t9':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={9}/>
        </Tooltip>
      )
    case 'weaponEqip_t10':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={10}/>
        </Tooltip>
      )
    case 'weaponEqip_t11':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={11}/>
        </Tooltip>
      )
    case 'weaponEqip_t12':
      return (
        <Tooltip label={tooltipLabel}>
          <WeaponIcon rank={12}/>
        </Tooltip>
      )
    case 'witchGem_t1':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={1} small/>
        </Tooltip>
      )
    case 'witchGem_t2':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={2} small/>
        </Tooltip>
      )
    case 'witchGem_t3':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={3} small/>
        </Tooltip>
      )
    case 'witchGem_t4':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={4} small/>
        </Tooltip>
      )
    case 'witchGem_t5':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={5} small/>
        </Tooltip>
      )
    case 'witchGem_t6':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={6} small/>
        </Tooltip>
      )
    case 'witchGem_t7':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={7} small/>
        </Tooltip>
      )
    case 'witchGem_t8':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={8} small/>
        </Tooltip>
      )
    case 'witchGem_t9':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={9} small/>
        </Tooltip>
      )
    case 'witchGem_t10':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={10} small/>
        </Tooltip>
      )
    case 'witchGem_t11':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={11} small/>
        </Tooltip>
      )
    case 'witchGem_t12':
      return (
        <Tooltip label={tooltipLabel}>
          <WitchGemsIcon gem="sapphire" rank={12} small/>
        </Tooltip>
      )
    case 'beast_t1':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={1}/>
        </Tooltip>
      )
    case 'beast_t2':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={2}/>
        </Tooltip>
      )
    case 'beast_t3':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={3}/>
        </Tooltip>
      )
    case 'beast_t4':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={4}/>
        </Tooltip>
      )
    case 'beast_t5':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={5}/>
        </Tooltip>
      )
    case 'beast_t6':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={6}/>
        </Tooltip>
      )
    case 'beast_t7':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={7}/>
        </Tooltip>
      )
    case 'beast_t8':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={8}/>
        </Tooltip>
      )
    case 'beast_t9':
      return (
        <Tooltip label={tooltipLabel}>
          <BeastIcon rank={9}/>
        </Tooltip>
      )
  }
})

export default ItemIcon
