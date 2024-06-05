import React, { FC, memo } from 'react'

interface Props {
  className?: string
}

const ${NAME}: FC<Props> = memo(({ className }) => (
  <div className={className}>
    ${NAME}
  </div>
))

export default ${NAME}
