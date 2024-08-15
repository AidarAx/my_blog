import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config'

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace/>
  }

  return children
}
