// ════════════════════════════════════════════
// Deebaj Royal — Product Catalog
// File: src/data/products.ts
// ════════════════════════════════════════════

export interface Product {
  id: number;
  slug: string;
  nameAr: string;
  nameEn: string;
  tagAr: string;
  tagEn: string;
  descAr: string;
  descEn: string;
  price: number;          // SAR
  comparePrice?: number;  // Original price (for discounts)
  category: 'classic' | 'premium' | 'eco' | 'travel' | 'gold';
  features: {
    ar: string[];
    en: string[];
  };
  specs: {
    layers: number;       // 6 for all products
    sheets: number;       // sheets per box
    boxes?: number;       // boxes per pack
  };
  images: string[];       // image paths
  inStock: boolean;
  isFeatured: boolean;
  metaTitle?: { ar: string; en: string };
  metaDescription?: { ar: string; en: string };
}

export const PRODUCTS: Product[] = [
  {
    id: 7,
    slug: 'deebaj-gold',
    nameAr: 'ديباج جولد',
    nameEn: 'Deebaj Gold',
    tagAr: 'البريميوم',
    tagEn: 'Gold Edition',
    descAr: 'النسخة الذهبية الحصرية بتغليف فاخر للمناسبات الراقية.',
    descEn: 'Exclusive gold edition with luxurious packaging for special occasions.',
    price: 120,
    category: 'gold',
    features: {
      ar: [
        'تغليف ذهبي حصري',
        '٦ طبقات بريميوم',
        '٢٠٠ منديل',
        'إصدار محدود',
      ],
      en: [
        'Exclusive gold packaging',
        '6 premium layers',
        '200 sheets',
        'Limited edition',
      ],
    },
    specs: { layers: 6, sheets: 200 },
    images: ['/images/products/deebaj-gold.jpg'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 2,
    slug: 'deebaj-family',
    nameAr: 'ديباج فاميلي',
    nameEn: 'Deebaj Family',
    tagAr: 'العائلة',
    tagEn: 'Family Size',
    descAr: 'الحجم العائلي بطبقات إضافية لراحة أكبر طوال اليوم.',
    descEn: 'Family-size pack with extra layers for all-day comfort.',
    price: 60,
    category: 'classic',
    features: {
      ar: ['٦ طبقات', '٢٠٠ منديل', 'تصميم عائلي', 'توفير أكبر'],
      en: ['6 layers', '200 sheets', 'Family design', 'Better value'],
    },
    specs: { layers: 6, sheets: 200 },
    images: ['/images/products/deebaj-family.jpg'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 6,
    slug: 'deebaj-office',
    nameAr: 'ديباج أوفيس',
    nameEn: 'Deebaj Office',
    tagAr: 'المكتب',
    tagEn: 'Office',
    descAr: 'تصميم احترافي للمكاتب وقاعات الاجتماعات.',
    descEn: 'Professional design for offices and meeting rooms.',
    price: 50,
    category: 'classic',
    features: {
      ar: ['تصميم مكتبي', '٦ طبقات', 'مناسب للشركات', 'بالجملة'],
      en: ['Office design', '6 layers', 'B2B friendly', 'Bulk available'],
    },
    specs: { layers: 6, sheets: 200 },
    images: ['/images/products/deebaj-office.jpg'],
    inStock: true,
    isFeatured: false,
  },
  {
    id: 3,
    slug: 'deebaj-night',
    nameAr: 'ديباج نايت',
    nameEn: 'Deebaj Night',
    tagAr: 'الفاخر',
    tagEn: 'Premium',
    descAr: 'تجربة فاخرة بتصميم أنيق وملمس استثنائي يليق بضيافتك المسائية.',
    descEn: 'A luxurious experience with elegant design and exceptional texture.',
    price: 65,
    category: 'premium',
    features: {
      ar: ['٦ طبقات بريميوم', '١٨٠ منديل', 'تصميم فاخر', 'علبة هدايا'],
      en: ['6 premium layers', '180 sheets', 'Luxury design', 'Gift box'],
    },
    specs: { layers: 6, sheets: 180 },
    images: ['/images/products/deebaj-night.jpg'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 1,
    slug: 'deebaj-classic',
    nameAr: 'ديباج كلاسيك',
    nameEn: 'Deebaj Classic',
    tagAr: 'الأصلي',
    tagEn: 'The Original',
    descAr: 'النعومة الأصلية بست طبقات حقيقية. مثالي للاستخدام اليومي والضيافة.',
    descEn: 'Original softness in six genuine layers. Perfect for daily use and hospitality.',
    price: 45,
    category: 'classic',
    features: {
      ar: [
        '٦ طبقات حقيقية',
        '١٥٠ منديل',
        'ملمس ناعم وقوي',
        'مناسب للضيافة اليومية',
      ],
      en: [
        '6 genuine layers',
        '150 sheets',
        'Soft yet strong texture',
        'Perfect for daily hospitality',
      ],
    },
    specs: { layers: 6, sheets: 150 },
    images: [
      '/images/products/deebaj-classic.jpg',
      '/images/products/deebaj-classic-both.jpg',
    ],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 4,
    slug: 'deebaj-eco',
    nameAr: 'ديباج إيكو',
    nameEn: 'Deebaj Eco',
    tagAr: 'البيئي',
    tagEn: 'Eco-Friendly',
    descAr: 'الخيار الصديق للبيئة من خامات مستدامة بشهادة FSC.',
    descEn: 'Eco-friendly choice from sustainable FSC-certified materials.',
    price: 48,
    category: 'eco',
    features: {
      ar: ['خامات مستدامة', 'شهادة FSC', '٦ طبقات', 'صديق للبيئة'],
      en: ['Sustainable materials', 'FSC certified', '6 layers', 'Eco-friendly'],
    },
    specs: { layers: 6, sheets: 150 },
    images: ['/images/products/deebaj-eco.jpg'],
    inStock: true,
    isFeatured: false,
  },
  {
    id: 5,
    slug: 'deebaj-travel',
    nameAr: 'ديباج ترافل',
    nameEn: 'Deebaj Travel',
    tagAr: 'السفر',
    tagEn: 'On-the-Go',
    descAr: 'حجم السفر المثالي لحقيبتك أو سيارتك.',
    descEn: 'Perfect travel size for your bag or car.',
    price: 35,
    category: 'travel',
    features: {
      ar: ['حجم محمول', '٦ طبقات', 'سهل الحمل', 'مثالي للسفر'],
      en: ['Portable size', '6 layers', 'Easy to carry', 'Travel-friendly'],
    },
    specs: { layers: 6, sheets: 100 },
    images: ['/images/products/deebaj-travel.jpg'],
    inStock: true,
    isFeatured: false,
  },
  {
    id: 8,
    slug: 'deebaj-kitchen',
    nameAr: 'ديباج كيتشن',
    nameEn: 'Deebaj Kitchen',
    tagAr: 'المطبخ',
    tagEn: 'Kitchen',
    descAr: 'مناديل قوية للمطبخ بامتصاص فائق وسماكة حقيقية.',
    descEn: 'Strong kitchen tissue with superior absorption.',
    price: 55,
    category: 'classic',
    features: {
      ar: ['امتصاص فائق', '٦ طبقات قوية', 'للمطبخ', 'متينة'],
      en: ['Superior absorption', '6 strong layers', 'For kitchen', 'Durable'],
    },
    specs: { layers: 6, sheets: 100 },
    images: ['/images/products/deebaj-kitchen.jpg'],
    inStock: true,
    isFeatured: false,
  },
];

// ════════════════════════════════════════════
// Helper Functions
// ════════════════════════════════════════════
export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const getProductById = (id: number) =>
  PRODUCTS.find((p) => p.id === id);

export const getFeaturedProducts = () =>
  PRODUCTS.filter((p) => p.isFeatured);

export const getProductsByCategory = (category: Product['category']) =>
  PRODUCTS.filter((p) => p.category === category);

// ════════════════════════════════════════════
// Subscription Plans
// ════════════════════════════════════════════
export const SUBSCRIPTION_PLANS = [
  {
    id: 'monthly',
    nameAr: 'الاشتراك الشهري',
    nameEn: 'Monthly Plan',
    discount: 10,
    frequency: 'monthly',
    features: {
      ar: ['توصيل شهري', 'شحن مجاني', 'إلغاء في أي وقت'],
      en: ['Monthly delivery', 'Free shipping', 'Cancel anytime'],
    },
  },
  {
    id: 'quarterly',
    nameAr: 'اشتراك ٣ أشهر',
    nameEn: 'Quarterly Plan',
    discount: 15,
    frequency: 'quarterly',
    badge: 'الأكثر توفيراً',
    features: {
      ar: [
        'توصيل كل 3 أشهر',
        'شحن مجاني',
        'أولوية في التوصيل',
        'هدية مع كل شحنة',
      ],
      en: [
        'Every 3 months',
        'Free shipping',
        'Priority delivery',
        'Gift with each shipment',
      ],
    },
  },
  {
    id: 'annual',
    nameAr: 'الاشتراك السنوي',
    nameEn: 'Annual Plan',
    discount: 20,
    frequency: 'annual',
    features: {
      ar: ['توصيل ربع سنوي', 'شحن مجاني', 'مندوب خاص', 'هدايا VIP'],
      en: ['Quarterly delivery', 'Free shipping', 'Dedicated rep', 'VIP gifts'],
    },
  },
];
