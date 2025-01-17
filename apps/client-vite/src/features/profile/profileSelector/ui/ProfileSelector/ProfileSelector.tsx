import { FC, type FunctionComponent, type ReactNode, memo, useCallback } from 'react'
import { Flex, Popover, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { Profile } from 'kg-calculator-typings'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { FormattedMessage } from 'react-intl'
import { useProfiles } from '@entities/profile'


interface Props {
  profileButtonsNodes?: FunctionComponent<{ profile: Profile }>[]
  addProfileButtonNode?: ReactNode
}

const ProfileSelector: FC<Props> = memo(({ profileButtonsNodes = [], addProfileButtonNode }) => {
  const [opened, { close, toggle }] = useDisclosure(false)
  const { profiles = [], selectedProfile, setCurrentProfile } = useProfiles()

  const handleProfileClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (e.currentTarget.dataset.profileid) {
        setCurrentProfile(e.currentTarget.dataset.profileid)
      }
      close()
    },
    [close, setCurrentProfile],
  )

  const handleClickDropDown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      close()
    },
    [close],
  )

  return (
    <Popover opened={opened} onClose={close} keepMounted>
      <Popover.Target>
        <Flex
          onClick={toggle}
          wrap="nowrap"
          align="center"
          gap="sm"
          style={{
            cursor: 'pointer',
          }}
        >
          <Stack gap={0}>
            <Text component="a">{selectedProfile.name}</Text>
            <Text component="a" c="dimmed" size="xs">
              <FormattedMessage
                defaultMessage="Сервер: {server}"
                values={{
                  server: selectedProfile.serverId || '-',
                }}
              />
            </Text>
          </Stack>
          {opened ? <FaChevronUp /> : <FaChevronDown />}
        </Flex>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack onClick={handleClickDropDown}>
          {profiles.map((profile) => (
            <Flex key={profile.id} align="center" justify="space-between" gap="md">
              <Stack gap={0} data-profileid={profile.id} onClick={handleProfileClick}>
                <Text
                  component="a"
                  size="xs"
                  c="blue"
                  href=""
                  td={profile.id === selectedProfile.id ? 'underline' : undefined}
                >
                  {profile.name}
                </Text>
                <Text c="dimmed" component="span" size="xs">
                  <FormattedMessage
                    defaultMessage="Сервер: {server}"
                    values={{
                      server: profile.serverId || '-',
                    }}
                  />
                </Text>
              </Stack>
              <Flex>
                {profileButtonsNodes.map((ButtonFC, index) => (
                  <ButtonFC key={index} profile={profile} />
                ))}
              </Flex>
            </Flex>
          ))}
          {profiles.length < 5 && addProfileButtonNode}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
})

export default ProfileSelector
