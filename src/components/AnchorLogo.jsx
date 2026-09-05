import logo from '../assets/anchor-logo.svg'

export default function AnchorLogo({ className = '' }) {
  return (
    <img
      src={logo}
      alt="Henan Anchor Biotechnology Co., Ltd. logo"
      className={className}
      draggable="false"
    />
  )
}
