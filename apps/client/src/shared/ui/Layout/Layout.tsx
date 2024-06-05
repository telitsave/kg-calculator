import React, { FC, memo } from 'react'
import { Outlet, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import cx from 'classnames'
import { AppShell, Burger, Group, NavLink, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import TelegramIcon from '../../assets/icons/TelegramIcon'
import Flexbox from '../Flexbox'
import { getPageName } from './pageNames'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const Layout: FC<Props> = memo(({ className }) => {
  const [opened, { toggle, close }] = useDisclosure()
  const location = useLocation()
  return (
    <AppShell
      layout="alt"
      className={cx(css.root, className)}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" ml="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700} size="sm">
            {getPageName(location.pathname, true)}
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text>Меню</Text>
          </Group>
        </AppShell.Section>
        <AppShell.Section grow>
          <RouterNavLink className={css.link} to="/inventory">
            {({ isActive }) => <NavLink label={getPageName('inventory')} active={isActive} onClick={close} />}
          </RouterNavLink>
          <RouterNavLink className={css.link} to="/parameters">
            {({ isActive }) => <NavLink label={getPageName('parameters')} active={isActive} onClick={close} />}
          </RouterNavLink>

          <RouterNavLink className={css.link} to="/calculator">
            {({ isActive }) => (
              <NavLink label={getPageName('calculator')} active={isActive} defaultOpened={isActive}>
                <RouterNavLink className={css.link} to="/calculator/castle">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/castle')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/dragon">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/dragon')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/witch">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/witch')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/barracks">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/barracks')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/blacksmith">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/blacksmith')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/gallery">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/gallery')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/heroes">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/heroes')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/extremePower">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/extremePower')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
                <RouterNavLink className={css.link} to="/calculator/mightiestKingdom">
                  {({ isActive }) => (
                    <NavLink label={getPageName('/calculator/mightiestKingdom')} active={isActive} onClick={close} />
                  )}
                </RouterNavLink>
              </NavLink>
            )}
          </RouterNavLink>
        </AppShell.Section>
        <AppShell.Section>
          <Flexbox justifyContent="flex-end" alignItems="center">
            <Text size="sm">Created by: [KMZ] DonLi, S1574</Text>
            <a href="https://t.me/DonLi_V" target="_blank" rel="noreferrer">
              <TelegramIcon />
            </a>
          </Flexbox>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
})

export default Layout
