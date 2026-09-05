/* Hallmark · component: footer · 8-state preview wrapper
 * theme: Steel and Grain (design.md)
 */

import Footer from './Footer.jsx'

export default function FooterPreview() {
  return (
    <div className="min-h-screen bg-paper text-ink p-8 font-body space-y-10 max-w-6xl mx-auto">
      <header className="border-b border-limestone-dark pb-4">
        <span className="font-mono text-xs text-grain-gold font-semibold uppercase tracking-widest block mb-1">
          Hallmark Component Preview · 8-State Ledger
        </span>
        <h1 className="font-display text-2xl font-bold text-anchor-navy">
          Footer Component — 8-State Inspection
        </h1>
        <p className="text-sm text-slate">
          Visual verification wrapper for Henan Anchor Biotechnology Co., Ltd. spec-sheet footer.
        </p>
      </header>

      {/* 1. Default State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">1. Default State</span>
          <span>Standard rest position</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer />
        </div>
      </section>

      {/* 2. Hover State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">2. Hover State</span>
          <span>Simulated index link hover highlight</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer className="[&_nav_a:nth-child(2)]:bg-white/15 [&_nav_a:nth-child(2)]:text-white" />
        </div>
      </section>

      {/* 3. Focus State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">3. Keyboard Focus-Visible State</span>
          <span>focus-visible outline-ring in grain-gold</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer className="[&_a:first-child]:ring-2 [&_a:first-child]:ring-grain-gold [&_a:first-child]:ring-offset-2 [&_a:first-child]:ring-offset-anchor-navy" />
        </div>
      </section>

      {/* 4. Active Route State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">4. Active Route / Custom Navigation</span>
          <span>Spec-coded navigation index</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer
            navItems={[
              { href: '#/', label: 'Home', code: '00' },
              { href: '#/products', label: 'Product catalog', code: '01' },
              { href: '#/about', label: 'About us', code: '02' },
              { href: '#/certifications', label: 'Certifications', code: '03' },
              { href: '#/contact', label: 'Contact', code: '04' },
            ]}
          />
        </div>
      </section>

      {/* 5. Mobile Layout Inspection State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">5. Mobile Stacked View</span>
          <span>Viewports below 768px</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden max-w-sm mx-auto shadow-xs">
          <Footer />
        </div>
      </section>

      {/* 6. Disabled State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">6. Disabled State</span>
          <span>disabled = true</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer disabled={true} />
        </div>
      </section>

      {/* 7. Verification Status State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">7. Verified Compliance Banner</span>
          <span>ISO 9001:2015 Spec Audit status</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer />
        </div>
      </section>

      {/* 8. Success State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">8. Verified Official Channel</span>
          <span>Sales WhatsApp link active</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden shadow-xs">
          <Footer />
        </div>
      </section>
    </div>
  )
}
