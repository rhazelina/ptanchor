import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { PHONE_DISPLAY, EMAIL, ADDRESS, waLink } from '../data/products.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+\-\s()]{8,}$/

const phoneHref = `tel:${PHONE_DISPLAY.replace(/[^0-9+]/g, '')}`

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Name is required.'
    if (!form.email.trim()) err.email = 'Email is required.'
    else if (!EMAIL_RE.test(form.email)) err.email = 'Invalid email format.'
    if (!form.phone.trim()) err.phone = 'Phone number is required.'
    else if (!PHONE_RE.test(form.phone)) err.phone = 'Invalid phone number format.'
    if (!form.message.trim()) err.message = 'Message is required.'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const fieldCls = (key) =>
    `w-full border rounded-sm px-4 py-2.5 font-body text-[14px] bg-white outline-none transition-colors duration-fast ${
      errors[key]
        ? 'border-danger focus:border-danger'
        : 'border-limestone-dark focus:border-anchor-navy focus:ring-[3px] focus:ring-grain-gold/25'
    }`

  const labelCls = 'block text-[13px] font-medium text-slate mb-1.5'

  return (
    <>
      {/* Page header */}
      <section className="border-b border-limestone-dark bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-12 lg:py-16">
          <h1 className="font-display font-semibold text-[2rem] lg:text-h1 text-ink mb-3">
            Contact &amp; quote requests
          </h1>
          <p className="text-[15px] text-slate max-w-[58ch]">
            Contact the Henan Anchor Biotechnology Co., Ltd. sales team for product specification consultations, wholesale pricing, or delivery scheduling.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-pasture-green/40 rounded-sm bg-pasture-green/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={28} className="text-pasture-green" />
                  <h2 className="font-display font-semibold text-[1.25rem] text-ink">
                    Message sent
                  </h2>
                </div>
                <p className="text-[14px] text-slate leading-relaxed mb-6">
                  The Henan Anchor Biotechnology Co., Ltd. sales team will contact you shortly by email or WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', company: '', email: '', phone: '', message: '' })
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-white p-7 rounded-sm border border-limestone-dark shadow-sm">
                <h2 className="font-display font-semibold text-[1.5rem] text-ink mb-6">
                  Contact &amp; quote form
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className={labelCls}>Full Name</label>
                    <input id="name" type="text" value={form.name} onChange={set('name')} className={fieldCls('name')} placeholder="Enter your full name" />
                    {errors.name && <p className="mt-1 text-[12px] text-danger">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelCls}>Company / Feed Mill Name <span className="text-slate/60 font-normal">(optional)</span></label>
                    <input id="company" type="text" value={form.company} onChange={set('company')} className={fieldCls('company')} placeholder="e.g. ABC Feed Mill" />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>Business Email</label>
                    <input id="email" type="email" value={form.email} onChange={set('email')} className={fieldCls('email')} placeholder="name@company.com" />
                    {errors.email && <p className="mt-1 text-[12px] text-danger">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelCls}>WhatsApp / Phone Number</label>
                    <input id="phone" type="text" value={form.phone} onChange={set('phone')} className={fieldCls('phone')} placeholder="+86 1xx-xxxx-xxxx" />
                    {errors.phone && <p className="mt-1 text-[12px] text-danger">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Message / Product &amp; Volume Requirements</label>
                    <textarea id="message" rows="4" value={form.message} onChange={set('message')} className={fieldCls('message')} placeholder="Describe the product specifications and estimated tonnage required..." />
                    {errors.message && <p className="mt-1 text-[12px] text-danger">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full justify-center">
                    Send quote request
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-display font-semibold text-[1.5rem] text-ink mb-6">
              Facility information &amp; location
            </h2>

            <div className="bg-white rounded-sm border border-limestone-dark shadow-sm mb-6 divide-y divide-limestone-dark">
              <div className="flex gap-3.5 p-5">
                <MapPin size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Facility &amp; Warehouse Address</span>
                  <p className="text-[14px] text-ink leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <Phone size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Office Phone</span>
                  <a href={phoneHref} className="text-[14px] font-semibold text-anchor-navy hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <Mail size={17} className="text-grain-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Sales Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-[14px] font-semibold text-anchor-navy hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-3.5 p-5">
                <MessageCircle size={17} className="text-whatsapp shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate uppercase tracking-widest mb-1">Chat Sales on WhatsApp</span>
                  <a
                    href={waLink('Hello sales team at Henan Anchor Biotechnology Co., Ltd., I would like to ask about pricing and specifications for feed raw materials.')}
                    className="text-[14px] font-semibold text-pasture-green hover:underline"
                  >
                    Chat directly on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-sm border border-limestone-dark overflow-hidden shadow-sm">
              <div className="relative h-56 overflow-hidden bg-limestone">
                <img
                  src="/images/contact_map.jpg"
                  alt="Henan Anchor Biotechnology Co., Ltd. facility location map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 bg-white border-t border-limestone-dark">
                <p className="text-[13px] text-slate">
                  <strong className="text-ink">Strategic location:</strong> Zhengzhou Hi-Tech Development Zone, Henan — direct logistics access for domestic distribution and international export.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}