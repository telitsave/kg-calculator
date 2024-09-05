import { FC, type ReactNode, memo, useCallback, useMemo } from 'react'
import { Outlet, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import cx from 'classnames'
import { AppShell, Burger, Flex, Group, NavLink, ScrollArea, Text, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FaTelegram } from 'react-icons/fa'
import Flexbox from '../Flexbox'
import { getPageName } from './pageNames'
import css from './styles.module.sass'


interface Props {
  className?: string
  rightHeaderSlot?: ReactNode
  isAuth: boolean
}

const Layout: FC<Props> = memo(({ className, rightHeaderSlot, isAuth }) => {
  const [opened, { toggle }] = useDisclosure()
  const location = useLocation()

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.dataset.secure === 'true') {
      if (!isAuth) {
        event.preventDefault()
      }
    }
  }, [])

  const menuNode = useMemo(
    () => (
      <AppShell.Section grow>
        <RouterNavLink className={css.link} to="/about">
          {({ isActive }) => <NavLink component="span" label={getPageName('about')} active={isActive} />}
        </RouterNavLink>
        <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
          <RouterNavLink className={css.link} to="/inventory" data-secure={true} onClick={handleLinkClick}>
            {({ isActive }) => (
              <NavLink component="span" label={getPageName('inventory')} active={isActive} disabled={!isAuth} />
            )}
          </RouterNavLink>
        </Tooltip>
        <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
          <RouterNavLink className={css.link} to="/parameters" data-secure={true} onClick={handleLinkClick}>
            {({ isActive }) => (
              <NavLink component="span" label={getPageName('parameters')} active={isActive} disabled={!isAuth} />
            )}
          </RouterNavLink>
        </Tooltip>
        <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
          <RouterNavLink className={css.link} to="/heroes" data-secure={true} onClick={handleLinkClick}>
            {({ isActive }) => (
              <NavLink component="span" label={getPageName('heroes')} active={isActive} disabled={!isAuth} />
            )}
          </RouterNavLink>
        </Tooltip>

        <RouterNavLink className={css.link} to="/calculator">
          {({ isActive }) => (
            <NavLink component="span" label={getPageName('calculator')} active={isActive} defaultOpened={isActive}>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/castle"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/castle')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/dragon"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/dragon')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink className={css.link} to="/calculator/witch" data-secure={true} onClick={handleLinkClick}>
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/witch')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/barracks"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/barracks')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/blacksmith"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/blacksmith')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/gallery"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/gallery')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/heroes"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/heroes')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/ultimatePower"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      component="span"
                      label={getPageName('/calculator/ultimatePower')}
                      active={isActive}
                      disabled={!isAuth}
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
              <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
                <RouterNavLink
                  className={css.link}
                  to="/calculator/mightiestKingdom"
                  data-secure={true}
                  onClick={handleLinkClick}
                >
                  {({ isActive }) => (
                    <NavLink
                      label={getPageName('/calculator/mightiestKingdom')}
                      active={isActive}
                      disabled={!isAuth}
                      component="span"
                    />
                  )}
                </RouterNavLink>
              </Tooltip>
            </NavLink>
          )}
        </RouterNavLink>
        <RouterNavLink className={css.link} to="/other/spiritInvasion">
          {({ isActive }) => (
            <NavLink component="span" label={getPageName('/other/spiritInvasion')} active={isActive} />
          )}
        </RouterNavLink>
        <Tooltip disabled={isAuth} label="Вы не авторизованы или не выбран профиль">
          <RouterNavLink className={css.link} to="/serverSettings" data-secure={true} onClick={handleLinkClick}>
            {({ isActive }) => (
              <NavLink component="span" label={getPageName('serverSettings')} active={isActive} disabled={!isAuth} />
            )}
          </RouterNavLink>
        </Tooltip>
      </AppShell.Section>
    ),
    [handleLinkClick, isAuth],
  )

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
        <Flex h="100%" ml="md" mr="md" align="center" gap="sm" justify="space-between">
          <Flex align="center" gap="sm">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700} size="sm">
              {getPageName(location.pathname, true)}
            </Text>
          </Flex>
          {rightHeaderSlot}
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text>Меню</Text>
          </Group>
        </AppShell.Section>
        <ScrollArea flex="1 1 auto">{menuNode}</ScrollArea>
        <AppShell.Section>
          <Flexbox justifyContent="flex-end" flexDirection="column">
            <Flex align="center" justify="flex-end" gap={4}>
              <Text size="sm" ta="end">
                Created by: [KMZ] DonLi, S1574
              </Text>
              <a href="https://t.me/DonLi_V" target="_blank" rel="noreferrer">
                <FaTelegram color="#29B6F6" size={24} />
              </a>
            </Flex>
            <Flex align="flex-end" direction="column">
              <Text size="sm" ta="end">
                Поблагодарить разработчика можно{' '}
                <a href="https://pay2.tap4fun.com/kg" target="_blank" rel="noreferrer">
                  покупкой монеток в игру
                </a>
              </Text>
              <Text size="sm" ta="end" mt={8}>
                ID:{' '}
                <Text component="span" fw={700}>
                  17648694
                </Text>
              </Text>
              <Text size="sm" ta="end">
                Никнейм:{' '}
                <Text component="span" fw={700}>
                  DonLi
                </Text>
              </Text>
            </Flex>
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
