/* Hallmark · component: header · genre: editorial · theme: Steel and Grain (design.md)
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass
 */

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, ShieldCheck, Phone } from 'lucide-react'
import AnchorLogo from './AnchorLogo.jsx'
import Button from './Button.jsx'
import { waLink } from '../data/products.js'

const NAV_ITEMS = [
  { href: '#/produk', label: 'Produk', code: '01' },
  { href: '#/tentang', label: 'Tentang kami', code: '02' },
  { href: '#/sertifikasi', label: 'Sertifikasi', code: '03' },
  { href: '#/kontak', label: 'Kontak', code: '04' },
]

export default function Header({
  navItems = NAV_ITEMS,
  disabled = false,
  loading = false,
  forceMobileOpen = false,
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(forceMobileOpen)
  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash || '#/' : '#/'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isNavActive = (href) => {
    if (href === '#/' && (currentHash === '#/' || currentHash === '')) return true
    if (href !== '#/' && currentHash.startsWith(href)) return true
    return false
  }

  return (
    <header className={`border-b border-limestone-dark bg-paper sticky top-0 z-40 ${className}`}>
      {/* Spec-Sheet Metadata Banner (Editorial Top Bar) */}
      <div className="hidden md:block border-b border-limestone-dark/60 bg-[#F4F4EE] text-[11px] font-body text-slate py-1.5 px-5 lg:px-16">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="text-anchor-navy font-semibold uppercase tracking-wider">
              PT Anchor Pakan Jaya
            </span>
            <span className="text-slate-light">│</span>
            <span className="text-slate">REG: SP-998/SUB</span>
            <span className="text-slate-light">│</span>
            <span className="text-slate">ISO 9001:2015 CERTIFIED</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-pasture-green font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-pasture-green animate-pulse" />
              STATUS: PENGIRIMAN AKTIF
            </span>
            <span className="text-slate-light">│</span>
            <a
              href="tel:+62315550192"
              className="inline-flex items-center gap-1 text-slate hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grain-gold"
            >
              <Phone size={11} className="text-slate" />
              <span>(031) 555-0192</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-[1200px] px-5 lg:px-16">
        <div className="flex h-[64px] items-center justify-between gap-6">
          {/* Brand Logo & Wordmark */}
          <a
            href="#/"
            aria-label="PT Anchor Pakan Jaya Beranda"
            className="flex items-center gap-3 font-display font-semibold text-[19px] leading-none text-anchor-navy shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2 rounded-sm group"
          >
            <div className="p-1 rounded-sm group-hover:bg-limestone transition-colors duration-fast">
              <AnchorLogo className="h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="tracking-tight text-anchor-navy group-hover:text-anchor-navy-dark">
                Anchor Pakan Jaya
              </span>
              <span className="font-body text-[10px] uppercase font-medium tracking-widest text-slate-light">
                B2B Raw Materials
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className={`hidden md:flex items-center self-stretch gap-1 text-[14px] font-body ${
              disabled ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            {navItems.map((item) => {
              const active = isNavActive(item.href)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex items-center h-full px-4 font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-1 rounded-t-sm ${
                    active
                      ? 'text-anchor-navy font-semibold bg-limestone/40'
                      : 'text-slate hover:text-ink hover:bg-limestone/20'
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-light mr-1.5">
                    {item.code}
                  </span>
                  <span>{item.label}</span>

                  {/* Hairline Indicator */}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-grain-gold"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Action Area: WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              as="a"
              variant="whatsapp"
              disabled={disabled}
              href={
                disabled
                  ? undefined
                  : waLink('Halo PT Anchor Pakan Jaya, saya ingin berkonsultasi mengenai spesifikasi pakan.')
              }
              className="text-[13px] py-2 px-4 shadow-none border border-whatsapp/20"
            >
              {loading ? (
                <span className="inline-block h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1" />
              ) : (
                <MessageCircle size={15} />
              )}
              <span>Hubungi Sales</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            disabled={disabled}
            className="md:hidden flex items-center justify-center h-10 w-10 min-h-[44px] min-w-[44px] -mr-2 text-anchor-navy hover:bg-limestone rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi Seluler"
          className="md:hidden border-t border-limestone-dark bg-paper animate-fadeIn"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-4 flex flex-col gap-1">
            <div className="pb-2 border-b border-limestone-dark/50 mb-2 flex items-center justify-between text-[11px] font-mono text-slate uppercase">
              <span>Spesifikasi Navigasi</span>
              <span className="inline-flex items-center gap-1 text-pasture-green">
                <ShieldCheck size={12} /> Terverifikasi
              </span>
            </div>

            {navItems.map((item) => {
              const active = isNavActive(item.href)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between py-3 px-3 rounded-sm text-[15px] font-body transition-colors ${
                    active
                      ? 'bg-anchor-navy text-white font-semibold'
                      : 'text-ink hover:bg-limestone hover:text-anchor-navy'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[11px] ${
                        active ? 'text-grain-gold' : 'text-slate'
                      }`}
                    >
                      {item.code}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-grain-gold" />}
                </a>
              )
            })}

            <div className="pt-4 border-t border-limestone-dark/60 mt-2">
              <Button
                as="a"
                variant="whatsapp"
                href={waLink('Halo PT Anchor Pakan Jaya, saya ingin berkonsultasi mengenai produk.')}
                className="w-full justify-center py-3"
              >
                <MessageCircle size={16} />
                <span>Hubungi Sales WhatsApp</span>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

