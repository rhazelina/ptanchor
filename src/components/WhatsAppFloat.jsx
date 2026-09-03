import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/products.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink('Halo PT Anchor Pakan Jaya, saya ingin bertanya tentang produk')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 w-13 h-13 rounded-full flex items-center justify-center bg-whatsapp shadow-float z-50 hover:scale-105 active:scale-95 transition-transform duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grain-gold focus-visible:ring-offset-2"
    >
      <MessageCircle size={26} className="text-white" aria-hidden="true" />
    </a>
  )
}
