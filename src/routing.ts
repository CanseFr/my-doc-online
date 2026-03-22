export interface HomeRoute {
  type: 'home'
}

export interface ExpertiseRoute {
  type: 'expertise'
  expertiseSlug: string
}

export interface NotFoundRoute {
  type: 'not-found'
}

export type AppRoute = HomeRoute | ExpertiseRoute | NotFoundRoute

const EXPERTISES_BASE_PATH = '/expertises'

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export function buildExpertisePath(slug: string) {
  return `${EXPERTISES_BASE_PATH}/${encodeURIComponent(slug)}`
}

export function getRouteFromPathname(pathname: string): AppRoute {
  const normalizedPathname = normalizePathname(pathname)

  if (normalizedPathname === '/') {
    return { type: 'home' }
  }

  const pathSegments = normalizedPathname.split('/').filter(Boolean)

  if (pathSegments.length === 2 && pathSegments[0] === 'expertises') {
    return {
      type: 'expertise',
      expertiseSlug: decodeURIComponent(pathSegments[1]),
    }
  }

  return { type: 'not-found' }
}
