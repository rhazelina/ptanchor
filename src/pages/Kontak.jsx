import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { PHONE_DISPLAY, EMAIL, ADDRESS, waLink } from '../data/products.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+\-\s()]{8,}$/

const phoneHref = `tel:${PHONE_DISPLAY.replace(/[^0-9+]/g, '')}`

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    perusahaan: '',
    email: '',
    hp: '',
    pesan: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.nama.trim()) err.nama = 'Nama wajib diisi.'
    if (!form.email.trim()) err.email = 'Email wajib diisi.'
    else if (!EMAIL_RE.test(form.email)) err.email = 'Format email tidak valid.'
    if (!form.hp.trim()) err.hp = 'Nomor HP wajib diisi.'
    else if (!PHONE_RE.test(form.hp)) err.hp = 'Format nomor HP tidak valid.'
    if (!form.pesan.trim()) err.pesan = 'Pesan wajib diisi.'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const fieldCls = (key) =>
    `w-full border rounded-sm px-4 py-2.5 font-body text-[14px] bg-white outline-none transition-colors duration-fast ${
      errors[key]
        ? 'border-danger focus:border-danger'
        : 'border-limestone-dark focus:border-anchor-navy focus:ring-[3px] focus:ring-grain-gold/25'
    }`

  const labelCls = 'block text-[13px] font-medium text-slate mb-1.5'

  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-3">
            Kontak &amp; permintaan penawaran
          </h1>
          <p className="text-[15px] text-slate max-w-[58ch]">
            Hubungi tim sales PT Anchor Pakan Jaya untuk konsultasi spesifikasi produk, harga grosir, atau jadwal pengiriman.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-pasture-green/40 rounded-sm bg-pasture-green/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={28} className="text-pasture-green" />
                  <h2 className="font-display font-semibold text-[1.25rem] text-ink">
                    Pesan terkirim
                  </h2>
                </div>
                <p className="text-[14px] text-slate leading-relaxed mb-6">
                  Tim sales PT Anchor Pakan Jaya akan segera menghubungi anda melalui email atau WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ nama: '', perusahaan: '', email: '', hp: '', pesan: '' })
                  }}
                >
                  Kirim pesan lain
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-white p-7 rounded-sm border border-limestone-dark shadow-sm">
                <h2 className="font-display font-semibold text-[1.5rem] text-ink mb-6">
                  Formulir kontak &amp; penawaran
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nama" className={labelCls}>Nama Lengkap</label>
                    <input id="nama" type="text" value={form.nama} onChange={set('nama')} className={fieldCls('nama')} placeholder="Masukkan nama lengkap" />
                    {errors.nama && <p className="mt-1 text-[12px] text-danger">{errors.nama}</p>}
                  </div>

                  <div>
                    <label htmlFor="perusahaan" className={labelCls}>Nama Perusahaan / Feed Mill <span className="text-slate/60 font-normal">(opsional)</span></label>
                    <input id="perusahaan" type="text" value={form.perusahaan} onChange={set('perusahaan')} className={fieldCls('perusahaan')} placeholder="Contoh: PT Feedmill Indonesia" />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>Email Bisnis</label>
                    <input id="email" type="email" value={form.email} onChange={set('email')} className={fieldCls('email')} placeholder="nama@perusahaan.com" />
                    {errors.email && <p className="mt-1 text-[12px] text-danger">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="hp" className={labelCls}>Nomor WhatsApp / Telepon</label>
                    <input id="hp" type="text" value={form.hp} onChange={set('hp')} className={fieldCls('hp')} placeholder="08xx-xxxx-xxxx" />
                    {errors.hp && <p className="mt-1 text-[12px] text-danger">{errors.hp}</p>}
                  </div>

                  <div>
                    <label htmlFor="pesan" className={labelCls}>Pesan / Kebutuhan Produk &amp; Volume</label>
                    <textarea id="pesan" rows="4" value={form.pesan} onChange={set('pesan')} className={fieldCls('pesan')} placeholder="Tuliskan spesifikasi produk dan estimasi tonase yang dibutuhkan..." />
                    {errors.pesan && <p className="mt-1 text-[12px] text-danger">{errors.pesan}</p>}
                  </div>

                  <Button type="submit" className="w-full justify-center">
                    Kirim pesan penawaran
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-display font-semibold text-[1.5rem] text-ink mb-6">
              Informasi &amp; lokasi fasilitas
            </h2>

            <div className="bg-white rounded-sm border border-limestone-dark shadow-sm mb-6 divide-y divide-limestone-dark">
              <div className="flex gap-3.5 p-5">
                <MapPin size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Alamat Fasilitas &amp; Gudang</span>
                  <p className="text-[14px] text-ink leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <Phone size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Telepon Kantor</span>
                  <a href={phoneHref} className="text-[14px] font-semibold text-anchor-navy hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <Mail size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Email Sales</span>
                  <a href={`mailto:${EMAIL}`} className="text-[14px] font-semibold text-anchor-navy hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <MessageCircle size={17} className="text-whatsapp shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Chat WhatsApp Sales</span>
                  <a
                    href={waLink('Halo sales PT Anchor Pakan Jaya, saya ingin menanyakan informasi harga dan spesifikasi bahan baku pakan.')}
                    className="text-[14px] font-semibold text-pasture-green hover:underline"
                  >
                    Chat langsung via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-sm border border-limestone-dark overflow-hidden shadow-sm">
              <div className="relative h-56 overflow-hidden bg-limestone">
                <img
                  src="/images/contact_map.jpg"
                  alt="Peta Lokasi Kawasan Industri Cikarang PT Anchor Pakan Jaya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 bg-white border-t border-limestone-dark">
                <p className="text-[13px] text-slate">
                  <strong className="text-ink">Lokasi strategis:</strong> Kawasan Industri Cikarang Selatan, Bekasi — akses tol langsung untuk distribusi nasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
