/* Hallmark · macrostructure: Manifest Ledger · tone: editorial · genre: editorial · theme: Steel and Grain (design.md)
 * slop test: pass (58/58)
 */

import { ArrowRight, CheckCircle2, Layers, FlaskConical, Beaker, Package, MessageCircle, ShieldCheck, FileCheck, Truck, Clock } from 'lucide-react'
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

export default function Home() {
  return (
    <>
      {/* ── 01. HERO: MANIFESTO SPLIT ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 pt-12 pb-16 lg:pt-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>

            <h1 className="font-display font-semibold text-[2.5rem] lg:text-[3.25rem] leading-[1.1] text-ink mb-6 max-w-[17ch]">
              Animal feed raw materials{' '}
              <span className="text-anchor-navy underline decoration-grain-gold decoration-4 underline-offset-4">
                with consistent quality
              </span>
            </h1>

            <p className="text-[15px] text-slate max-w-[52ch] mb-8 leading-relaxed">
              Supplying high-quality minerals, toxin binders, and feed additives to the feed mill industry, integrators, distributors, and large-scale livestock producers worldwide.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href="#/products"
                variant="primary"
                className="group hover:bg-anchor-navy-dark transition-all duration-fast"
              >
                <span>View product catalog</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>

              <Button
                as="a"
                variant="whatsapp"
                href={waLink('Hello Henan Anchor Biotechnology Co., Ltd., I would like to consult about feed raw material products.')}
                className="group shadow-none border border-whatsapp/20"
              >
                <MessageCircle size={15} className="group-hover:scale-110 transition-transform duration-fast" />
                <span>Contact Sales on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Right Spec Panel Ledger */}
          <div className="border border-limestone-dark rounded-sm overflow-hidden bg-white shadow-xs">
            <div className="relative h-48 overflow-hidden bg-limestone border-b border-limestone-dark">
              <img
                src="/images/hero_factory_warehouse.jpg"
                alt="Henan Anchor Biotechnology Co., Ltd. plant facilities & warehouse"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anchor-navy/80 via-anchor-navy/20 to-transparent" />

              <div className="absolute top-3 right-3 bg-white/95 rounded-xs p-1.5 shadow-xs border border-limestone-dark">
                <AnchorLogo className="h-7 w-auto" />
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-[11px]">
                <span className="uppercase tracking-wider font-medium">HEADQUARTERS HENAN, CHINA</span>
                <span className="inline-flex items-center gap-1 text-pasture-green bg-anchor-navy-dark/90 px-2 py-0.5 rounded-xs text-[10px]">
                  ● OPERATIONAL
                </span>
              </div>
            </div>

            <div className="divide-y divide-limestone-dark font-mono text-[12px]">
              {[
                { label: 'Supply Capacity', value: '2,500 Tons / Month', icon: Truck },
                { label: 'Quality Certification', value: 'ISO 9001 · GMP+ · Halal', icon: FileCheck },
                { label: 'Industry Experience', value: '12+ Years (Est. 2014)', icon: Clock },
                { label: 'Delivery Coverage', value: 'Worldwide Export', icon: ShieldCheck },
              ].map((r) => {
                const IconComp = r.icon
                return (
                  <div
                    key={r.label}
                    className="flex justify-between items-center px-4 py-3 bg-paper/50 hover:bg-limestone/40 transition-colors"
                  >
                    <span className="text-slate font-medium flex items-center gap-2">
                      <IconComp size={13} className="text-grain-gold-dark shrink-0" />
                      <span>{r.label}</span>
                    </span>
                    <span className="font-semibold text-anchor-navy text-right">{r.value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. PRODUCT CATEGORIES ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-1">
                FORMULATION CATEGORIES
              </span>
              <h2 className="font-display font-semibold text-[1.85rem] text-ink">Product categories</h2>
            </div>
            <p className="text-[14px] text-slate max-w-[48ch]">
              Core mineral, additive, and premix lines standardized for the animal feed industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((c) => {
              const count = PRODUCTS.filter((p) => p.category === c.id).length
              const Icon = CATEGORY_ICONS[c.id] ?? Layers
              return (
                <a
                  key={c.id}
                  href={`#/products?category=${c.id}`}
                  className="group bg-white p-5 rounded-sm border border-limestone-dark hover:border-grain-gold hover:shadow-xs transition-all duration-fast flex flex-col justify-between min-h-[150px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 h-1 w-full bg-transparent group-hover:bg-grain-gold transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="p-2 rounded-xs bg-limestone text-anchor-navy group-hover:bg-anchor-navy group-hover:text-white transition-colors duration-fast">
                        <Icon size={20} />
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-[1.1rem] text-ink group-hover:text-anchor-navy leading-snug">
                      {c.name}
                    </h3>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-[12px] text-slate pt-3 border-t border-limestone-dark/80 font-mono">
                    <span className="font-medium text-slate-dark">{count} Product Variants</span>
                    <ArrowRight size={13} className="text-grain-gold-dark group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 03. FEATURED PRODUCTS (MANIFEST TABLE) ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-1">
                FEATURED CATALOG
              </span>
              <h2 className="font-display font-semibold text-[1.85rem] text-ink">Featured products</h2>
            </div>

            <Button as="a" variant="secondary" href="#/products" className="group">
              <span>View all products</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="bg-white border border-limestone-dark rounded-sm overflow-hidden shadow-xs">
            {/* Manifest Table Header */}
            <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-x-4 px-5 py-3 bg-[#F4F4EE] text-[11px] text-anchor-navy font-mono font-semibold uppercase tracking-wider border-b border-limestone-dark">
              <span>PRODUCT &amp; DESCRIPTION</span>
              <span className="px-4">GRADE</span>
              <span className="px-4">PACKAGING</span>
              <span className="text-right">SPECIFICATIONS</span>
            </div>

            <div className="divide-y divide-limestone-dark/80">
              {FEATURED.map((p) => (
                <ManifestRow key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. QC FEATURE & CONTROL REGISTER ── */}
      <section className="border-b border-limestone-dark bg-[#F6F6F2]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-2">
              QUALITY ASSURANCE
            </span>
            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-4">
              Quality control &amp; assurance
            </h2>

            <p className="text-[14px] text-slate max-w-[56ch] mb-8 leading-relaxed">
              Every batch of raw material undergoes rigorous laboratory testing. We ensure active ingredient levels, moisture, and contaminant levels stay within national and international limit thresholds.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { t: 'In-House Laboratory Testing', d: 'Every batch is sampled and inspected before dispatch to customers.' },
                { t: 'COA (Certificate of Analysis) Documentation', d: 'Batch-specific Certificate of Analysis for full technical transparency.' },
                { t: 'Technical Support & Feed Formulation', d: 'Consulting team supporting feed application across livestock sectors.' },
              ].map((x) => (
                <li key={x.t} className="flex gap-3 text-ink">
                  <CheckCircle2 size={18} className="text-grain-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[14px] text-ink font-display">{x.t}</div>
                    <p className="text-[13px] text-slate mt-0.5 leading-normal">{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button as="a" href="#/about" variant="tertiary" className="group">
              <span>More about quality control</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-xs">
            <img
              src="/images/about_lab_quality.jpg"
              alt="Henan Anchor Biotechnology Co., Ltd. quality testing laboratory"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 border-t border-limestone-dark bg-paper">
              <span className="text-[11px] font-mono font-semibold text-grain-gold-dark uppercase tracking-widest block mb-1">
                QUALITY CONTROL FACILITY HENAN
              </span>
              <p className="text-[13px] text-slate leading-relaxed">
                Certified laboratory for testing mineral, additive, &amp; feed premix quality to ISO 9001:2015.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. LIVESTOCK SECTOR APPLICATION ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8">
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-1">
              LIVESTOCK SECTORS
            </span>
            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-2">Application by livestock sector</h2>
            <p className="text-[14px] text-slate max-w-[56ch]">
              Products formulated specifically to the nutritional standards of various livestock types and aquatic commodities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((s) => (
              <a
                key={s.id}
                href={`#/products?animal=${s.id}`}
                className="group relative rounded-sm overflow-hidden border border-limestone-dark hover:border-grain-gold hover:shadow-sm transition-all duration-fast h-60 flex flex-col justify-end"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anchor-navy/90 via-anchor-navy/40 to-transparent" />

                <div className="relative z-10 p-4">
                  <h3 className="font-display font-semibold text-[16px] text-white leading-tight mb-1 group-hover:text-grain-gold transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-white/80 text-[12px] line-clamp-2 leading-relaxed font-body">
                    {s.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}