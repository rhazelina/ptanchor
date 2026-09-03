import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button.jsx'
import { waLink } from '../data/products.js'

export default function Tentang() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-3">
            Tentang PT Anchor Pakan Jaya
          </h1>
          <p className="text-[15px] text-slate max-w-[60ch]">
            Pemasok terpercaya bahan baku mineral, aditif, dan premix pakan ternak di Indonesia sejak tahun 2014.
          </p>
        </div>
      </section>

      {/* Profil */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          <div>
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-4">Profil perusahaan</h2>
            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-4">
              Berdiri sejak 2014, <strong>PT Anchor Pakan Jaya</strong> bergerak di bidang pengadaan dan pemrosesan bahan baku mineral serta feed additives untuk industri pakan ternak nasional. Kami melayani kebutuhan pabrik pakan (feed mill), distributor bahan pakan, dan peternak mandiri skala menengah–besar.
            </p>
            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-8">
              Dengan gudang penyimpanan dan laboratorium kontrol kualitas di kawasan industri Cikarang, kami menjamin keberlanjutan stok serta kestabilan grade fisik dan kimia pada setiap lot pengiriman.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-limestone-dark pt-6">
              <div>
                <span className="block text-[11px] font-semibold text-grain-gold-dark uppercase tracking-widest mb-1.5">
                  Kapasitas Bulanan
                </span>
                <span className="font-display font-bold text-[1.75rem] text-ink leading-none">2.500+</span>
                <span className="block text-[13px] text-slate mt-0.5">ton / bulan</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-grain-gold-dark uppercase tracking-widest mb-1.5">
                  Pengalaman Industri
                </span>
                <span className="font-display font-bold text-[1.75rem] text-ink leading-none">12+</span>
                <span className="block text-[13px] text-slate mt-0.5">tahun berdiri</span>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-limestone-dark overflow-hidden shadow-sm">
            <img
              src="/images/hero_factory_warehouse.jpg"
              alt="Gudang & Fasilitas PT Anchor Pakan Jaya"
              className="w-full h-64 object-cover"
            />
            <div className="px-4 py-3 bg-white border-t border-limestone-dark">
              <p className="text-[12px] text-slate text-center">
                Fasilitas pergudangan &amp; distribusi di Cikarang, Bekasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-8">Visi &amp; misi perusahaan</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Visi */}
            <div className="bg-anchor-navy text-white rounded-sm p-8 border-l-4 border-grain-gold">
              <span className="inline-block text-[11px] font-semibold tracking-widest text-grain-gold-light uppercase mb-3">
                Komitmen Kami
              </span>
              <h3 className="font-display font-semibold text-[1.5rem] text-white mb-4 leading-snug">Visi Utama</h3>
              <p className="text-white/80 text-[14px] leading-relaxed">
                Menjadi mitra utama dan terpercaya dalam rantai pasok pakan ternak di Indonesia, yang dikenal atas konsistensi mutu produk dan keandalan pengiriman.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-sm border border-limestone-dark p-8">
              <span className="inline-block text-[11px] font-semibold tracking-widest text-grain-gold-dark uppercase mb-3">
                Langkah Strategis
              </span>
              <h3 className="font-display font-semibold text-[1.5rem] text-ink mb-5 leading-snug">Misi Perusahaan</h3>
              <ol className="space-y-4">
                {[
                  'Menyediakan bahan baku mineral & aditif pakan dengan jaminan spesifikasi teruji.',
                  'Menjaga ketersediaan stok secara konsisten untuk mendukung efisiensi feed mill konsumen.',
                  'Memberikan layanan konsultasi teknis & pendampingan aplikasi produk per sektor ternak.',
                ].map((m, i) => (
                  <li key={i} className="flex gap-3.5 text-[14px] text-ink leading-relaxed">
                    <CheckCircle2 size={16} className="text-grain-gold-dark shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Lab QA */}
      <section className="bg-limestone">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-center">
          <div className="rounded-sm border border-limestone-dark overflow-hidden shadow-sm">
            <img
              src="/images/about_lab_quality.jpg"
              alt="Pengujian Laboratorium PT Anchor Pakan Jaya"
              className="w-full h-72 object-cover"
            />
          </div>

          <div>
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-4">
              Laboratorium &amp; sertifikasi mutu
            </h2>
            <p className="text-[14px] text-slate max-w-[58ch] mb-6 leading-relaxed">
              Kualitas pakan bergantung pada kemurnian bahan baku. Di laboratorium kami, setiap pengiriman diuji kadar kelembapan, massa jenis, kation exchange capacity, serta pengikatan aflatoksin.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#/sertifikasi">
                Halaman sertifikasi
                <ArrowRight size={14} />
              </Button>
              <Button as="a" variant="secondary" href={waLink('Halo, saya ingin bertanya tentang profil PT Anchor Pakan Jaya')}>
                Hubungi tim kami
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
