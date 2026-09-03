import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Beranda from './pages/Beranda.jsx'
import Katalog from './pages/Katalog.jsx'
import DetailProduk from './pages/DetailProduk.jsx'
import Tentang from './pages/Tentang.jsx'
import Sertifikasi from './pages/Sertifikasi.jsx'
import Kontak from './pages/Kontak.jsx'

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
    page = <Beranda />
  } else if (segments[0] === 'produk') {
    if (segments[1]) {
      page = <DetailProduk slug={segments[1]} />
    } else {
      page = (
        <Katalog
          key={`${params.get('kategori') || ''}:${params.get('ternak') || ''}`}
          initialCategory={params.get('kategori') || ''}
          initialAnimal={params.get('ternak') || ''}
        />
      )
    }
  } else if (segments[0] === 'tentang') {
    page = <Tentang />
  } else if (segments[0] === 'sertifikasi') {
    page = <Sertifikasi />
  } else if (segments[0] === 'kontak') {
    page = <Kontak />
  } else {
    page = <Beranda />
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
