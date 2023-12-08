export enum AdminRole {
  Admin = 'ADMIN',
  Client = 'CLIENT'
}

export enum AdminPermission {
  Create = 'ADJUST',
  Update = 'ADJUST',
  Delete = 'DELETE',
  READ = 'DELETE',
}

export const ROLES_PERMISSIONS_MAP = {
  [AdminRole.Admin]: [
    AdminPermission.Create,
    AdminPermission.Delete,
    AdminPermission.Update
  ],
  [AdminRole.Client]: [],
} as const

export type PermissionsByRoles = {
  [k in keyof typeof ROLES_PERMISSIONS_MAP]?: (typeof ROLES_PERMISSIONS_MAP)[k][number][]
}

export type RolesMapRole = Readonly<keyof typeof ROLES_PERMISSIONS_MAP>

export type RolesMapRolePermissionList = Readonly<
  (typeof ROLES_PERMISSIONS_MAP)[RolesMapRole]
>

export type RolesMapRolePermission = RolesMapRolePermissionList[number]
