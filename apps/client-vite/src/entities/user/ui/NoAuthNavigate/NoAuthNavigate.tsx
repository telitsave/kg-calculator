import { FC, memo } from 'react'
import { Navigate } from 'react-router-dom'
import { isAuth } from '../../helpers/isAuth'


interface Props {
  to: string
}

const NoAuthNavigate: FC<Props> = memo(({ to }) => {
  if (isAuth()) return null

  return <Navigate to={to} />
})

export default NoAuthNavigate
