import { MessageCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { CERTIFICATIONS } from '../data/products.js'

export default function Sertifikasi() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-3">
            Sertifikasi &amp; kontrol kualitas
          </h1>
          <p className="text-[15px] text-slate max-w-[60ch]">
            Komitmen PT Anchor Pakan Jaya terhadap mutu pakan ternak diwujudkan melalui prosedur kontrol kualitas terdokumentasi dan sertifikasi nasional &amp; internasional.
          </p>
        </div>
      </section>

      {/* Certification Badges Grid */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-2">Sertifikasi resmi</h2>
          <p className="text-[14px] text-slate max-w-[64ch] mb-10">
            Setiap produk diproses dan diawasi sesuai regulasi sistem manajemen mutu dan keselamatan pakan ternak.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.name}
                className="bg-white p-6 rounded-sm border border-limestone-dark hover:border-anchor-navy transition-all duration-fast flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center bg-limestone/50 rounded-sm border border-limestone-dark">
                  <img src={c.badge} alt={c.name} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="font-display font-bold text-[1.1rem] text-anchor-navy mb-1.5">{c.name}</h3>
                <p className="text-[13px] text-slate leading-relaxed">{c.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Workflow */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-4">
                Prosedur kontrol kualitas 4-tahap
              </h2>
              <p className="text-[14px] text-slate max-w-[50ch] mb-7 leading-relaxed">
                Pengawasan komprehensif mulai dari penerimaan bahan baku kasar hingga pengiriman akhir ke lokasi konsumen.
              </p>
              <Button as="a" href="#/kontak" variant="whatsapp">
                <MessageCircle size={15} />
                Ajukan pertanyaan kualitas
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { label: '01 — Inspeksi Bahan Masuk', value: 'Pemeriksaan fisik & pengambilan sampel acak untuk setiap armada truk/kontainer bahan baku.' },
                { label: '02 — Pengujian Laboratorium', value: 'Pengujian kadar air, ukuran partikel mesh, kandungan kation, dan aflatoksin B1.' },
                { label: '03 — Dokumentasi COA', value: 'Penerbitan Certificate of Analysis spesifik per nomor batch pengiriman.' },
                { label: '04 — Sistem Penelusuran', value: 'Pencatatan lot produk dari produsen asal hingga alamat pengiriman pabrik pakan.' },
              ].map((r) => (
                <div
                  key={r.label}
                  className="bg-white px-5 py-4 rounded-sm border border-limestone-dark flex gap-4 items-start shadow-sm"
                >
                  <span className="text-[11px] font-bold text-grain-gold-dark uppercase tracking-widest shrink-0 pt-0.5 w-6">
                    {r.label.split('—')[0].trim()}
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink mb-1">
                      {r.label.split('—')[1]?.trim()}
                    </div>
                    <p className="text-[13px] text-slate leading-relaxed">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
