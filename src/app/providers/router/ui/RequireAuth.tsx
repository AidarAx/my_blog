import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useLocation, Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouteConfig/routeConfig'
import { ReactNode } from 'react'

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace/>
  }

  return children
}
