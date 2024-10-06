import { FC, PropsWithChildren, ReactNode, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User'
import { RoutePath } from '@/shared/config'

interface RequireAuthProps {
  children: ReactNode
  roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(requireRole => {
      return userRoles?.includes(requireRole)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace/>
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace/>
  }

  return children
}
