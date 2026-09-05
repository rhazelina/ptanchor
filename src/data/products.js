export const WA_NUMBER = '861234567890'
export const PHONE_DISPLAY = '+86 371-555-0192'
export const EMAIL = 'sales@henananchor.com'
export const ADDRESS = 'No. 88 Industrial Road, Zhengzhou Hi-Tech Development Zone, Zhengzhou, Henan 450000, China'

export function waLink(message = '') {
  const base = `https://wa.me/${WA_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const CATEGORIES = [
  { id: 'mineral', name: 'Mineral' },
  { id: 'toxin-binder', name: 'Toxin binder' },
  { id: 'feed-additive', name: 'Feed additive' },
  { id: 'premix', name: 'Premix' },
]

export const ANIMAL_TAGS = ['Poultry', 'Ruminants', 'Aquaculture', 'Swine']

export const SECTORS = [
  { id: 'Poultry', name: 'Poultry', desc: 'Layers, broilers, & waterfowl feed', image: '/images/sector_poultry.jpg' },
  { id: 'Ruminants', name: 'Ruminants', desc: 'Beef cattle, dairy cattle, & goats', image: '/images/sector_ruminant.jpg' },
  { id: 'Aquaculture', name: 'Aquaculture', desc: 'Fish & shrimp feed formulation', image: '/images/sector_aquaculture.jpg' },
  { id: 'Swine', name: 'Swine', desc: 'Swine starter, grower, & finisher feed', image: '/images/sector_swine.jpg' },
]

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', scope: 'Quality management system for feed processing & procurement', badge: '/images/cert_iso.svg' },
  { name: 'GMP+ B2', scope: 'International feed safety standard', badge: '/images/cert_gmp.svg' },
  { name: 'Halal', scope: 'Halal-certified feed raw materials', badge: '/images/cert_halal.svg' },
]

export const PRODUCTS = [
  {
    slug: 'zeolite-feed',
    name: 'Feed Zeolite',
    category: 'mineral',
    tags: ['Poultry', 'Ruminants', 'Aquaculture'],
    grade: 'Feed grade',
    packaging: '20 kg HDPE',
    availability: 'In stock',
    image: '/images/product_zeolit.jpg',
    summary:
      'Natural zeolite mineral that binds ammonia and toxins, improving feed digestibility.',
    description:
      'Grade A feed zeolite is a natural aluminosilicate mineral processed for livestock feed applications. It binds ammonia in the digestive tract, reduces moisture in the gut, and helps stabilize pellet feed. Suitable for layer, broiler, and ruminant feed.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'Zeolite 90% min., SiO₂ 65–70%' },
      { label: 'Packaging', value: '20 kg HDPE' },
      { label: 'Moisture', value: 'Max 8%' },
      { label: 'Particle size', value: 'Mesh 60–100' },
    ],
  },
  {
    slug: 'sodium-bentonite',
    name: 'Sodium Bentonite',
    category: 'mineral',
    tags: ['Poultry', 'Ruminants'],
    grade: 'Grade 1',
    packaging: 'Bulk / bag',
    availability: 'In stock',
    image: '/images/product_bentonit.jpg',
    summary:
      'Sodium bentonite as a pellet binder and toxin adsorbent, available bulk or bagged.',
    description:
      'Sodium bentonite serves a dual function as a binding agent in pellet production and an adsorbent of mycotoxins and light contaminants. Commonly used to improve physical pellet quality and the flow of granulation in feed mills.',
    specifications: [
      { label: 'Grade', value: 'Grade 1' },
      { label: 'Composition', value: 'Montmorillonite 85% min.' },
      { label: 'Packaging', value: 'Bulk / 50 kg bags' },
      { label: 'Moisture', value: 'Max 12%' },
      { label: 'Bulk density', value: '0.8–1.0 g/ml' },
    ],
  },
  {
    slug: 'hscas-toxin-binder',
    name: 'HSCAS Toxin Binder',
    category: 'toxin-binder',
    tags: ['Poultry', 'Ruminants'],
    grade: 'Feed grade',
    packaging: '25 kg HDPE',
    availability: 'Limited stock',
    image: '/images/product_toxin_binder.jpg',
    summary:
      'Hydrated sodium calcium aluminosilicate (HSCAS) binder effective against aflatoxin in feed.',
    description:
      'HSCAS (hydrated sodium calcium aluminosilicate) is an aluminosilicate-based toxin binder that effectively binds aflatoxin B1 in the digestive tract, reducing the impact of mycotoxins on livestock productivity and health.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'HSCAS feed grade' },
      { label: 'Packaging', value: '25 kg HDPE' },
      { label: 'Binding capacity', value: 'Aflatoxin B1 ≥ 95%' },
      { label: 'Recommended dosage', value: '0.1–0.5% of the ration' },
    ],
  },
  {
    slug: 'calcium-carbonate',
    name: 'Calcium Carbonate',
    category: 'mineral',
    tags: ['Poultry', 'Ruminants', 'Aquaculture'],
    grade: 'Feed grade',
    packaging: '50 kg PP',
    availability: 'In stock',
    image: '/images/product_kalsium_karbonat.jpg',
    summary: 'Calcium source for layers, ruminants, and aquaculture feed.',
    description:
      'Calcium carbonate is the primary calcium source for layer and ruminant feed. High calcium content with low heavy metals is essential for eggshell quality and bone development.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'CaCO₃ 98% min., Ca 39%' },
      { label: 'Packaging', value: '50 kg PP' },
      { label: 'Particle size', value: 'Mesh 50–200' },
      { label: 'Heavy metals', value: 'Low — meets feed safety standards' },
    ],
  },
  {
    slug: 'dicalcium-phosphate',
    name: 'DCP (Dicalcium Phosphate)',
    category: 'mineral',
    tags: ['Poultry', 'Ruminants', 'Aquaculture'],
    grade: 'Feed grade',
    packaging: '25 kg HDPE',
    availability: 'In stock',
    image: '/images/product_dcp.jpg',
    summary:
      'Essential source of phosphorus and calcium for livestock and aquaculture bone growth.',
    description:
      'Dicalcium phosphate provides highly absorbable phosphorus and calcium, important for bone formation, egg production, and fish growth. Consistent quality with low fluoride content.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'P 18% min., Ca 24%' },
      { label: 'Packaging', value: '25 kg HDPE' },
      { label: 'Fluoride', value: 'Max 0.18%' },
      { label: 'Form', value: 'Fine granular' },
    ],
  },
  {
    slug: 'monocalcium-phosphate',
    name: 'MCP (Monocalcium Phosphate)',
    category: 'mineral',
    tags: ['Poultry', 'Ruminants'],
    grade: 'Feed grade',
    packaging: '25 kg HDPE',
    availability: 'Made to order',
    image: '/images/product_mcp.jpg',
    summary: 'Phosphorus mineral with high bioavailability for poultry feed.',
    description:
      'Monocalcium phosphate provides phosphorus with the best bioavailability among inorganic phosphorus sources, highly efficient for poultry and swine feed with high phosphorus requirements.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'P 22% min., Ca 15%' },
      { label: 'Packaging', value: '25 kg HDPE' },
      { label: 'Availability', value: 'Weekly order' },
    ],
  },
  {
    slug: 'iodized-feed-salt',
    name: 'Iodized Feed Salt',
    category: 'premix',
    tags: ['Poultry', 'Ruminants', 'Aquaculture'],
    grade: 'Feed grade',
    packaging: '25 kg PP',
    availability: 'In stock',
    image: '/images/product_salt.jpg',
    summary: 'Source of sodium and iodine for electrolyte balance in feed.',
    description:
      'Iodized feed salt provides sodium and iodine for electrolyte balance and thyroid function in livestock, and stimulates appetite. Commonly used as a premix carrier.',
    specifications: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Composition', value: 'NaCl 99% min., I₂ 50 ppm' },
      { label: 'Packaging', value: '25 kg PP' },
      { label: 'Form', value: 'Fine dry crystals' },
    ],
  },
  {
    slug: 'vitamin-mineral-premix',
    name: 'Vitamin Mineral Premix',
    category: 'premix',
    tags: ['Poultry', 'Ruminants'],
    grade: 'Custom formula',
    packaging: '20 kg HDPE',
    availability: 'Made to order',
    image: '/images/product_premix.jpg',
    summary: 'Vitamin-mineral premix formulated to your livestock\'s requirements.',
    description:
      'Vitamin and mineral premix formulated to the specific needs of each livestock type and production stage. Available in concentrations tailored to feed mill and distributor requirements.',
    specifications: [
      { label: 'Grade', value: 'Custom formula' },
      { label: 'Composition', value: 'Vitamins A, D3, E, K3, B-complex, minerals' },
      { label: 'Packaging', value: '20 kg HDPE' },
      { label: 'Availability', value: 'Formulated on request' },
    ],
  },
  {
    slug: 'formic-acid-feed',
    name: 'Formic Acid Feed',
    category: 'feed-additive',
    tags: ['Poultry', 'Swine'],
    grade: 'Feed grade 85%',
    packaging: '25 L jerrican',
    availability: 'Limited stock',
    image: '/images/product_acidifier.jpg',
    summary:
      'Organic acid used as an acidifier to inhibit pathogenic bacteria and preserve feed.',
    description:
      'Formic acid acts as a natural acidifier that lowers the pH of feed and the digestive tract, inhibits the growth of pathogenic bacteria, and improves protein digestibility in poultry and swine.',
    specifications: [
      { label: 'Grade', value: 'Feed grade 85%' },
      { label: 'Composition', value: 'Formic acid 85% min.' },
      { label: 'Packaging', value: '25 L jerrican' },
      { label: 'Application', value: 'Feed acidifier' },
    ],
  },
]