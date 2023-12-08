function path<A extends string, B extends string>(
  root: A,
  sublink: B,
): `${A}${B}` {
  return `${root}${sublink}`
}

export const ROOTS_PAGE = '/'
export const ROOTS_ADMIN = '/admin'
export const ROOTS_CLIENT = '/client'

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  items: path(ROOTS_ADMIN, '/items'),
  create: path(ROOTS_ADMIN, '/create'),
} as const
