export default function Tag({ children, className = '' }) {
  return (
    <span
      className={      `inline-block bg-pasture-green text-white text-[12.5px] font-medium px-3 py-1 rounded-sm ${className}`}
    >
      {children}
    </span>
  )
}
