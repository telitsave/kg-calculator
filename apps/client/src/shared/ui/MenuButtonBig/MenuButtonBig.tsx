import { FC, type ReactNode, memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { Paper, Stack, Text } from '@mantine/core'
import css from './styles.module.sass'


interface Props {
  className?: string
  href: string
  icon: ReactNode
  text: string
  disabled?: boolean
}

const MenuButtonBig: FC<Props> = memo(({ className, href, icon, text, disabled = false }) => {
  const buttonNode = useMemo(
    () => (
      <Paper
        className={cx(css.buttonCard, { [css.disabled]: disabled })}
        w={160}
        h={{
          xs: 160,
          base: 160,
        }}
      >
        <Stack p="md" align="center" justify="center" gap="xs" h="100%">
          {icon}
          <Text fw={600} component="span" c="black" ta="center">
            {text}
          </Text>
        </Stack>
      </Paper>
    ),
    [icon, text],
  )

  if (disabled) {
    return buttonNode
  }

  return (
    <Link className={cx(css.link, className)} to={href}>
      {buttonNode}
    </Link>
  )
})

export default MenuButtonBig
