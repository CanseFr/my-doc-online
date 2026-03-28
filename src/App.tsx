import { useEffect, useState } from 'react'
import './App.css'
import { ExpertiseDetailPage } from './components/ExpertiseDetailPage'
import { NotFoundView } from './components/NotFoundView'
import { ThemeCatalogPage } from './components/ThemeCatalogPage'
import { expertisesBySlug } from './data/expertises'
import { themesById, themeCatalog } from './data/themes'
import { buildExpertisePath, getRouteFromPathname, type AppRoute } from './routing'

function App() {
  const [route, setRoute] = useState<AppRoute>(() =>
    getRouteFromPathname(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromPathname(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = (pathname: string) => {
    if (pathname !== window.location.pathname) {
      window.history.pushState({}, '', pathname)
    }

    setRoute(getRouteFromPathname(pathname))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (route.type === 'home') {
    return (
      <ThemeCatalogPage
        themes={themeCatalog}
        onOpenExpertise={(slug) => navigate(buildExpertisePath(slug))}
      />
    )
  }

  if (route.type === 'expertise') {
    const expertise = expertisesBySlug[route.expertiseSlug]
    const theme = expertise ? themesById[expertise.themeId] : null

    if (!expertise || !theme) {
      return <NotFoundView onGoHome={() => navigate('/')} />
    }

    return (
      <ExpertiseDetailPage
        key={expertise.id}
        expertise={expertise}
        theme={theme}
        onGoHome={() => navigate('/')}
      />
    )
  }

  return <NotFoundView onGoHome={() => navigate('/')} />
}

export default App
