import { FC, memo } from 'react'
import { Tooltip } from '@mantine/core'
import { HeroSkillIcon as HeroSkillIconAsset } from 'shared/assets/icons'
import { SKILL_NAMES } from '../../model/locales'


interface Props {
  className?: string
  skillId: number
  disabled?: boolean
}

const HeroSkillIcon: FC<Props> = memo(({ skillId, disabled = false }) => (
  <Tooltip label={SKILL_NAMES[skillId]}>
    <HeroSkillIconAsset skillId={skillId} disabled={disabled} />
  </Tooltip>
))

export default HeroSkillIcon
