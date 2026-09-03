export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  href,
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-1.5 font-body font-semibold text-[14px] px-5 py-2.5 rounded-sm transition-colors duration-fast cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2 active:opacity-90'
  const variants = {
    primary:
      'bg-anchor-navy text-white hover:bg-anchor-navy-dark',
    secondary:
      'bg-transparent text-anchor-navy border-[1.5px] border-anchor-navy hover:bg-limestone',
    tertiary:
      'bg-transparent text-grain-gold-dark px-0 py-0 pb-0.5 border-b-[1.5px] border-transparent hover:border-grain-gold-dark text-[14px]',
    whatsapp:
      'bg-whatsapp text-white hover:bg-[#1ebe5d]',
  }

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
