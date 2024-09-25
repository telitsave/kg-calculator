import { FC, memo } from 'react'
import { Stack, Text } from '@mantine/core'
import { SKILL_VALUE_LABELS } from '../../model/locales'


interface Props {
  className?: string
  skillId: number
  value: number
}

const HeroSkillValue: FC<Props> = memo(({ skillId, value }) => (
  <Stack gap={4} align="center">
    <Text component="span" lh="14px">
      {SKILL_VALUE_LABELS[skillId]}:
    </Text>

    <Text component="span" fw={700} lh="14px">
      +{value} %
    </Text>
  </Stack>
))

export default HeroSkillValue
