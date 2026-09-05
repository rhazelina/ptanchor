import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import About from './pages/About.jsx'
import Certifications from './pages/Certifications.jsx'
import Contact from './pages/Contact.jsx'

function parseHash(hash) {
  const path = (hash || '').replace(/^#/, '').replace(/^\//, '')
  const [rawPath, query] = path.split('?')
  const segments = rawPath.split('/').filter(Boolean)
  const params = new URLSearchParams(query || '')
  return { segments, params }
}

function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

function App() {
  const { segments, params } = useRoute()

  let page
  if (segments.length === 0) {
    page = <Home />
  } else if (segments[0] === 'products') {
    if (segments[1]) {
      page = <ProductDetail slug={segments[1]} />
    } else {
      page = (
        <Catalog
          key={`${params.get('category') || ''}:${params.get('animal') || ''}`}
          initialCategory={params.get('category') || ''}
          initialAnimal={params.get('animal') || ''}
        />
      )
    }
  } else if (segments[0] === 'about') {
    page = <About />
  } else if (segments[0] === 'certifications') {
    page = <Certifications />
  } else if (segments[0] === 'contact') {
    page = <Contact />
  } else {
    page = <Home />
  }

  return (
    <div className="min-h-screen flex flex-col bg-paper font-body text-ink">
      <Header />
      <main className="flex-1">{page}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
