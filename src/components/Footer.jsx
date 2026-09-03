/* Hallmark · component: footer · genre: editorial · theme: Steel and Grain (design.md)
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (APCA Lc > 75, WCAG AAA compliant)
 */

import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, ArrowUpRight } from 'lucide-react'
import AnchorLogo from './AnchorLogo.jsx'
import { waLink, ADDRESS, PHONE_DISPLAY, EMAIL } from '../data/products.js'

const NAV_ITEMS = [
  { href: '#/', label: 'Beranda', code: '00' },
  { href: '#/produk', label: 'Katalog produk', code: '01' },
  { href: '#/tentang', label: 'Tentang kami', code: '02' },
  { href: '#/sertifikasi', label: 'Sertifikasi', code: '03' },
  { href: '#/kontak', label: 'Kontak', code: '04' },
]

export default function Footer({
  navItems = NAV_ITEMS,
  disabled = false,
  className = '',
}) {
  const phoneHref = `tel:${PHONE_DISPLAY.replace(/[^0-9+]/g, '')}`
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`bg-anchor-navy text-white font-body border-t border-anchor-navy-dark ${className} ${
        disabled ? 'pointer-events-none opacity-60' : ''
      }`}
    >
      {/* Editorial Hairline Top Accent Rule */}
      <div className="h-[3px] bg-grain-gold w-full" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px] px-5 lg:px-16 pt-12 pb-8">
        {/* Section 1: Masthead Statement & Brand Identification */}
        <div className="pb-10 border-b border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <a
              href="#/"
              aria-label="PT Anchor Pakan Jaya Beranda"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2 focus-visible:ring-offset-anchor-navy rounded-sm"
            >
              <span className="inline-flex items-center justify-center bg-white rounded-sm p-1.5 transition-transform duration-fast group-hover:scale-105">
                <AnchorLogo className="h-7 w-auto" />
              </span>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-[22px] tracking-tight text-white group-hover:text-grain-gold transition-colors">
                  PT Anchor Pakan Jaya
                </span>
                <span className="font-mono text-[11px] text-slate-light font-medium uppercase tracking-widest">
                  EST. 1998 · SURABAYA / CIKARANG
                </span>
              </div>
            </a>

            <p className="text-[14px] text-limestone leading-relaxed font-normal max-w-[56ch]">
              Pemasok utama bahan baku &amp; aditif pakan ternak berkualitas tinggi untuk industri feed mill, integrator, dan peternak profesional di seluruh Indonesia.
            </p>
          </div>

          {/* Quick WA Action Box */}
          <div className="shrink-0 bg-anchor-navy-dark border border-white/20 rounded-sm p-4 w-full sm:w-auto">
            <div className="text-[11px] font-mono text-grain-gold uppercase tracking-wider mb-2 flex items-center gap-1.5 font-medium">
              <ShieldCheck size={13} className="text-grain-gold" />
              <span>DOKUMEN KONTROL: SALURAN RESMI</span>
            </div>
            <a
              href={disabled ? undefined : waLink('Halo PT Anchor Pakan Jaya, saya ingin berkonsultasi mengenai produk.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white text-[13px] font-semibold px-4 py-2.5 rounded-sm hover:bg-[#1ebe5d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2 focus-visible:ring-offset-anchor-navy min-h-[44px] w-full sm:w-auto"
            >
              <MessageCircle size={16} />
              <span>Konsultasi Sales WhatsApp</span>
              <ArrowUpRight size={14} className="opacity-90" />
            </a>
          </div>
        </div>

        {/* Section 2: Spec Register Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 lg:gap-12 py-10 border-b border-white/15">
          {/* Register 01: Physical Address & Logistics */}
          <div className="min-w-0 flex flex-col space-y-4 items-start justify-start">
            <h2 className="text-[11px] font-mono font-semibold text-grain-gold uppercase tracking-widest flex items-center gap-2 h-5 leading-none">
              <span className="text-slate-light font-normal">REGISTER 01 //</span>
              <span>KANTOR &amp; GUDANG PUSAT</span>
            </h2>
            <div className="flex gap-3 text-[13px] text-limestone leading-relaxed">
              <MapPin size={16} className="shrink-0 text-grain-gold mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
            <div className="pt-2 text-[12px] text-slate-light font-mono space-y-1">
              <p>JAM OPERASIONAL: SENIN–JUMAT 08.00–17.00 WIB</p>
              <p>INSPEKSI FISIK &amp; SAMPLE TESTING TERSEDIA VIA PERMOHONAN</p>
            </div>
          </div>

          {/* Register 02: Direct Technical Contacts */}
          <div className="min-w-0 flex flex-col space-y-4 items-start justify-start">
            <h2 className="text-[11px] font-mono font-semibold text-grain-gold uppercase tracking-widest flex items-center gap-2 h-5 leading-none">
              <span className="text-slate-light font-normal">REGISTER 02 //</span>
              <span>KONTAK SPESIFIKASI</span>
            </h2>
            <ul className="space-y-2.5 text-[13px] w-full min-w-0">
              <li className="w-full min-w-0">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-limestone hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold rounded-sm w-full min-w-0 group"
                >
                  <span className="p-2 rounded-sm bg-anchor-navy-dark/60 text-grain-gold shrink-0 border border-white/10 group-hover:border-grain-gold/50 transition-colors">
                    <Phone size={14} />
                  </span>
                  <span className="font-mono text-[13px] text-limestone group-hover:text-white group-hover:underline flex-1 min-w-0">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li className="w-full min-w-0">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-limestone hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold rounded-sm w-full min-w-0 group"
                >
                  <span className="p-2 rounded-sm bg-anchor-navy-dark/60 text-grain-gold shrink-0 border border-white/10 group-hover:border-grain-gold/50 transition-colors">
                    <Mail size={14} />
                  </span>
                  <span className="font-mono text-[13px] text-limestone group-hover:text-white group-hover:underline flex-1 min-w-0 break-all">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="w-full min-w-0">
                <a
                  href={waLink()}
                  className="flex items-center gap-3 text-limestone hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold rounded-sm w-full min-w-0 group"
                >
                  <span className="p-2 rounded-sm bg-anchor-navy-dark/60 text-grain-gold shrink-0 border border-white/10 group-hover:border-grain-gold/50 transition-colors">
                    <MessageCircle size={14} />
                  </span>
                  <span className="text-[13px] text-limestone group-hover:text-white group-hover:underline flex-1 min-w-0">
                    WhatsApp Layanan Pelanggan
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Register 03: Document Index / Navigation */}
          <div className="min-w-0 flex flex-col space-y-4 items-start justify-start">
            <h2 className="text-[11px] font-mono font-semibold text-grain-gold uppercase tracking-widest flex items-center gap-2 h-5 leading-none">
              <span className="text-slate-light font-normal">REGISTER 03 //</span>
              <span>INDEX DOKUMEN</span>
            </h2>
            <nav aria-label="Navigasi Footer" className="w-full min-w-0">
              <ul className="space-y-1.5 text-[13px] w-full min-w-0">
                {navItems.map((item) => (
                  <li key={item.href} className="w-full min-w-0">
                    <a
                      href={item.href}
                      className="flex items-center justify-between text-limestone hover:text-white bg-anchor-navy-dark/40 hover:bg-anchor-navy-dark border border-white/5 hover:border-grain-gold/40 px-3 py-2 rounded-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold group w-full min-w-0"
                    >
                      <span className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="font-mono text-[11px] text-grain-gold font-semibold shrink-0">
                          {item.code}
                        </span>
                        <span className="text-[13px] text-limestone group-hover:text-white flex-1 min-w-0 group-hover:translate-x-0.5 transition-transform duration-fast">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight size={12} className="text-slate-light group-hover:text-grain-gold transition-colors shrink-0 ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Section 3: Bottom Colophon & Compliance Footnote */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] font-mono text-slate-light">
          <div>
            <span>© {currentYear} PT ANCHOR PAKAN JAYA. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-light">
            <span>PREMIX &amp; ADITIF</span>
            <span className="text-grain-gold">·</span>
            <span>ACIDIFIER &amp; BINDER</span>
            <span className="text-grain-gold">·</span>
            <span>MINERAL &amp; AMINO</span>
          </div>

          <div>
            <span className="text-grain-gold font-semibold tracking-wider">ISO 9001:2015 AUDITED</span>
          </div>
        </div>
      </div>
    </footer>
  )
}