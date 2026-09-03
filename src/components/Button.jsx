export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  href,
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold text-[14px] px-5 py-2.5 rounded-sm transition-all duration-fast cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2 active:opacity-90 min-h-[44px]'
  const variants = {
    primary:
      'bg-anchor-navy text-white hover:bg-anchor-navy-dark',
    secondary:
      'bg-transparent text-anchor-navy border-[1.5px] border-anchor-navy hover:bg-limestone hover:text-anchor-navy-dark',
    tertiary:
      'bg-transparent text-grain-gold-dark px-0 py-0 pb-0.5 border-b-[1.5px] border-transparent hover:border-grain-gold-dark text-[14px]',
    whatsapp:
      'bg-whatsapp text-white hover:bg-[#1ebe5d]',
  }

  const wrapperClass =
    variant === 'primary' || variant === 'whatsapp'
      ? 'text-white !text-white flex items-center justify-center gap-2 w-full'
      : variant === 'secondary'
      ? 'text-anchor-navy flex items-center justify-center gap-2 w-full'
      : 'flex items-center justify-center gap-1.5'

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        <span className={wrapperClass}>{children}</span>
      </a>
    )
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span className={wrapperClass}>{children}</span>
    </Tag>
  )
}


