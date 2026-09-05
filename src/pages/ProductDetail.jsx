import { ArrowLeft, MessageCircle, Phone, ChevronRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Tag from '../components/Tag.jsx'
import { PRODUCTS, waLink, PHONE_DISPLAY } from '../data/products.js'

const phoneHref = `tel:${PHONE_DISPLAY.replace(/[^0-9+]/g, '')}`

export default function ProductDetail({ slug }) {
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-20 text-center">
          <h1 className="font-display font-semibold text-[1.75rem] text-ink mb-3">Product Not Found</h1>
          <p className="text-slate mb-6">The product you are looking for is not in our catalog.</p>
          <Button as="a" href="#/products">
            <ArrowLeft size={14} />
            Back to product catalog
          </Button>
        </div>
      </section>
    )
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3)

  return (
    <>
      {/* Product Detail */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 items-start">

          {/* Image */}
          <div className="rounded-sm border border-limestone-dark overflow-hidden shadow-sm bg-white">
            <div className="aspect-square bg-limestone relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-anchor-navy text-white text-[11px] font-semibold rounded-sm">
                {product.grade}
              </span>
            </div>
            <div className="px-4 py-3 border-t border-limestone-dark bg-white">
              <p className="text-[12px] text-slate text-center">
                Standard packaging: <strong className="text-ink">{product.packaging}</strong>
              </p>
            </div>
          </div>

          {/* Details */}
          <div>
            <a
              href="#/products"
              className="inline-flex items-center gap-1.5 text-[12px] text-slate hover:text-anchor-navy mb-4 transition-colors"
            >
              <ArrowLeft size={13} />
              Back to catalog
            </a>

            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <h1 className="font-display font-bold text-[2rem] text-ink mb-3 leading-tight">
              {product.name}
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-pasture-green/10 text-pasture-green font-semibold text-[12px] mb-5 border border-pasture-green/25">
              <span className="w-1.5 h-1.5 rounded-full bg-pasture-green" />
              {product.availability}
            </div>

            <p className="text-[15px] text-slate max-w-[58ch] mb-7 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-limestone px-5 py-4 rounded-sm border border-limestone-dark mb-2">
              <h4 className="font-semibold text-[14px] text-ink mb-1.5">Order &amp; Request a Quote</h4>
              <p className="text-[13px] text-slate mb-4">
                Contact our sales team for complete technical specifications, wholesale pricing, and product samples.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  variant="whatsapp"
                  href={waLink(`Hello Henan Anchor Biotechnology Co., Ltd., I would like to request a quote for ${product.name} (Grade: ${product.grade}, Packaging: ${product.packaging}).`)}
                >
                  <MessageCircle size={15} />
                  Request a quote (WhatsApp)
                </Button>
                <Button as="a" variant="secondary" href={phoneHref}>
                  <Phone size={14} />
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Table */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-14">
          <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-6">Technical product specifications</h2>
          <div className="bg-white border border-limestone-dark rounded-sm overflow-hidden">
            {product.specifications.map((s, idx) => (
              <div
                key={s.label}
                className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 px-5 py-3.5 border-b border-limestone-dark last:border-none ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-limestone/20'
                }`}
              >
                <div className="text-[12px] font-semibold uppercase tracking-widest text-slate">{s.label}</div>
                <div className="text-[14px] font-medium text-ink">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-14">
            <h2 className="font-display font-semibold text-[1.75rem] text-ink mb-6">Related products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`#/products/${p.slug}`}
                  className="group bg-white p-4 rounded-sm border border-limestone-dark hover:border-anchor-navy hover:shadow-sm transition-all duration-fast flex flex-col"
                >
                  <div className="h-36 bg-limestone rounded-sm overflow-hidden mb-3 border border-limestone-dark">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-[1rem] text-ink group-hover:text-anchor-navy mb-1 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-slate line-clamp-2 mb-3 flex-1">{p.summary}</p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-grain-gold-dark group-hover:underline">
                    View details
                    <ChevronRight size={13} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}