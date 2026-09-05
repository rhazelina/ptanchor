/* Hallmark · component: header · 8-state preview wrapper
 * theme: Steel and Grain (design.md)
 */

import Header from './Header.jsx'

export default function HeaderPreview() {
  return (
    <div className="min-h-screen bg-paper text-ink p-8 font-body space-y-10 max-w-6xl mx-auto">
      <header className="border-b border-limestone-dark pb-4">
        <span className="font-mono text-xs text-grain-gold font-semibold uppercase tracking-widest block mb-1">
          Hallmark Component Preview · 8-State Ledger
        </span>
        <h1 className="font-display text-2xl font-bold text-anchor-navy">
          Header Component — 8-State Inspection
        </h1>
        <p className="text-sm text-slate">
          Visual verification wrapper for Henan Anchor Biotechnology Co., Ltd. spec-sheet navigation bar.
        </p>
      </header>

      {/* 1. Default State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">1. Default State</span>
          <span>href: #/products</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header />
        </div>
      </section>

      {/* 2. Hover State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">2. Hover / Interactive Focus State</span>
          <span>Simulated nav hover highlight</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header className="[&_nav_a:nth-child(2)]:bg-limestone/40 [&_nav_a:nth-child(2)]:text-ink" />
        </div>
      </section>

      {/* 3. Focus State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">3. Keyboard Focus-Visible State</span>
          <span>focus-visible outline-ring in grain-gold</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header className="[&_a:first-child]:ring-2 [&_a:first-child]:ring-grain-gold [&_a:first-child]:ring-offset-2" />
        </div>
      </section>

      {/* 4. Active Route State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">4. Active Route (About Us)</span>
          <span>href: #/about</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header
            navItems={[
              { href: '#/products', label: 'Products', code: '01' },
              { href: '#/about', label: 'About us', code: '02' },
              { href: '#/certifications', label: 'Certifications', code: '03' },
              { href: '#/contact', label: 'Contact', code: '04' },
            ]}
          />
        </div>
      </section>

      {/* 5. Mobile Open State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">5. Mobile Menu Drawer State</span>
          <span>forceMobileOpen = true</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header forceMobileOpen={true} />
        </div>
      </section>

      {/* 6. Disabled State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">6. Disabled State</span>
          <span>disabled = true</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header disabled={true} />
        </div>
      </section>

      {/* 7. Loading State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">7. Async Loading Action State</span>
          <span>loading = true</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header loading={true} />
        </div>
      </section>

      {/* 8. Success / Verified Status State */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span className="font-semibold text-anchor-navy">8. Verified Status Banner State</span>
          <span>Spec verification indicator</span>
        </div>
        <div className="border border-limestone-dark/60 rounded-sm overflow-hidden bg-white shadow-xs">
          <Header />
        </div>
      </section>
    </div>
  )
}
