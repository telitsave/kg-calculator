import { FC, type ReactNode, memo, useEffect, useRef } from 'react'
import { Outlet, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import cx from 'classnames'
import { ActionIcon, AppShell, Divider, Flex, NavLink, ScrollArea, Text, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaTelegram } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { LogoIcon, navigation } from '../../assets/icons'
import Flexbox from '../Flexbox'
import { getPageName } from './pageNames'
import css from './styles.module.sass'


interface Props {
  className?: string
  rightHeaderSlot?: ReactNode
}

const Layout: FC<Props> = memo(({ className, rightHeaderSlot }) => {
  const location = useLocation()
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`)
  const viewPort = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewPort.current) {
      viewPort.current.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }
  }, [viewPort, location.pathname])

  return (
    <AppShell
      layout="alt"
      className={cx(css.root, className)}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: true },
      }}
      footer={{
        height: 64,
        offset: true,
        collapsed: !isMobile,
      }}
      maw="100%"
      mah="100%"
      padding="md"
    >
      <AppShell.Header>
        <Flex h="100%" ml="md" mr="md" align="center" gap="sm" justify="space-between">
          <Flex align="center" gap="sm">
            {!isMobile && (
              <Text fw={700} size="sm">
                {getPageName(location.pathname)}
              </Text>
            )}
            {isMobile && (
              <Flex align="center" gap={16} p={4}>
                <LogoIcon />
                <Text>
                  <FormattedMessage defaultMessage="Калькулятор Kingdom{nbsp}Guard" values={{ nbsp: <>&nbsp;</> }} />
                </Text>
              </Flex>
            )}
          </Flex>
          {rightHeaderSlot}
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Flex align="center" gap={16} p={4}>
            <LogoIcon />
            <Text>
              <FormattedMessage defaultMessage="Калькулятор Kingdom{nbsp}Guard" values={{ nbsp: <>&nbsp;</> }} />
            </Text>
          </Flex>
          <Divider mt="md" mb="md" />
        </AppShell.Section>
        <ScrollArea flex="1 1 auto">
          <AppShell.Section grow>
            <RouterNavLink className={css.link} to="/about">
              {({ isActive }) => (
                <NavLink
                  component="span"
                  label={<FormattedMessage defaultMessage="О калькуляторе" />}
                  active={isActive}
                  leftSection={<navigation.AboutIcon className={css.navIcon} />}
                />
              )}
            </RouterNavLink>
            <RouterNavLink className={css.link} to="/myData">
              {({ isActive }) => (
                <NavLink
                  component="span"
                  label={<FormattedMessage defaultMessage="Мои ресурсы и параметры" />}
                  active={isActive}
                  leftSection={<navigation.ResourcesParametersIcon className={css.navIcon} />}
                />
              )}
            </RouterNavLink>
            <RouterNavLink className={css.link} to="/calculators">
              {({ isActive }) => (
                <NavLink
                  component="span"
                  label={<FormattedMessage defaultMessage="Калькуляторы" />}
                  active={isActive}
                  leftSection={<navigation.CalculatorsIcon className={css.navIcon} />}
                />
              )}
            </RouterNavLink>
            <RouterNavLink className={css.link} to="/tables">
              {({ isActive }) => (
                <NavLink
                  component="span"
                  label={<FormattedMessage defaultMessage="Таблицы и гайды" />}
                  active={isActive}
                  leftSection={<navigation.TablesIcon className={css.navIcon} />}
                />
              )}
            </RouterNavLink>
            <RouterNavLink className={css.link} to="/settings">
              {({ isActive }) => (
                <NavLink
                  component="span"
                  label={<FormattedMessage defaultMessage="Настройки" />}
                  active={isActive}
                  leftSection={<navigation.SettingsIcon className={css.navIcon} />}
                />
              )}
            </RouterNavLink>
          </AppShell.Section>
        </ScrollArea>

        <AppShell.Section>
          <Flexbox justifyContent="flex-end" flexDirection="column" alignItems="flex-end">
            <a href="https://t.me/kg_calculator" target="_blank" rel="noreferrer">
              <Flex align="center" justify="flex-end" gap={4}>
                <FormattedMessage defaultMessage="Группа в Telegram" /> <FaTelegram color="#29B6F6" size={24} />
              </Flex>
            </a>
            <Text>
              Created by:{' '}
              <Text fw="bold" span>
                DonLi
              </Text>
            </Text>
          </Flexbox>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main h="100dvh" style={{ overflow: 'hidden' }}>
        <ScrollArea h="100%" offsetScrollbars viewportRef={viewPort}>
          <Outlet />
        </ScrollArea>
      </AppShell.Main>

      <AppShell.Footer>
        <Flex align="center" justify="center" gap="md">
          <RouterNavLink to="/about">
            {({ isActive }) => (
              <ActionIcon variant={isActive ? 'filled' : 'white'} size="xl" color="yellow" w={64} h={64}>
                <navigation.AboutIcon />
              </ActionIcon>
            )}
          </RouterNavLink>
          <RouterNavLink to="/myData">
            {({ isActive }) => (
              <ActionIcon variant={isActive ? 'filled' : 'white'} size="xl" color="yellow" w={64} h={64}>
                <navigation.ResourcesParametersIcon />
              </ActionIcon>
            )}
          </RouterNavLink>
          <RouterNavLink to="/calculators">
            {({ isActive }) => (
              <ActionIcon variant={isActive ? 'filled' : 'white'} size="xl" color="yellow" w={64} h={64}>
                <navigation.CalculatorsIcon />
              </ActionIcon>
            )}
          </RouterNavLink>
          <RouterNavLink to="/tables">
            {({ isActive }) => (
              <ActionIcon variant={isActive ? 'filled' : 'white'} size="xl" color="yellow" w={64} h={64}>
                <navigation.TablesIcon />
              </ActionIcon>
            )}
          </RouterNavLink>
          <RouterNavLink to="/settings">
            {({ isActive }) => (
              <ActionIcon variant={isActive ? 'filled' : 'white'} size="xl" color="yellow" w={64} h={64}>
                <navigation.SettingsIcon />
              </ActionIcon>
            )}
          </RouterNavLink>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  )
})

export default Layout
