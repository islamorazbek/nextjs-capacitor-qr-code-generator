import {useCheckAccess} from 'hooks/useCheckAccess'
import {AdminPermission, AdminRole, PermissionsByRoles} from 'utils/roles'

// THIS SHOULD COME FROM BACKEND
const CURRENT_ROLES: PermissionsByRoles = {
  [AdminRole.Admin]: [AdminPermission.Update]
}

type RoleBasedGuardProp = {
  roles: PermissionsByRoles | PermissionsByRoles[]
  fallback?: React.ReactNode
  children: React.ReactNode
}

export function RoleBasedGuard({
  roles,
  fallback,
  children,
}: RoleBasedGuardProp) {
  const checkAccess = useCheckAccess()

  if (!checkAccess(CURRENT_ROLES, roles)) {
    return fallback ? <>{fallback}</> : null
  }

  return <>{children}</>
}
