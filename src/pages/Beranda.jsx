import { ArrowRight, CheckCircle2, Layers, FlaskConical, Beaker, Package } from 'lucide-react'
import Button from '../components/Button.jsx'
import AnchorLogo from '../components/AnchorLogo.jsx'
import ManifestRow from '../components/ManifestRow.jsx'
import { PRODUCTS, CATEGORIES, SECTORS, waLink } from '../data/products.js'

const FEATURED = PRODUCTS.slice(0, 6)

const CATEGORY_ICONS = {
  mineral: Layers,
  aditif: FlaskConical,
  premix: Beaker,
  binder: Package,
}

export default function Beranda() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 pt-14 pb-16 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <span className="inline-block px-2.5 py-1 bg-grain-gold/10 text-grain-gold-dark rounded-sm text-[11px] font-semibold tracking-widest uppercase mb-5 border border-grain-gold/25">
              Pemasok Bahan Baku &amp; Aditif Pakan
            </span>
            <h1 className="font-display font-semibold text-[2.5rem] lg:text-[3rem] leading-[1.1] text-ink mb-5 max-w-[16ch]">
              Bahan baku pakan ternak yang{' '}
              <span className="text-anchor-navy">Konsisten Mutunya</span>
            </h1>
            <p className="text-[15px] text-slate max-w-[50ch] mb-8 leading-relaxed">
              Memasok mineral, toxin binder, dan aditif pakan ternak berkualitas tinggi untuk pabrik pakan, distributor, dan peternak skala besar di seluruh Indonesia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#/produk" variant="primary">
                Lihat katalog produk
                <ArrowRight size={15} />
              </Button>
              <Button
                as="a"
                variant="secondary"
                href={waLink('Halo PT Anchor Pakan Jaya, saya ingin berkonsultasi tentang produk pakan ternak.')}
              >
                Hubungi sales
              </Button>
            </div>
          </div>

          {/* Spec panel */}
          <div className="border border-limestone-dark rounded-sm overflow-hidden bg-white shadow-sm">
            <div className="relative h-44 overflow-hidden bg-limestone">
              <img
                src="/images/hero_factory_warehouse.jpg"
                alt="Fasilitas & Gudang PT Anchor Pakan Jaya"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/95 rounded-sm p-1.5">
                <AnchorLogo className="h-8 w-auto" />
              </div>
              <span className="absolute bottom-3 left-4 text-[11px] text-white/75 font-medium tracking-wide uppercase">
                Fasilitas &amp; Gudang Cikarang
              </span>
            </div>

            <div className="divide-y divide-limestone-dark">
              {[
                { label: 'Kapasitas pasokan', value: '2.500 ton / bulan' },
                { label: 'Sertifikasi mutu', value: 'ISO 9001:2015 · GMP+ · Halal' },
                { label: 'Pengalaman', value: '12+ tahun (est. 2014)' },
                { label: 'Jangkauan distribusi', value: 'Seluruh Indonesia' },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex justify-between items-baseline px-5 py-3 text-[13px]"
                >
                  <span className="text-slate font-medium">{r.label}</span>
                  <span className="font-semibold text-ink text-right ml-4">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kategori Produk ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-2">Kategori produk</h2>
            <p className="text-[14px] text-slate max-w-[56ch]">
              Lini utama mineral, aditif, dan premix untuk industri pakan ternak.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((c) => {
              const count = PRODUCTS.filter((p) => p.category === c.id).length
              const Icon = CATEGORY_ICONS[c.id] ?? Layers
              return (
                <a
                  key={c.id}
                  href={`#/produk?kategori=${c.id}`}
                  className="group bg-white p-5 rounded-sm border border-limestone-dark hover:border-anchor-navy hover:shadow-sm transition-all duration-fast flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <Icon size={22} className="text-anchor-navy/40 group-hover:text-anchor-navy mb-3 transition-colors duration-fast" />
                    <h3 className="font-display font-semibold text-[1.05rem] text-ink group-hover:text-anchor-navy leading-snug">
                      {c.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[12px] text-slate pt-3 border-t border-limestone-dark">
                    <span>{count} varian</span>
                    <ArrowRight size={13} className="text-grain-gold-dark group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Produk Unggulan (Manifest) ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div>
              <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-1.5">Produk unggulan</h2>
              <p className="text-[14px] text-slate max-w-[56ch]">
                Katalog prioritas untuk pemesanan cepat dan penawaran spesifikasi teknis.
              </p>
            </div>
            <Button as="a" variant="secondary" href="#/produk">
              Semua produk
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="bg-white border border-limestone-dark rounded-sm overflow-hidden">
            <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-x-4 px-5 py-2.5 bg-limestone text-[11px] text-slate font-semibold uppercase tracking-widest border-b border-limestone-dark">
              <span>Produk &amp; Deskripsi</span>
              <span className="px-4">Grade</span>
              <span className="px-4">Kemasan</span>
              <span></span>
            </div>
            <div>
              {FEATURED.map((p) => (
                <ManifestRow key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QC Feature ── */}
      <section className="border-b border-limestone-dark bg-limestone">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-4">
              Pengawasan mutu &amp; jaminan kualitas
            </h2>
            <p className="text-[14px] text-slate max-w-[56ch] mb-7 leading-relaxed">
              Setiap lot bahan baku melalui uji laboratorium ketat. Kami memastikan kadar bahan aktif, kelembapan, dan tingkat kontaminan berada dalam ambang batas standar nasional &amp; internasional.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { t: 'Uji Laboratorium Mandiri', d: 'Setiap lot sampel diperiksa sebelum pengiriman ke konsumen.' },
                { t: 'Dokumentasi COA', d: 'Certificate of Analysis per batch untuk transparansi kandungan teknis.' },
                { t: 'Dukungan Teknis & Formulasi', d: 'Tim konsultan pendamping untuk aplikasi pakan ternak.' },
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <CheckCircle2 size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[14px] text-ink">{x.t}</div>
                    <p className="text-[13px] text-slate mt-0.5">{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button as="a" href="#/tentang" variant="tertiary">
              Selengkapnya tentang kontrol kualitas
              <ArrowRight size={13} />
            </Button>
          </div>

          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-sm">
            <img
              src="/images/about_lab_quality.jpg"
              alt="Laboratorium Pengujian Mutu PT Anchor Pakan Jaya"
              className="w-full h-72 object-cover"
            />
            <div className="px-4 py-3 border-t border-limestone-dark">
              <span className="text-[11px] font-semibold text-grain-gold-dark uppercase tracking-widest block mb-0.5">
                Fasilitas Quality Control
              </span>
              <p className="text-[13px] text-slate">
                Laboratorium uji mutu mineral &amp; aditif pakan di Cikarang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sektor Ternak ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-2">Aplikasi per sektor ternak</h2>
            <p className="text-[14px] text-slate max-w-[56ch]">
              Produk diformulasikan spesifik untuk standar nutrisi berbagai jenis ternak dan komoditas perairan.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((s) => (
              <a
                key={s.id}
                href={`#/produk?ternak=${s.id}`}
                className="group relative rounded-sm overflow-hidden border border-limestone-dark hover:shadow-md transition-all duration-fast h-56 flex flex-col justify-end"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                <div className="relative z-10 p-4">
                  <h3 className="font-display font-semibold text-[15px] text-white leading-tight mb-0.5">{s.name}</h3>
                  <p className="text-white/65 text-[12px] line-clamp-2 leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
