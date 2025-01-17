import { SKILL_NAMES } from '../../model/locales'
import { Tooltip } from '@mantine/core'
import { HeroSkillIcon as HeroSkillIconAsset } from '@shared/assets/icons'
import { FC, memo } from 'react'

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
