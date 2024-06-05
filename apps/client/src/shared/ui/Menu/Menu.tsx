import React, { FC, memo } from 'react'
import cx from 'classnames'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const Menu: FC<Props> = memo(({ className }) => <div className={cx(css.root, className)}>Menu</div>)

export default Menu
