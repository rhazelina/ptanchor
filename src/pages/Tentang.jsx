/* Hallmark · macrostructure: Spec Sheet · tone: editorial · genre: editorial · theme: Steel and Grain (design.md)
 * slop test: pass (58/58)
 */

import { ArrowRight, CheckCircle2, Building2, Award, MessageCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { waLink } from '../data/products.js'

export default function Tentang() {
  return (
    <>
      {/* ── 01. PAGE HEADER & SPEC STRIP ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 pt-12 pb-10">

          <h1 className="font-display font-semibold text-[2.25rem] lg:text-[2.75rem] text-ink mb-4 leading-tight">
            Tentang PT Anchor Pakan Jaya
          </h1>

          <p className="text-[15px] text-slate max-w-[62ch] leading-relaxed">
            Pemasok terpercaya bahan baku mineral, aditif, dan premix pakan ternak berkualifikasi tinggi di Indonesia sejak tahun 2014.
          </p>
        </div>
      </section>

      {/* ── 02. PROFIL & KAPASITAS ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-2">
              PROFIL PERUSAHAAN &amp; DISTRIBUSI
            </span>

            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-5">Profil perusahaan</h2>

            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-4">
              Berdiri sejak 2014, <strong className="text-ink font-semibold">PT Anchor Pakan Jaya</strong> bergerak di bidang pengadaan dan pemrosesan bahan baku mineral serta feed additives untuk industri pakan ternak nasional. Kami melayani kebutuhan pabrik pakan (feed mill), distributor bahan pakan, dan peternak mandiri skala menengah–besar di seluruh pelosok negeri.
            </p>

            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-8">
              Dengan gudang penyimpanan modern dan laboratorium kontrol kualitas di kawasan industri Cikarang, Bekasi, kami menjamin keberlanjutan stok serta kestabilan grade fisik dan kimia pada setiap lot pengiriman.
            </p>

            {/* Capacity Stat Ledger */}
            <div className="grid grid-cols-2 gap-6 border-t border-b border-limestone-dark/80 py-6 my-2 bg-paper/50">
              <div className="space-y-1">
                <span className="block text-[11px] font-mono font-semibold text-grain-gold-dark uppercase tracking-wider">
                  KAPASITAS BULANAN
                </span>
                <span className="font-display font-bold text-[2rem] text-anchor-navy leading-none">2.500+</span>
                <span className="block text-[12px] text-slate font-mono">Ton Bahan Baku / Bulan</span>
              </div>

              <div className="space-y-1">
                <span className="block text-[11px] font-mono font-semibold text-grain-gold-dark uppercase tracking-wider">
                  PENGALAMAN INDUSTRI
                </span>
                <span className="font-display font-bold text-[2rem] text-anchor-navy leading-none">12+ Tahun</span>
                <span className="block text-[12px] text-slate font-mono">Berdiri Sejak 2014</span>
              </div>
            </div>
          </div>

          {/* Facility Photo Spec Card */}
          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-xs">
            <div className="relative h-64 overflow-hidden bg-limestone border-b border-limestone-dark">
              <img
                src="/images/hero_factory_warehouse.jpg"
                alt="Gudang & Fasilitas PT Anchor Pakan Jaya"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anchor-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/90 uppercase tracking-wider bg-anchor-navy-dark/90 px-2 py-0.5 rounded-xs border border-white/10">
                FASILITAS UTAMA // GUDANG CIKARANG
              </div>
            </div>

            <div className="p-4 bg-paper">
              <div className="flex items-center gap-2 font-mono text-[11px] text-anchor-navy font-semibold uppercase mb-1">
                <Building2 size={14} className="text-grain-gold-dark" />
                <span>PERGUDANGAN &amp; LOGISTIK</span>
              </div>
              <p className="text-[13px] text-slate leading-relaxed">
                Pusat pergudangan &amp; laboratorium analisis spesifikasi teknis di Cikarang, Bekasi, Jawa Barat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. VISI & MISI ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8">
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-1">
              MANIFESTO VISI &amp; STRATEGI MISI
            </span>
            <h2 className="font-display font-semibold text-[1.85rem] text-ink">Visi &amp; misi perusahaan</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi Register */}
            <div className="bg-anchor-navy text-white rounded-sm p-8 border-l-4 border-grain-gold shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold tracking-widest text-grain-gold uppercase mb-3">
                  KOMITMEN KORPORASI
                </span>
                <h3 className="font-display font-semibold text-[1.5rem] text-white mb-4 leading-snug">Visi Utama</h3>
                <p className="text-limestone text-[14px] leading-relaxed font-normal">
                  Menjadi mitra utama dan terpercaya dalam rantai pasok pakan ternak di Indonesia, yang dikenal atas konsistensi mutu produk, transparansi spesifikasi teknis, dan keandalan pengiriman tepat waktu.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-light">
                <span>STANDAR MUTU UTAMA</span>
                <span className="text-grain-gold font-semibold">ISO 9001:2015 AUDITED</span>
              </div>
            </div>

            {/* Misi Register */}
            <div className="bg-white rounded-sm border border-limestone-dark p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold tracking-widest text-grain-gold-dark uppercase mb-3">
                  LANGKAH STRATEGIS
                </span>
                <h3 className="font-display font-semibold text-[1.5rem] text-ink mb-5 leading-snug">Misi Perusahaan</h3>

                <ol className="space-y-4">
                  {[
                    'Menyediakan bahan baku mineral & aditif pakan dengan jaminan spesifikasi teruji laboratorium.',
                    'Menjaga ketersediaan stok secara konsisten untuk mendukung efisiensi operasional feed mill konsumen.',
                    'Memberikan layanan konsultasi teknis & pendampingan aplikasi produk per sektor ternak.',
                  ].map((m, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-ink leading-relaxed">
                      <CheckCircle2 size={18} className="text-grain-gold-dark shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 pt-4 border-t border-limestone-dark flex items-center justify-between text-[11px] font-mono text-slate">
                <span>DOKUMEN INTEGRITAS</span>
                <span className="text-anchor-navy font-semibold">PT ANCHOR PAKAN JAYA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. LAB QA & SERTIFIKASI ── */}
      <section className="bg-[#F6F6F2]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-center">
          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-xs">
            <div className="relative h-72 overflow-hidden bg-limestone">
              <img
                src="/images/about_lab_quality.jpg"
                alt="Pengujian Laboratorium PT Anchor Pakan Jaya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anchor-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px]">
                <span className="uppercase tracking-wider">QC LAB TESTING</span>
                <span className="text-grain-gold font-semibold">COA GUARANTEED</span>
              </div>
            </div>

            <div className="p-4 bg-paper border-t border-limestone-dark">
              <div className="flex items-center gap-2 font-mono text-[11px] text-anchor-navy font-semibold uppercase mb-1">
                <Award size={14} className="text-grain-gold-dark" />
                <span>STANDAR AKREDITASI</span>
              </div>
              <p className="text-[13px] text-slate leading-relaxed">
                Pengujian sampel per lot mencakup kadar air, kadar abu, kation exchange, &amp; aflatoksin.
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-2">
              FASILITAS LABORATORIUM QC
            </span>

            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-4">
              Laboratorium &amp; sertifikasi mutu
            </h2>

            <p className="text-[14px] text-slate max-w-[58ch] mb-8 leading-relaxed">
              Kualitas pakan sangat bergantung pada kemurnian bahan baku. Di laboratorium kami, setiap lot pengiriman diuji kadar kelembapan, massa jenis, kation exchange capacity, serta pengikatan aflatoksin sebelum dikirim ke konsumen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="#/sertifikasi"
                variant="primary"
                className="group hover:bg-anchor-navy-dark transition-all duration-fast"
              >
                <span>Halaman sertifikasi</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-fast text-white" />
              </Button>

              <Button
                as="a"
                variant="secondary"
                href={waLink('Halo, saya ingin berkonsultasi mengenai profil dan spesifikasi PT Anchor Pakan Jaya')}
                className="group"
              >
                <MessageCircle size={15} className="text-anchor-navy group-hover:scale-110 transition-transform duration-fast" />
                <span>Hubungi tim kami</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

