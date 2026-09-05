import { MessageCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { CERTIFICATIONS } from '../data/products.js'

export default function Certifications() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-3">
            Certifications &amp; quality control
          </h1>
          <p className="text-[15px] text-slate max-w-[60ch]">
            Henan Anchor Biotechnology Co., Ltd.'s commitment to feed quality is realized through documented quality control procedures and national &amp; international certifications.
          </p>
        </div>
      </section>

      {/* Certification Badges Grid */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16">
          <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-2">Official certifications</h2>
          <p className="text-[14px] text-slate max-w-[64ch] mb-10">
            Every product is processed and supervised in line with quality management system and animal feed safety regulations.
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
                4-step quality control procedure
              </h2>
              <p className="text-[14px] text-slate max-w-[50ch] mb-7 leading-relaxed">
                Comprehensive oversight from inbound raw material intake to final delivery at the customer's site.
              </p>
              <Button as="a" href="#/contact" variant="whatsapp">
                <MessageCircle size={15} />
                Ask a quality question
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { label: '01 — Inbound Material Inspection', value: 'Physical inspection & random sampling for every inbound truck/container of raw materials.' },
                { label: '02 — Laboratory Testing', value: 'Testing of moisture, mesh particle size, cation content, and aflatoxin B1.' },
                { label: '03 — COA Documentation', value: 'Issuance of a batch-specific Certificate of Analysis for every shipment.' },
                { label: '04 — Traceability System', value: 'Lot tracking from the originating producer to the feed mill delivery address.' },
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