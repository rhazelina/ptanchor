import { ChevronRight } from 'lucide-react'

export default function ManifestRow({ product }) {
  return (
    <a
      href={`#/products/${product.slug}`}
      className="group grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_auto] items-center gap-x-4 px-5 py-4 border-b border-limestone-dark last:border-none hover:bg-limestone/50 transition-colors duration-fast"
    >
      {/* Product & Description */}
      <div className="flex items-center gap-3">
        {product.image && (
          <div className="w-10 h-10 rounded-sm overflow-hidden bg-limestone border border-limestone-dark shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-fast"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-[15px] text-ink group-hover:text-anchor-navy leading-tight">
            {product.name}
          </div>
          <p className="text-[12px] text-slate line-clamp-1 mt-0.5">{product.summary}</p>
        </div>
      </div>

      {/* Grade — hidden on mobile */}
      <div className="hidden md:block px-4">
        <span className="text-[13px] text-ink font-medium">{product.grade}</span>
      </div>

      {/* Packaging — hidden on mobile */}
      <div className="hidden md:block px-4">
        <span className="text-[13px] text-ink font-medium">{product.packaging}</span>
      </div>

      {/* Action */}
      <div className="flex items-center gap-2 text-grain-gold-dark">
        <span className="md:hidden text-[11px] font-medium text-slate">{product.grade}</span>
        <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-fast" />
      </div>
    </a>
  )
}
