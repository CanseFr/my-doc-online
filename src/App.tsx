import { useEffect, useState } from 'react'
import './App.css'
import { ExpertiseCatalogPage } from './components/ExpertiseCatalogPage'
import { ExpertiseRoadmapPage } from './components/ExpertiseRoadmapPage'
import { NotFoundView } from './components/NotFoundView'
import { expertiseCatalog, expertisesBySlug } from './data/expertises'
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
      <ExpertiseCatalogPage
        expertises={expertiseCatalog}
        onOpenExpertise={(slug) => navigate(buildExpertisePath(slug))}
      />
    )
  }

  if (route.type === 'expertise') {
    const expertise = expertisesBySlug[route.expertiseSlug]

    if (!expertise) {
      return <NotFoundView onGoHome={() => navigate('/')} />
    }

    return (
      <ExpertiseRoadmapPage
        key={expertise.id}
        expertise={expertise}
        onGoHome={() => navigate('/')}
      />
    )
  }

  return <NotFoundView onGoHome={() => navigate('/')} />
}

export default App
