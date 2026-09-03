import logo from '../assets/anchor-logo.svg'

export default function AnchorLogo({ className = '' }) {
  return (
    <img
      src={logo}
      alt="Logo PT Anchor Pakan Jaya"
      className={className}
      draggable="false"
    />
  )
}
