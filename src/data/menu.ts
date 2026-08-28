export type MenuType = 'makanan' | 'minuman';

export interface CategoryInfo {
  id: string;
  name: string;
  type: MenuType;
  description?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  type: MenuType;
  category: string;
  categoryName: string;
  favorite?: boolean;
  signature?: boolean;
  image?: string;
  notes?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  // Minuman Categories
  { id: 'hot-coffee', name: 'Hot — Coffee', type: 'minuman', description: 'Kopi panas khas racikan Ndalem' },
  { id: 'hot-wedang', name: 'Hot — Wedang', type: 'minuman', description: 'Wedangan rempah tradisional penghangat badan' },
  { id: 'hot-non-coffee', name: 'Hot — Non Coffee', type: 'minuman', description: 'Teh, jeruk, jamu herbal & susu hangat' },
  { id: 'ice-coffee', name: 'Ice — Coffee', type: 'minuman', description: 'Kopi dingin segar dengan racikan pilihan' },
  { id: 'ice-non-coffee', name: 'Ice — Non Coffee', type: 'minuman', description: 'Minuman dingin non-kopi penyegar dahaga' },
  { id: 'soda', name: 'Soda Series', type: 'minuman', description: 'Kesegaran soda klasik' },
  { id: 'blend-series', name: 'Blend Series', type: 'minuman', description: 'Minuman blend aneka rasa manis & creamy' },
  { id: 'juice', name: 'Fresh Juice', type: 'minuman', description: 'Jus buah segar peras alami' },
  { id: 'sachet-edition', name: 'Sachet Edition', type: 'minuman', description: 'Pilihan minuman sachet favorit santai' },

  // Makanan Categories
  { id: 'menu-utama', name: 'Menu Utama', type: 'makanan', description: 'Sajian sego lan masakan khas tradisional' },
  { id: 'serba-10k', name: 'Serba 10K', type: 'makanan', description: 'Pilihan porsi hemat mantap serba Rp10.000' },
  { id: 'snack', name: 'Snack & Kudapan', type: 'makanan', description: 'Gorengan dan camilan renyah teman ngobrol' }
];

export const menuItems: MenuItem[] = [
  // ==========================================
  // MINUMAN (OMBENAN)
  // ==========================================

  // Hot — Coffee
  {
    id: 'kopi-ndalem',
    name: 'Kopi Ndalem',
    description: 'Kopi tubruk racikan khas Ndalem Kopi dengan aroma mantap.',
    price: 5000,
    type: 'minuman',
    category: 'hot-coffee',
    categoryName: 'Hot — Coffee',
    signature: true,
    favorite: true,
    notes: 'Pilihan Gula: Gula Biasa (+0) / Gula Tropicana (+1.000)',
    image: '/images/menu/kopi-ndalem.webp'
  },
  {
    id: 'kopi-susu',
    name: 'Kopi Susu',
    description: 'Perpaduan kopi hitam Ndalem dan susu gurih lembut.',
    price: 6000,
    type: 'minuman',
    category: 'hot-coffee',
    categoryName: 'Hot — Coffee',
    notes: 'Pilihan Gula: Gula Biasa (+0) / Gula Tropicana (+1.000)'
  },

  // Hot — Wedang
  {
    id: 'wedang-jahe',
    name: 'Wedang Jahe',
    description: 'Air jahe geprek murni penghangat tenggorokan.',
    price: 6000,
    type: 'minuman',
    category: 'hot-wedang',
    categoryName: 'Hot — Wedang'
  },
  {
    id: 'wedang-rempah',
    name: 'Wedang Rempah',
    description: 'Racikan komplit jahe, kayu manis, cengkeh, dan rempah alami Jawa.',
    price: 8000,
    type: 'minuman',
    category: 'hot-wedang',
    categoryName: 'Hot — Wedang',
    favorite: true,
    image: '/images/menu/wedang-rempah.webp'
  },
  {
    id: 'jahe-susu',
    name: 'Jahe Susu',
    description: 'Seduhan jahe wangi berpadu kelembutan susu kental.',
    price: 7000,
    type: 'minuman',
    category: 'hot-wedang',
    categoryName: 'Hot — Wedang'
  },
  {
    id: 'jahe-sere',
    name: 'Jahe Sere',
    description: 'Kombinasi segar sari sereh dan hangatnya jahe alami.',
    price: 7000,
    type: 'minuman',
    category: 'hot-wedang',
    categoryName: 'Hot — Wedang'
  },

  // Hot — Non Coffee
  {
    id: 'teh-hangat',
    name: 'Teh',
    description: 'Teh tubruk wangi sepet manis hangat.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'teh-susu-hangat',
    name: 'Teh Susu',
    description: 'Teh wangi dengan campuran susu nikmat.',
    price: 6000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'jeruk-peras-hangat',
    name: 'Jeruk Peras',
    description: 'Sari jeruk asli peras hangat segar.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'jeruk-nipis-hangat',
    name: 'Jeruk Nipis',
    description: 'Perasan jeruk nipis alami pelepas dahaga.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'kunir-asam-hangat',
    name: 'Kunir Asam',
    description: 'Jamu tradisional kunyit dan asam jawa penyegar raga.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'beras-kencur-hangat',
    name: 'Beras Kencur',
    description: 'Jamu beras kencur sedap penambah stamina.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },
  {
    id: 'susu-putih-hangat',
    name: 'Susu Putih Hangat',
    description: 'Susu putih hangat kaya rasa.',
    price: 5000,
    type: 'minuman',
    category: 'hot-non-coffee',
    categoryName: 'Hot — Non Coffee'
  },

  // Ice — Coffee
  {
    id: 'es-kopi-gula-aren',
    name: 'Es Kopi Gula Aren',
    description: 'Kopi dingin spesial dengan sirup gula aren asli dan susu segar.',
    price: 10000,
    type: 'minuman',
    category: 'ice-coffee',
    categoryName: 'Ice — Coffee',
    favorite: true
  },
  {
    id: 'es-kopi-susu',
    name: 'Es Kopi Susu',
    description: 'Kopi hitam dingin berpadu susu kental manis dan es batu.',
    price: 8000,
    type: 'minuman',
    category: 'ice-coffee',
    categoryName: 'Ice — Coffee'
  },

  // Ice — Non Coffee
  {
    id: 'es-teh',
    name: 'Es Teh',
    description: 'Es teh manis segar khas cafe Jawa.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-teh-susu',
    name: 'Es Teh Susu',
    description: 'Es teh berpadu manisnya susu gurih.',
    price: 6000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-jeruk-peras',
    name: 'Es Jeruk Peras',
    description: 'Perasan jeruk segar disajikan dingin melimpah.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-jeruk-nipis',
    name: 'Es Jeruk Nipis',
    description: 'Es jeruk nipis asam manis penyegar suasana siang.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-kunir-asam',
    name: 'Es Kunir Asam',
    description: 'Jamu kunir asam disajikan dingin menyegarkan.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-beras-kencur',
    name: 'Es Beras Kencur',
    description: 'Es jamu beras kencur manis legit berkhasiat.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'es-tape-ketan-susu',
    name: 'Es Tape Ketan Susu',
    description: 'Tape ketan manis berpadu susu dan es batu segar.',
    price: 6000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },
  {
    id: 'susu-putih-dingin',
    name: 'Susu Putih Dingin',
    description: 'Susu putih dingin menyegarkan.',
    price: 5000,
    type: 'minuman',
    category: 'ice-non-coffee',
    categoryName: 'Ice — Non Coffee'
  },

  // Soda
  {
    id: 'xtra-joss',
    name: 'Xtra Joss',
    description: 'Minuman suplemen berenergi disajikan dingin.',
    price: 5000,
    type: 'minuman',
    category: 'soda',
    categoryName: 'Soda'
  },
  {
    id: 'kuku-bima',
    name: 'Kuku Bima',
    description: 'Minuman energi rasa anggur segar.',
    price: 5000,
    type: 'minuman',
    category: 'soda',
    categoryName: 'Soda'
  },
  {
    id: 'kuku-bima-susu',
    name: 'Kuku Bima Susu',
    description: 'Kuku Bima dipadukan susu manis dingin.',
    price: 6000,
    type: 'minuman',
    category: 'soda',
    categoryName: 'Soda'
  },
  {
    id: 'joshua',
    name: 'Joshua',
    description: 'Extra Joss Susu racikan klasik favorit pemuda.',
    price: 6000,
    type: 'minuman',
    category: 'soda',
    categoryName: 'Soda'
  },
  {
    id: 'soda-gembira',
    name: 'Soda Gembira',
    description: 'Air soda, sirup manis merah, dan susu kental lezat.',
    price: 10000,
    type: 'minuman',
    category: 'soda',
    categoryName: 'Soda'
  },

  // Blend Series
  {
    id: 'blend-taro',
    name: 'Taro',
    description: 'Blend rasa taro ungu manis dan creamy.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },
  {
    id: 'blend-matcha',
    name: 'Matcha',
    description: 'Green tea matcha blend khas dengan rasa aromatik.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },
  {
    id: 'blend-thai-tea',
    name: 'Thai Tea',
    description: 'Teh Thailand harum creamy disajikan dingin mantap.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },
  {
    id: 'blend-red-velvet',
    name: 'Red Velvet',
    description: 'Blend red velvet lembut dengan sensasi cokelat manis.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },
  {
    id: 'blend-black-oreo',
    name: 'Black Oreo',
    description: 'Cookies and cream oreo blend nikmat favorit.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },
  {
    id: 'blend-bubble-gum',
    name: 'Bubble Gum',
    description: 'Blend permen karet manis unik dan segar.',
    price: 10000,
    type: 'minuman',
    category: 'blend-series',
    categoryName: 'Blend Series'
  },

  // Juice
  {
    id: 'jus-jeruk',
    name: 'Jus Jeruk',
    description: 'Jus jeruk murni manis segar kaya vitamin C.',
    price: 10000,
    type: 'minuman',
    category: 'juice',
    categoryName: 'Juice'
  },
  {
    id: 'jus-melon',
    name: 'Jus Melon',
    description: 'Jus buah melon manis harum pelepas dahaga.',
    price: 10000,
    type: 'minuman',
    category: 'juice',
    categoryName: 'Juice'
  },
  {
    id: 'jus-semangka',
    name: 'Jus Semangka',
    description: 'Jus semangka merah segar manis alami.',
    price: 10000,
    type: 'minuman',
    category: 'juice',
    categoryName: 'Juice'
  },

  // Sachet Edition
  {
    id: 'nutrisari',
    name: 'Nutrisari',
    description: 'All varian rasa buah segar pilihan.',
    price: 5000,
    type: 'minuman',
    category: 'sachet-edition',
    categoryName: 'Sachet Edition'
  },
  {
    id: 'milo',
    name: 'Milo',
    description: 'Cokelat malt Milo lezat hangat atau dingin.',
    price: 5000,
    type: 'minuman',
    category: 'sachet-edition',
    categoryName: 'Sachet Edition'
  },
  {
    id: 'beng-beng',
    name: 'Beng-Beng',
    description: 'Minuman cokelat lezat berkaramel khas Beng-Beng.',
    price: 5000,
    type: 'minuman',
    category: 'sachet-edition',
    categoryName: 'Sachet Edition'
  },
  {
    id: 'chocolatos',
    name: 'Chocolatos',
    description: 'Cokelat pekat italia rasa mantap.',
    price: 5000,
    type: 'minuman',
    category: 'sachet-edition',
    categoryName: 'Sachet Edition'
  },

  // ==========================================
  // MAKANAN (PANGANAN)
  // ==========================================

  // Menu Utama
  {
    id: 'sego-goreng',
    name: 'Sego Goreng',
    description: 'Sego Goreng Khas Ndalem Kopi dengan bumbu rempah pilihan.',
    price: 12000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'sego-paru',
    name: 'Sego Paru',
    description: 'Sego + Paru gurih lezat berempah.',
    price: 12000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'krengsengan-daging',
    name: 'Krengsengan Daging',
    description: 'Sego + Krengsengan Daging sapi bumbu gurih pedas manis.',
    price: 15000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'sego-rendang',
    name: 'Sego Rendang',
    description: 'Sego + Rendang + Sambal khas mantap.',
    price: 15000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'bakmi-jowo',
    name: 'Bakmi Jowo',
    description: 'Bakmi Jowo Khas Ndalem Kopi dengan racikan kecap & kaldu gurih.',
    price: 15000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama',
    favorite: true
  },
  {
    id: 'nasi-goreng-special',
    name: 'Nasi Goreng Special',
    description: 'Nasi Goreng Special Ndalem Kopi dengan topping komplit.',
    price: 18000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama',
    favorite: true
  },
  {
    id: 'serundeng-paru',
    name: 'Serundeng Paru',
    description: 'Sego + Serundeng Paru kelapa sangrai wangi.',
    price: 20000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'ayam-goreng',
    name: 'Ayam Goreng',
    description: 'Sego + Ayam Goreng + Lalapan dan sambal nikmat.',
    price: 25000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'bebek-goreng',
    name: 'Bebek Goreng',
    description: 'Sego + Bebek Goreng + Lalapan empuk renyah meresap.',
    price: 25000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'lodho-ayam-kampung',
    name: 'Lodho Ayam Kampung',
    description: 'Sego + Ayam Lodho kuah santan gurih pedas khas Jawa Timur.',
    price: 25000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },
  {
    id: 'dendeng-ragi',
    name: 'Dendeng Ragi',
    description: 'Sego + Dendeng Ragi daging gurih dengan parutan kelapa berbumbu.',
    price: 25000,
    type: 'makanan',
    category: 'menu-utama',
    categoryName: 'Menu Utama'
  },

  // Serba 10K
  {
    id: 'sego-telur-crispy',
    name: 'Sego Telur Crispy',
    description: 'Sego + Telur Crispy + Sambal lezat hemat.',
    price: 10000,
    type: 'makanan',
    category: 'serba-10k',
    categoryName: 'Serba 10K'
  },
  {
    id: 'sego-blendi',
    name: 'Sego Blendi',
    description: 'Sego + Blendi + Tewel pedas gurih sedap khas Ndalem.',
    price: 10000,
    type: 'makanan',
    category: 'serba-10k',
    categoryName: 'Serba 10K',
    signature: true,
    favorite: true,
    image: '/images/menu/sego-blendi.webp'
  },
  {
    id: 'sego-ayam-goreng-10k',
    name: 'Sego Ayam Goreng',
    description: 'Sego + Ayam Goreng + Sambal porsi pas nikmat.',
    price: 10000,
    type: 'makanan',
    category: 'serba-10k',
    categoryName: 'Serba 10K'
  },
  {
    id: 'indomie-nyemek',
    name: 'Indomie Nyemek',
    description: 'Mie Nyemek Khas Ndalem Kopi dengan telur dan kuah kental bumbu sedap.',
    price: 10000,
    type: 'makanan',
    category: 'serba-10k',
    categoryName: 'Serba 10K'
  },

  // Snack
  {
    id: 'kentang-goreng',
    name: 'Kentang Goreng',
    description: 'Kentang goreng renyah bumbu gurih.',
    price: 5000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'tahu-susu',
    name: 'Tahu Susu',
    description: 'Tahu susu goreng lembut di dalam garing di luar.',
    price: 5000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'tempe-mendoan',
    name: 'Tempe Mendoan',
    description: 'Tempe mendoan anget disajikan dengan sambal kecap pedas.',
    price: 5000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'gethuk-goreng',
    name: 'Gethuk Goreng',
    description: 'Gethuk singkong manis legit goreng renyah.',
    price: 5000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'pisang-goreng',
    name: 'Pisang Goreng',
    description: 'Pisang goreng manis empuk bertepung garing.',
    price: 7000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'sosis-goreng',
    name: 'Sosis',
    description: 'Sosis goreng gurih dengan cocolan saus.',
    price: 8000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'otak-otak',
    name: 'Otak-Otak',
    description: 'Otak-otak goreng kenyal gurih lezat.',
    price: 10000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'cireng',
    name: 'Cireng',
    description: 'Cireng kenyal renyah dengan bumbu rujak pedas manis.',
    price: 10000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'dimsum-goreng',
    name: 'Dimsum Goreng',
    description: 'Dimsum renyah gurih isi olahan daging sedap.',
    price: 10000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'nugget-goreng',
    name: 'Nugget',
    description: 'Nugget ayam garing keemasan.',
    price: 10000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  },
  {
    id: 'mix-platter',
    name: 'Mix Platter',
    description: 'Kombinasi aneka gorengan snack pas untuk rame-rame.',
    price: 10000,
    type: 'makanan',
    category: 'snack',
    categoryName: 'Snack'
  }
];

// Helper functions
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

export function formatPriceShort(price: number): string {
  if (price >= 1000) {
    return `${price / 1000}K`;
  }
  return `${price}`;
}

export function getFavoriteDrinks(limit = 3): MenuItem[] {
  return menuItems
    .filter((item) => item.type === 'minuman' && item.favorite)
    .slice(0, limit);
}

export function getFavoriteFoods(limit = 3): MenuItem[] {
  return menuItems
    .filter((item) => item.type === 'makanan' && item.favorite)
    .slice(0, limit);
}

export function getMenuByType(type: MenuType): MenuItem[] {
  return menuItems.filter((item) => item.type === type);
}

export function getCategoriesByType(type?: MenuType): CategoryInfo[] {
  if (!type) return CATEGORIES;
  return CATEGORIES.filter((cat) => cat.type === type);
}
