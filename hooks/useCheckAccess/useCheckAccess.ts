import {useCallback} from 'react'
import {PermissionsByRoles} from 'utils/roles'

function checkAccess(
  availableRoles: PermissionsByRoles,
  requiredRoles: PermissionsByRoles,
) {
  return Object.keys(requiredRoles).every((requiredRole) => {
    if (!Object.hasOwn(availableRoles, requiredRole)) {
      return false
    }

    const availablePermissions = availableRoles[
      requiredRole as keyof PermissionsByRoles
    ] as string[]
    const requiredPermissions = requiredRoles[
      requiredRole as keyof PermissionsByRoles
    ] as string[]

    return requiredPermissions.every(
      (requiredPermission) =>
        availablePermissions?.includes(requiredPermission),
    )
  })
}

export function useCheckAccess() {
  return useCallback(
    (
      availableRoles: PermissionsByRoles,
      requiredRoles: PermissionsByRoles | PermissionsByRoles[],
    ) => {
      if (Array.isArray(requiredRoles)) {
        return requiredRoles.some((requiredRole) =>
          checkAccess(availableRoles, requiredRole),
        )
      }

      return checkAccess(availableRoles, requiredRoles)
    },
    [],
  )
}
