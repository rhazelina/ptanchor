/* Hallmark · macrostructure: Spec Sheet · tone: editorial · genre: editorial · theme: Steel and Grain (design.md)
 * slop test: pass (58/58)
 */

import { ArrowRight, CheckCircle2, Building2, Award, MessageCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { waLink } from '../data/products.js'

export default function About() {
  return (
    <>
      {/* ── 01. PAGE HEADER & SPEC STRIP ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 pt-12 pb-10">

          <h1 className="font-display font-semibold text-[2.25rem] lg:text-[2.75rem] text-ink mb-4 leading-tight">
            About Henan Anchor Biotechnology Co., Ltd.
          </h1>

          <p className="text-[15px] text-slate max-w-[62ch] leading-relaxed">
            A trusted supplier of highly qualified mineral, additive, and feed premix raw materials since 2014.
          </p>
        </div>
      </section>

      {/* ── 02. PROFILE & CAPACITY ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-2">
              COMPANY PROFILE &amp; DISTRIBUTION
            </span>

            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-5">Company profile</h2>

            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-4">
              Established in 2014, <strong className="text-ink font-semibold">Henan Anchor Biotechnology Co., Ltd.</strong> is engaged in the procurement and processing of mineral raw materials and feed additives for the animal feed industry. We serve feed mills, feed ingredient distributors, and mid-to-large-scale independent farms across the globe.
            </p>

            <p className="text-[14px] text-slate max-w-[64ch] leading-relaxed mb-8">
              With modern storage facilities and a quality control laboratory in our Henan industrial base, we guarantee uninterrupted stock availability and stable physical and chemical grades in every dispatched lot.
            </p>

            {/* Capacity Stat Ledger */}
            <div className="grid grid-cols-2 gap-6 border-t border-b border-limestone-dark/80 py-6 my-2 bg-paper/50">
              <div className="space-y-1">
                <span className="block text-[11px] font-mono font-semibold text-grain-gold-dark uppercase tracking-wider">
                  MONTHLY CAPACITY
                </span>
                <span className="font-display font-bold text-[2rem] text-anchor-navy leading-none">2,500+</span>
                <span className="block text-[12px] text-slate font-mono">Tons of Raw Materials / Month</span>
              </div>

              <div className="space-y-1">
                <span className="block text-[11px] font-mono font-semibold text-grain-gold-dark uppercase tracking-wider">
                  INDUSTRY EXPERIENCE
                </span>
                <span className="font-display font-bold text-[2rem] text-anchor-navy leading-none">12+ Years</span>
                <span className="block text-[12px] text-slate font-mono">Established Since 2014</span>
              </div>
            </div>
          </div>

          {/* Facility Photo Spec Card */}
          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-xs">
            <div className="relative h-64 overflow-hidden bg-limestone border-b border-limestone-dark">
              <img
                src="/images/hero_factory_warehouse.jpg"
                alt="Henan Anchor Biotechnology Co., Ltd. warehouse & facilities"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anchor-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/90 uppercase tracking-wider bg-anchor-navy-dark/90 px-2 py-0.5 rounded-xs border border-white/10">
                MAIN FACILITY // HENAN WAREHOUSE
              </div>
            </div>

            <div className="p-4 bg-paper">
              <div className="flex items-center gap-2 font-mono text-[11px] text-anchor-navy font-semibold uppercase mb-1">
                <Building2 size={14} className="text-grain-gold-dark" />
                <span>WAREHOUSING &amp; LOGISTICS</span>
              </div>
              <p className="text-[13px] text-slate leading-relaxed">
                Central warehousing &amp; technical specification analysis laboratory in the Zhengzhou Hi-Tech Development Zone, Henan, China.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. VISION & MISSION ── */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <div className="mb-8">
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-1">
              VISION &amp; MISSION MANIFESTO
            </span>
            <h2 className="font-display font-semibold text-[1.85rem] text-ink">Company vision &amp; mission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Register */}
            <div className="bg-anchor-navy text-white rounded-sm p-8 border-l-4 border-grain-gold shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold tracking-widest text-grain-gold uppercase mb-3">
                  CORPORATE COMMITMENT
                </span>
                <h3 className="font-display font-semibold text-[1.5rem] text-white mb-4 leading-snug">Primary Vision</h3>
                <p className="text-limestone text-[14px] leading-relaxed font-normal">
                  To be a principal and trusted partner in the animal feed supply chain worldwide, recognized for consistent product quality, transparent technical specifications, and reliable on-time delivery.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-light">
                <span>CORE QUALITY STANDARD</span>
                <span className="text-grain-gold font-semibold">ISO 9001:2015 AUDITED</span>
              </div>
            </div>

            {/* Mission Register */}
            <div className="bg-white rounded-sm border border-limestone-dark p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold tracking-widest text-grain-gold-dark uppercase mb-3">
                  STRATEGIC STEPS
                </span>
                <h3 className="font-display font-semibold text-[1.5rem] text-ink mb-5 leading-snug">Company Mission</h3>

                <ol className="space-y-4">
                  {[
                    'Supply mineral & feed additive raw materials with specifications guaranteed by laboratory testing.',
                    'Maintain consistent stock availability to support the operational efficiency of customer feed mills.',
                    'Provide technical consulting services and product application support per livestock sector.',
                  ].map((m, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-ink leading-relaxed">
                      <CheckCircle2 size={18} className="text-grain-gold-dark shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 pt-4 border-t border-limestone-dark flex items-center justify-between text-[11px] font-mono text-slate">
                <span>INTEGRITY DOCUMENT</span>
                <span className="text-anchor-navy font-semibold">HENAN ANCHOR BIOTECHNOLOGY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. LAB QA & CERTIFICATION ── */}
      <section className="bg-[#F6F6F2]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-center">
          <div className="rounded-sm border border-limestone-dark overflow-hidden bg-white shadow-xs">
            <div className="relative h-72 overflow-hidden bg-limestone">
              <img
                src="/images/about_lab_quality.jpg"
                alt="Henan Anchor Biotechnology Co., Ltd. laboratory testing"
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
                <span>ACCREDITATION STANDARD</span>
              </div>
              <p className="text-[13px] text-slate leading-relaxed">
                Per-lot sample testing covers moisture, ash content, cation exchange, &amp; aflatoxin.
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] text-grain-gold-dark font-semibold uppercase tracking-widest block mb-2">
              QC LABORATORY FACILITY
            </span>

            <h2 className="font-display font-semibold text-[1.85rem] text-ink mb-4">
              Laboratory &amp; quality certification
            </h2>

            <p className="text-[14px] text-slate max-w-[58ch] mb-8 leading-relaxed">
              Feed quality depends heavily on the purity of raw materials. In our laboratory, every dispatched lot is tested for moisture, bulk density, cation exchange capacity, and aflatoxin binding before it reaches the customer.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="#/certifications"
                variant="primary"
                className="group hover:bg-anchor-navy-dark transition-all duration-fast"
              >
                <span>Certifications page</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-fast text-white" />
              </Button>

              <Button
                as="a"
                variant="secondary"
                href={waLink('Hello, I would like to consult about the profile and specifications of Henan Anchor Biotechnology Co., Ltd.')}
                className="group"
              >
                <MessageCircle size={15} className="text-anchor-navy group-hover:scale-110 transition-transform duration-fast" />
                <span>Contact our team</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}