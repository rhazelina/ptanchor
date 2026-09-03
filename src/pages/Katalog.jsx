import { useMemo, useState } from 'react'
import { Search, LayoutList, LayoutGrid, ArrowRight, X } from 'lucide-react'
import ManifestRow from '../components/ManifestRow.jsx'
import Tag from '../components/Tag.jsx'
import Button from '../components/Button.jsx'
import { PRODUCTS, CATEGORIES, ANIMAL_TAGS } from '../data/products.js'

export default function Katalog({ initialCategory = '', initialAnimal = '' }) {
  const [kategori, setKategori] = useState(initialCategory)
  const [ternak, setTernak] = useState(initialAnimal)
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState('list')

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (kategori && p.category !== kategori) return false
      if (ternak && !p.tags.includes(ternak)) return false
      if (query) {
        const q = query.toLowerCase()
        if (!p.name.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [kategori, ternak, query])

  const reset = () => {
    setKategori('')
    setTernak('')
    setQuery('')
  }

  const pillCls = (active, activeColor) =>
    `px-3 py-1.5 rounded-sm text-[13px] font-medium border transition-colors duration-fast focus-visible:outline-none ${
      active
        ? `text-white border-transparent ${activeColor}`
        : 'bg-white border-limestone-dark text-slate hover:border-anchor-navy hover:text-ink'
    }`

  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-2">
            Katalog produk &amp; spesifikasi
          </h1>
          <p className="text-[14px] text-slate max-w-[60ch]">
            Daftar lengkap bahan baku, mineral, dan aditif pakan ternak. Filter berdasarkan kategori, jenis ternak, atau nama produk.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="border-b border-limestone-dark bg-white">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
                Kategori produk
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setKategori(kategori === c.id ? '' : c.id)}
                    className={pillCls(kategori === c.id, 'bg-anchor-navy')}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
                Jenis ternak
              </label>
              <div className="flex flex-wrap gap-2">
                {ANIMAL_TAGS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTernak(ternak === t ? '' : t)}
                    className={pillCls(ternak === t, 'bg-pasture-green')}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-limestone-dark">
            <div className="w-full md:max-w-sm relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate/60 pointer-events-none" />
              <input
                id="cari"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nama produk..."
                className="w-full border border-limestone-dark rounded-sm pl-9 pr-4 py-2.5 font-body text-[14px] bg-white focus:border-anchor-navy focus:outline-none focus:ring-[3px] focus:ring-grain-gold/25 transition-colors duration-fast placeholder:text-slate/50"
              />
            </div>

            {/* View mode toggle */}
            <div className="flex items-center gap-1 border border-limestone-dark p-1 rounded-sm bg-limestone self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                title="Tampilan list"
                className={`p-1.5 rounded-sm transition-colors ${
                  viewMode === 'list' ? 'bg-white text-anchor-navy shadow-sm' : 'text-slate hover:text-ink'
                }`}
              >
                <LayoutList size={16} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Tampilan grid"
                className={`p-1.5 rounded-sm transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-anchor-navy shadow-sm' : 'text-slate hover:text-ink'
                }`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog display */}
      <section className="bg-paper min-h-[400px]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-10">
          <div className="flex items-center justify-between mb-6 text-[13px] text-slate">
            <span>
              <strong className="text-ink font-semibold">{filtered.length}</strong> produk ditampilkan
              {(kategori || ternak || query) && (
                <button
                  type="button"
                  onClick={reset}
                  className="ml-3 inline-flex items-center gap-1 text-grain-gold-dark hover:underline font-medium"
                >
                  <X size={13} />
                  Hapus filter
                </button>
              )}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center border border-limestone-dark rounded-sm bg-white">
              <p className="text-slate text-[15px] mb-4">Tidak ada produk yang cocok dengan pencarian.</p>
              <button
                type="button"
                onClick={reset}
                className="px-4 py-2 bg-anchor-navy text-white text-[13px] rounded-sm font-semibold"
              >
                Tampilkan semua produk
              </button>
            </div>
          ) : viewMode === 'list' ? (
            <div className="bg-white border border-limestone-dark rounded-sm overflow-hidden">
              <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-x-4 px-5 py-2.5 bg-limestone text-[11px] text-slate font-semibold uppercase tracking-widest border-b border-limestone-dark">
                <span>Produk</span>
                <span className="px-4">Grade</span>
                <span className="px-4">Kemasan</span>
                <span></span>
              </div>
              <div>
                {filtered.map((p) => (
                  <ManifestRow key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <div
                  key={p.slug}
                  className="group bg-white rounded-sm border border-limestone-dark overflow-hidden flex flex-col hover:border-anchor-navy hover:shadow-sm transition-all duration-fast"
                >
                  <div className="h-44 bg-limestone overflow-hidden relative border-b border-limestone-dark">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-anchor-navy text-white text-[11px] font-semibold rounded-sm">
                      {p.grade}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <h3 className="font-display font-semibold text-[1rem] text-ink group-hover:text-anchor-navy mb-1.5 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-[13px] text-slate line-clamp-2 leading-relaxed flex-1">
                      {p.ringkas}
                    </p>
                    <div className="mt-4 pt-3 border-t border-limestone-dark flex items-center justify-between">
                      <span className="text-[12px] text-slate">
                        Kemasan: <strong className="text-ink">{p.kemasan}</strong>
                      </span>
                      <Button as="a" href={`#/produk/${p.slug}`} variant="tertiary">
                        Detail
                        <ArrowRight size={13} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
