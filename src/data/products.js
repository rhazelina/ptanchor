export const WA_NUMBER = '6281234567890'
export const PHONE_DISPLAY = '+62 812-3456-7890'
export const EMAIL = 'sales@anchorpakanjaya.co.id'
export const ADDRESS = 'Kawasan Industri Cikarang, Jl. Raya Industri Blok B-12, Cikarang Selatan, Bekasi, Jawa Barat 17530'

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

export const ANIMAL_TAGS = ['Unggas', 'Ruminansia', 'Aquaculture', 'Babi']

export const SECTORS = [
  { id: 'Unggas', name: 'Unggas', desc: 'Ayam petelur, broiler, & unggas air', image: '/images/sector_poultry.jpg' },
  { id: 'Ruminansia', name: 'Ruminansia', desc: 'Sapi potong, sapi perah, & kambing', image: '/images/sector_ruminant.jpg' },
  { id: 'Aquaculture', name: 'Aquaculture', desc: 'Budidaya pakan ikan & udang', image: '/images/sector_aquaculture.jpg' },
  { id: 'Babi', name: 'Babi', desc: 'Pakan babi starter, grower, & finisher', image: '/images/sector_swine.jpg' },
]

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', scope: 'Sistem manajemen mutu pengolahan & pengadaan', badge: '/images/cert_iso.svg' },
  { name: 'GMP+ B2', scope: 'Standar internasional keselamatan pakan ternak', badge: '/images/cert_gmp.svg' },
  { name: 'Sertifikat Halal', scope: 'Jaminan kehalalan bahan baku pakan LPPOM MUI', badge: '/images/cert_halal.svg' },
  { name: 'SNI Standards', scope: 'Sesuai Standar Nasional Indonesia', badge: '/images/cert_sni.svg' },
]

export const PRODUCTS = [
  {
    slug: 'zeolit-pakan',
    name: 'Zeolit pakan',
    category: 'mineral',
    tags: ['Unggas', 'Ruminansia', 'Aquaculture'],
    grade: 'Feed grade',
    kemasan: '20 kg HDPE',
    ketersediaan: 'Stok tersedia',
    image: '/images/product_zeolit.jpg',
    ringkas:
      'Mineral zeolit yang membantu menyerap amonia dan toksin, meningkatkan daya cerna pakan.',
    deskripsi:
      'Zeolit pakan grade A adalah mineral aluminosilikat alami yang diproses untuk aplikasi pakan ternak. Berfungsi sebagai pengikat amonia di saluran pencernaan, mengurangi kadar air lendir, serta membantu stabilitas pakan pelet. Cocok untuk pakan unggas petelur, broiler, dan ruminansia.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'Zeolit 90% min., SiO₂ 65–70%' },
      { label: 'Kemasan', value: '20 kg HDPE' },
      { label: 'Kadar air', value: 'Maks. 8%' },
      { label: 'Ukuran partikel', value: 'Mesh 60–100' },
    ],
  },
  {
    slug: 'bentonit-sodium',
    name: 'Bentonit sodium',
    category: 'mineral',
    tags: ['Unggas', 'Ruminansia'],
    grade: 'Grade 1',
    kemasan: 'Curah / bag',
    ketersediaan: 'Stok tersedia',
    image: '/images/product_bentonit.jpg',
    ringkas:
      'Bentonit sodium sebagai pengikat pelet dan penyerap toksin, tersedia curah maupun bag.',
    deskripsi:
      'Bentonit sodium berfungsi ganda sebagai binding agent dalam pembuatan pelet sekaligus penyerap mikotoksin dan kontaminan ringan. Sering dipakai untuk meningkatkan kualitas fisik pelet dan kelancaran proses granulasi di feed mill.',
    spesifikasi: [
      { label: 'Grade', value: 'Grade 1' },
      { label: 'Kandungan', value: 'Montmorillonit 85% min.' },
      { label: 'Kemasan', value: 'Curah / karung 50 kg' },
      { label: 'Kadar air', value: 'Maks. 12%' },
      { label: 'Curah massa', value: '0.8–1.0 g/ml' },
    ],
  },
  {
    slug: 'hscas-toxin-binder',
    name: 'HSCAS toxin binder',
    category: 'toxin-binder',
    tags: ['Unggas', 'Ruminansia'],
    grade: 'Feed grade',
    kemasan: '25 kg HDPE',
    ketersediaan: 'Stok terbatas',
    image: '/images/product_toxin_binder.jpg',
    ringkas:
      'Hydrated sodium calcium aluminosilicate (HSCAS) untuk mengikat aflatoksin di pakan.',
    deskripsi:
      'HSCAS (hydrated sodium calcium aluminosilicate) adalah toxin binder berbasis aluminosilikat yang efektif mengikat aflatoksin B1 pada saluran pencernaan, sehingga menekan dampak mikotoksin terhadap produktivitas dan kesehatan ternak.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'HSCAS feed grade' },
      { label: 'Kemasan', value: '25 kg HDPE' },
      { label: 'Kapasitas ikat', value: 'Aflatoksin B1 ≥ 95%' },
      { label: 'Dosis anjuran', value: '0.1–0.5% dari ransum' },
    ],
  },
  {
    slug: 'kalsium-karbonat',
    name: 'Kalsium karbonat',
    category: 'mineral',
    tags: ['Unggas', 'Ruminansia', 'Aquaculture'],
    grade: 'Feed grade',
    kemasan: '50 kg PP',
    ketersediaan: 'Stok tersedia',
    image: '/images/product_kalsium_karbonat.jpg',
    ringkas: 'Sumber kalsium untuk pakan unggas petelur, layer, dan perairan.',
    deskripsi:
      'Kalsium karbonat merupakan sumber kalsium utama untuk pakan layer dan ruminansia. Kadar kalsium tinggi dengan low heavy metal sangat penting untuk kualitas cangkang telur dan pertumbuhan tulang.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'CaCO₃ 98% min., Ca 39%' },
      { label: 'Kemasan', value: '50 kg PP' },
      { label: 'Ukuran partikel', value: 'Mesh 50–200' },
      { label: 'Logam berat', value: 'Low, memenuhi SNI' },
    ],
  },
  {
    slug: 'diamonium-fosfat-dcp',
    name: 'DCP (Dicalcium phosphate)',
    category: 'mineral',
    tags: ['Unggas', 'Ruminansia', 'Aquaculture'],
    grade: 'Feed grade',
    kemasan: '25 kg HDPE',
    ketersediaan: 'Stok tersedia',
    image: '/images/product_dcp.jpg',
    ringkas:
      'Sumber fosfor dan kalsium esensial untuk pertumbuhan tulang ternak dan perairan.',
    deskripsi:
      'Dicalcium phosphate menyediakan fosfor dan kalsium yang mudah diserap, penting untuk pembentukan tulang, produksi telur, dan pertumbuhan ikan. Kualitas konsisten dengan kadar fluor rendah.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'P 18% min., Ca 24%' },
      { label: 'Kemasan', value: '25 kg HDPE' },
      { label: 'Fluor', value: 'Maks. 0.18%' },
      { label: 'Bentuk', value: 'Granular halus' },
    ],
  },
  {
    slug: 'mono-kalsium-fosfat-mcp',
    name: 'MCP (Mono kalsium fosfat)',
    category: 'mineral',
    tags: ['Unggas', 'Ruminansia'],
    grade: 'Feed grade',
    kemasan: '25 kg HDPE',
    ketersediaan: 'Inden / pesanan',
    image: '/images/product_mcp.jpg',
    ringkas: 'Fosfor mineral dengan bioavailabilitas tinggi untuk pakan unggas.',
    deskripsi:
      'Monocalcium phosphate memberikan fosfor dengan bioavailabilitas terbaik di antara sumber fosfor anorganik, sangat efisien untuk pakan unggas dan babi dengan kebutuhan fosfor tinggi.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'P 22% min., Ca 15%' },
      { label: 'Kemasan', value: '25 kg HDPE' },
      { label: 'Ketersediaan', value: 'Inden mingguan' },
    ],
  },
  {
    slug: 'garam-iodisasi-pakan',
    name: 'Garam iodisasi pakan',
    category: 'premix',
    tags: ['Unggas', 'Ruminansia', 'Aquaculture'],
    grade: 'Feed grade',
    kemasan: '25 kg PP',
    ketersediaan: 'Stok tersedia',
    image: '/images/product_salt.jpg',
    ringkas: 'Sumber natrium dan iodium untuk keseimbangan elektrolit pakan.',
    deskripsi:
      'Garam iodisasi pakan menyediakan natrium dan iodium untuk keseimbangan elektrolit dan fungsi tiroid ternak, serta merangsang nafsu makan. Umum dipakai sebagai karier premix.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade' },
      { label: 'Kandungan', value: 'NaCl 99% min., I₂ 50 ppm' },
      { label: 'Kemasan', value: '25 kg PP' },
      { label: 'Bentuk', value: 'Kristal halus kering' },
    ],
  },
  {
    slug: 'premix-vitamin-mineral',
    name: 'Premix vitamin mineral',
    category: 'premix',
    tags: ['Unggas', 'Ruminansia'],
    grade: 'Custom formula',
    kemasan: '20 kg HDPE',
    ketersediaan: 'Inden / pesanan',
    image: '/images/product_premix.jpg',
    ringkas: 'Premix vitamin-mineral sesuai formula kebutuhan ternak anda.',
    deskripsi:
      'Premix vitamin dan mineral diformulasi sesuai kebutuhan spesifik ternak dan tahap produksi. Tersedia konsentrasi sesuai permintaan feed mill dan distributor.',
    spesifikasi: [
      { label: 'Grade', value: 'Custom formula' },
      { label: 'Komposisi', value: 'Vitamin A, D3, E, K3, B-kompleks, mineral' },
      { label: 'Kemasan', value: '20 kg HDPE' },
      { label: 'Ketersediaan', value: 'Formulasi sesuai permintaan' },
    ],
  },
  {
    slug: 'asam-format-pakan',
    name: 'Asam format pakan',
    category: 'feed-additive',
    tags: ['Unggas', 'Babi'],
    grade: 'Feed grade 85%',
    kemasan: '25 L jerigen',
    ketersediaan: 'Stok terbatas',
    image: '/images/product_acidifier.jpg',
    ringkas:
      'Asam organik sebagai acidifier untuk menghambat bakteri patogen dan pengawet pakan.',
    deskripsi:
      'Asam format berfungsi sebagai acidifier alami yang menurunkan pH pakan dan saluran pencernaan, menghambat pertumbuhan bakteri patogen, serta meningkatkan kecernaan protein pada unggas dan babi.',
    spesifikasi: [
      { label: 'Grade', value: 'Feed grade 85%' },
      { label: 'Kandungan', value: 'Asam format 85% min.' },
      { label: 'Kemasan', value: '25 L jerigen' },
      { label: 'Aplikasi', value: 'Acidifier pakan' },
    ],
  },
]
