import { LivingSphere, CaseStudy, ServiceItem, MaterialItem, Testimonial } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1U313pe7z41-LTiTgZhM11nAWL87GjTd_uo8CI-r0-FAQcZhBUtkWeFvJgjDevNnHE5m1E3SdbIbHZWLme9p4kB98H1GMEiA20mVYhhh7pkxp1BAT9Qm755FKEBVrad1xLjrbFjowBREk7TriF3pKDJLWYstGJMhsNQrgBo0G6QazZ8fL-Jgb0aWkGfMb58sVVTbw-DXs5d63Tbb4quAeeKE1Wj8EkRX2RWXFo2DVWPbHqreVF7ax4E8w';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkr9u6bb9uMhra7XCO5Jed_kbgBlFsqVO_yDYA4UUrkuB7EChjhYA0bgspuWP1tVA_66BFaSQEmKOUEYd5p19vc4a8vc3lgR3aGNp94eW0fz61ZOc0H-46jIn14MRKLdeg0EPZMo9yYrdDpwWV5geyMI1epYfvTZImpj4OEq2aMcApfm0IOwDpRO-DNK_A7FS9L1FL9euNG14PMtO1Lyt4hLf0PAifHzYG82CDjvj3nxeC7Ut6AHE';

export const LIVING_SPHERES: LivingSphere[] = [
  {
    id: 'luxury-living-rooms',
    tag: 'Living',
    title: 'Luxury Living Rooms',
    description: 'Bespoke seating arrangements, sculpted plaster fireplaces, and custom fluted architectural paneling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDao6Fn6X-ADcwHA3FD2U7280Qzwc5oRcO1xR_2yrTU9z6_JjQKmczEsXJpnC7tlDFHZAcH-gAfIaqKgzENI8bH_8HgK11PI2EMMGRrA1Eaxt4tz6V_x7TcrVgLKA4ut9wgvaZIwgLUIoyDoCW9z2ZBvqynhO9SEkQzneIBmK7vTtxrordjzUGVDLWeXr8Dw3UGawdMd0Xayzi_5lBDveeMNFhxAxe6E0BVsQHd7aOVDuBIkwYIuws',
    imageAlt: 'Sophisticated modern luxury living room with bespoke monolithic plaster fireplace, custom fluted walnut wood wall paneling, curved ivory linen sofa, and warm amber cove lighting reflecting on polished microcement.',
    category: 'living',
    materials: ['Honed Travertine', 'Smoked Oiled Walnut', 'Belgian Oatmeal Bouclé', 'Lime Plaster'],
    dimensions: 'Typical 800 - 1,400 sq.ft footprint',
    lightingSpec: '2700K Warm Dim LED Cove + Architectural Recessed Pinspots'
  },
  {
    id: 'modern-bedrooms',
    tag: 'Sanctuary',
    title: 'Modern Bedrooms',
    description: 'Serene minimalist sanctuaries with custom upholstered headboards and warm acoustic mood sconces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU714FfNTP9jqN_zPCoRaq6n_CLWZmweP4atvPa2BQMHITeDYd2DthL_WBoLR82WTJThi3Ne7Oiljl49QjSVPNeLIpj0mfWv-2F_Y4xCr12r2H3YQNvbCf6Kgz92O1PIsIZH2qi_8vZqXYMBxabYsDKQ9-T_50LjvUBIUFTUyHLRMw6BvWS-O0PRsM4yPmvNtc-PzyJJwrrZWmrJrmPH1yic04elrhYPfjJ26vsht-ccQRI_waFDI',
    imageAlt: 'Minimalist luxury master bedroom suite featuring an expansive floating upholstered headboard in oatmeal bouclé, integrated brass sconce reading lights, warm limewashed walls, and floor length Belgian linen drapery.',
    category: 'bedroom',
    materials: ['FSC White Oak', 'Raw Washed Linen', 'Acoustic Wool Felt', 'Unlacquered Brass'],
    dimensions: 'Typical 550 - 900 sq.ft suite',
    lightingSpec: 'Integrated Bedhead Ambient Luminaire + 2200K Reading Pencils'
  },
  {
    id: 'modular-kitchens',
    tag: 'Culinary',
    title: 'Modular Kitchens',
    description: 'Quartzite waterfall monolithic islands, concealed motorized millwork, and hand-finished bronze fittings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8L4DUmN47wwtxuebAxVwcxJ8UMk9aJ5xtiPrnjmUzLwi6FnYdZ6ttpS-ZiIC1XUZVB4RZg8AyF0FVvcqOrEAjhgnfSp3XUAkfE04rZ68SYkekuwbEbkprJQE3hxM2UtE17g0_zo2_0-4gXBrEbEbOsk7_hq07JUEpaXZQtlnz3ntCaKD6m2fcFgpIl6k7fnb3l3FPFPg__eYlLX6TSRsvK2_RIo5KWIY2QsXgc1gMnTHQAWaE3ks',
    imageAlt: 'Architectural modular kitchen with a monumental Patagonia quartzite waterfall kitchen island, matte smoked oak concealed push to open cabinetry, aged bronze faucet fittings, and recessed downlights.',
    category: 'kitchen',
    materials: ['Patagonia Quartzite', 'German Servo-Drive Joinery', 'Smoked Oak', 'Aged Bronze'],
    dimensions: 'Typical 600 - 1,100 sq.ft culinary space',
    lightingSpec: 'Concealed Under-Cabinet Task Channels + Floating Linear Luminaire'
  },
  {
    id: 'contemporary-dining',
    tag: 'Dining',
    title: 'Contemporary Dining',
    description: 'Solid walnut dining centerpieces, statement alabaster pendants, and bespoke sculptural seating.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy5eMZM8TSZvAbBoyAiO5yuFj3lR1ZIiBWe-jAhJ80oCD2u2PNFXP_iWT2c8eSWAoOXjslUa1nRRb2IFTYKnDOO6B-EUNDeyufohZZhd4pI5EuHxDu9xeNh9oCZ0QoCq_VVPyi9yx8Eh-lgjuMqIdi7WfWBA37Uiu2hzhs2xOu6YshjpZnDkFzY8anJPcMtzBwdV-n8DLWIz6Wss4IyENa43PVeQGd_sSrVrB5tUcFRMkLCClecjk',
    imageAlt: 'Contemporary luxury dining room with solid natural walnut dining table seating eight, sculptural modernist dining chairs, statement organic carved alabaster pendant light, and warm textured plaster walls.',
    category: 'dining',
    materials: ['Solid Canaletto Walnut', 'Hand-Carved Alabaster', 'Aniline Leather', 'Textured Plaster'],
    dimensions: 'Typical 450 - 750 sq.ft entertaining wing',
    lightingSpec: 'Central Sculptural Alabaster Pendant + Floor Washers'
  },
  {
    id: 'minimalist-apartments',
    tag: 'Urban',
    title: 'Minimalist Apartments',
    description: 'Seamless concealed storage, uninterrupted sightlines, and tactile raw microcement accents.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZndZAKBY_4FeI5skXxhsq7eYXF11rb6EUfrErihPRaUcy8P_6h5TkvXLpOK36LLyveaobsRRb27v_pZCPM4muiO3iblhcAFZrGJP0TcQ0cbKEQm77VysbvK4gXP01cr44egaD0X0lt2CloszmHq1LgF-NOJh2U-Jvaym7bDKERy4tAAqSg5uHPiOkM7hxsS-EIE2MuoedJxHBbXbmyW41XFaGLY_SnD42Kz6nLX8qSSmLdz_zfuM',
    imageAlt: 'High-end urban minimalist apartment layout with seamless flush architectural pocket doors, light grey microcement flooring, airy open plan living and curated gallery art display.',
    category: 'urban',
    materials: ['Polished Microcement', 'Flush Concealed Pocket Doors', 'Satin Steel Hardware', 'Gallery White Finish'],
    dimensions: 'Typical 1,800 - 3,500 sq.ft urban flat',
    lightingSpec: 'Perimeter Wall Washers + Magnet-Track Modular Spotlights'
  },
  {
    id: 'luxury-offices',
    tag: 'Executive',
    title: 'Luxury Office Interiors',
    description: 'Rich walnut burl desks, integrated acoustic louvers, and tailored ergonomic luxury for focused work.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEOL-JTj0znkdSs0qwMhCHnnGdxR97-OAoOnXjZ_IImyov42d2tdNx58oTH3JxX8Xr2N-Gxj5ObCYSVcF0O9gDKnuG4IPLf729AbD6tIYyNVJQ4HyeGSCR9Qv_-ZWbGfgHtvpj7BkmEIh7N10br3MRfddlp5ez0MNj7aOFA49M5BiZUNQtQF6D7urs-W4C1hpv35Rm2PA7dfuZE--KYPUFR0c56P7T9y_Krd7xHTdr-hQx-rC6yF0',
    imageAlt: 'Executive luxury home office with custom curved burl wood executive desk, dark acoustic fluted felt wall louvers, bespoke top grain leather chair, and warm brass desk luminaire.',
    category: 'office',
    materials: ['California Walnut Burl', 'Acoustic Louvers', 'Vegetable Tanned Leather', 'Brushed Bronze'],
    dimensions: 'Typical 350 - 650 sq.ft private study',
    lightingSpec: 'Glair-Free Asymmetrical Task Lighting + Warm Library Sconces'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-interior',
    icon: 'villa',
    title: 'Residential Interior Design',
    description: 'Full-scale turnkey residential transformations tailored to your private routine.',
    deliverables: ['Spatial layout blueprints', 'Comprehensive FF&E curation', 'Custom architectural millwork', 'White-glove handover'],
    typicalTimeline: '6 - 14 Months',
    scaleCoverage: '2,500 - 15,000+ sq.ft'
  },
  {
    id: 'commercial-hospitality',
    icon: 'corporate_fare',
    title: 'Commercial & Hospitality Design',
    description: 'Elevated experiential environments for flagship boutiques, clubs, and executive suites.',
    deliverables: ['Brand spatial identity', 'Heavy-traffic luxury textiles', 'Custom retail casework', 'Acoustic architecture'],
    typicalTimeline: '4 - 10 Months',
    scaleCoverage: '3,000 - 25,000 sq.ft'
  },
  {
    id: 'modular-kitchen-architecture',
    icon: 'countertops',
    title: 'Modular Kitchen Architecture',
    description: 'Precision German-engineered joinery married with natural quarry stone surfaces.',
    deliverables: ['Monolithic island engineering', 'Concealed appliance integration', 'Bespoke cutlery inserts', 'Quarry bookmatching'],
    typicalTimeline: '3 - 6 Months',
    scaleCoverage: 'Private estates & penthouses'
  },
  {
    id: 'space-planning-ergonomics',
    icon: 'floor_lamp',
    title: 'Space Planning & Ergonomics',
    description: 'Uncompromising circulation blueprints that optimize light, flow, and stillness.',
    deliverables: ['Sightline sight-studies', 'Natural daylight analysis', 'Circulation optimization', 'HVAC & sensor concealment'],
    typicalTimeline: '4 - 8 Weeks',
    scaleCoverage: 'Pre-construction & renovations'
  },
  {
    id: 'furniture-selection-bespoke-staging',
    icon: 'chair',
    title: 'Furniture Selection & Bespoke Staging',
    description: 'Curated masterworks from Scandinavian, Italian, and Japanese design heritage.',
    deliverables: ['Direct artisan commissioning', 'Vintage gallery acquisitions', 'Custom upholstery testing', 'On-site installation'],
    typicalTimeline: '8 - 16 Weeks',
    scaleCoverage: 'Turnkey residential suites'
  },
  {
    id: 'photorealistic-3d-visualization',
    icon: 'view_in_ar',
    title: 'Photorealistic 3D Visualization',
    description: 'Cinema-grade architectural renderings illuminating material nuances before ground breaks.',
    deliverables: ['8K Still renderings', 'VR spatial walk-throughs', 'Daylight study simulations', 'Material tactile previews'],
    typicalTimeline: '2 - 4 Weeks',
    scaleCoverage: 'Whole-residence visualization'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumina-penthouse',
    title: 'The Lumina Penthouse',
    location: 'TriBeCa, New York',
    style: 'Warm Contemp.',
    scale: '4,200 sq.ft',
    scope: '$420,000',
    completedYear: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZisw2Gj6PRlIN2mLJEPtCQFCrZmGPTrzP0DRNo__zc5AAZF_r14t7XN1rILJTeN72G4jNFhHkS7D48yuyp32uUUWQbmuFpSsRWLWNBERudfwc6fpAg__pzy5IhKAEtM2LBWq0eXGaNquV46IRZBzRxYSynz5M5cR5yc7sofYUJbiwAKnRJx0rOQ5IbYWW1poZsM3J1_wldLBLfZkArKH1OzWdmWz7CGzrl2-1UfWhTCUWMeTYXrA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZisw2Gj6PRlIN2mLJEPtCQFCrZmGPTrzP0DRNo__zc5AAZF_r14t7XN1rILJTeN72G4jNFhHkS7D48yuyp32uUUWQbmuFpSsRWLWNBERudfwc6fpAg__pzy5IhKAEtM2LBWq0eXGaNquV46IRZBzRxYSynz5M5cR5yc7sofYUJbiwAKnRJx0rOQ5IbYWW1poZsM3J1_wldLBLfZkArKH1OzWdmWz7CGzrl2-1UfWhTCUWMeTYXrA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDao6Fn6X-ADcwHA3FD2U7280Qzwc5oRcO1xR_2yrTU9z6_JjQKmczEsXJpnC7tlDFHZAcH-gAfIaqKgzENI8bH_8HgK11PI2EMMGRrA1Eaxt4tz6V_x7TcrVgLKA4ut9wgvaZIwgLUIoyDoCW9z2ZBvqynhO9SEkQzneIBmK7vTtxrordjzUGVDLWeXr8Dw3UGawdMd0Xayzi_5lBDveeMNFhxAxe6E0BVsQHd7aOVDuBIkwYIuws',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkr9u6bb9uMhra7XCO5Jed_kbgBlFsqVO_yDYA4UUrkuB7EChjhYA0bgspuWP1tVA_66BFaSQEmKOUEYd5p19vc4a8vc3lgR3aGNp94eW0fz61ZOc0H-46jIn14MRKLdeg0EPZMo9yYrdDpwWV5geyMI1epYfvTZImpj4OEq2aMcApfm0IOwDpRO-DNK_A7FS9L1FL9euNG14PMtO1Lyt4hLf0PAifHzYG82CDjvj3nxeC7Ut6AHE'
    ],
    description: 'An elevated duplex penthouse overlooking historic cobblestone streets. Aura orchestrated a full architectural gut renovation, stripping away commercial drywall to unveil original cast iron pillars, complimented by floor-to-ceiling smoked walnut millwork and a cantilevered travertine fireplace.',
    clientQuote: 'Aura transformed our raw TriBeCa loft into a private gallery that still feels deeply warm, organic, and like home. Every single detail is sublime.',
    clientName: 'Eleanor Vance',
    architect: 'Julian Delacroix, AIA',
    materials: ['Navona Travertine', 'Smoked European Walnut', 'Raw Plaster', 'Custom Bouclé'],
    typology: 'Duplex Penthouse',
    features: ['Double-Height Living Gallery', 'Custom Boffi Kitchen Joinery', 'Floating Glass Staircase', 'Temperature-Controlled Wine Vault']
  },
  {
    id: 'villa-solstice',
    title: 'Villa Solstice',
    location: 'Malibu, California',
    style: 'Organic Modern',
    scale: '5,800 sq.ft',
    scope: '$650,000',
    completedYear: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIJOAEZrJq6PbxHMN9S7sAjlGy8jPkTnNY14t8VNB26f46OEggk9q3mFQ_YxfDxdtI8iAZcGFetIsaD3CacZYWehRrAbu_qHC4XpA1dovKMQEySIBtm-Z-swqFlyChJNspMxRLkUEMo4vSbTS94Jhbc8eBXievNmzoodLa0gCC8s2yMWSwIGarpa4XrZmd7a9K6n0JApCDbI7iY22yQeXNq-wUChZsPaLNZbLT2_zU8nqpEBWtTs',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIJOAEZrJq6PbxHMN9S7sAjlGy8jPkTnNY14t8VNB26f46OEggk9q3mFQ_YxfDxdtI8iAZcGFetIsaD3CacZYWehRrAbu_qHC4XpA1dovKMQEySIBtm-Z-swqFlyChJNspMxRLkUEMo4vSbTS94Jhbc8eBXievNmzoodLa0gCC8s2yMWSwIGarpa4XrZmd7a9K6n0JApCDbI7iY22yQeXNq-wUChZsPaLNZbLT2_zU8nqpEBWtTs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAU714FfNTP9jqN_zPCoRaq6n_CLWZmweP4atvPa2BQMHITeDYd2DthL_WBoLR82WTJThi3Ne7Oiljl49QjSVPNeLIpj0mfWv-2F_Y4xCr12r2H3YQNvbCf6Kgz92O1PIsIZH2qi_8vZqXYMBxabYsDKQ9-T_50LjvUBIUFTUyHLRMw6BvWS-O0PRsM4yPmvNtc-PzyJJwrrZWmrJrmPH1yic04elrhYPfjJ26vsht-ccQRI_waFDI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAy5eMZM8TSZvAbBoyAiO5yuFj3lR1ZIiBWe-jAhJ80oCD2u2PNFXP_iWT2c8eSWAoOXjslUa1nRRb2IFTYKnDOO6B-EUNDeyufohZZhd4pI5EuHxDu9xeNh9oCZ0QoCq_VVPyi9yx8Eh-lgjuMqIdi7WfWBA37Uiu2hzhs2xOu6YshjpZnDkFzY8anJPcMtzBwdV-n8DLWIz6Wss4IyENa43PVeQGd_sSrVrB5tUcFRMkLCClecjk'
    ],
    description: 'Perched on the coastal bluff of Point Dume, Villa Solstice is an ode to California light and Mediterranean stillness. Pocketing motorized glass walls dissolve boundaries between the honed limestone terraces and bleached cedar ceiling planes.',
    clientQuote: 'The absolute mastery over natural light, bespoke travertine millwork, and understated luxury surpassed all expectations for our coastal sanctuary.',
    clientName: 'Marcus Kensington',
    architect: 'Elena Rostova, AIA',
    materials: ['Honed French Limestone', 'Bleached Western Red Cedar', 'Belgian Linen', 'Patinated Bronze'],
    typology: 'Coastal Estate',
    features: ['Infinity Terrace Integration', 'Outdoor Fire Sculpture', 'Integrated Master Wellness Spa', 'Custom Burl Wood Study']
  },
  {
    id: 'greenwich-pavilion',
    title: 'The Greenwich Pavilion',
    location: 'Greenwich, Connecticut',
    style: 'Classic Contemporary',
    scale: '7,100 sq.ft',
    scope: '$820,000',
    completedYear: '2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8L4DUmN47wwtxuebAxVwcxJ8UMk9aJ5xtiPrnjmUzLwi6FnYdZ6ttpS-ZiIC1XUZVB4RZg8AyF0FVvcqOrEAjhgnfSp3XUAkfE04rZ68SYkekuwbEbkprJQE3hxM2UtE17g0_zo2_0-4gXBrEbEbOsk7_hq07JUEpaXZQtlnz3ntCaKD6m2fcFgpIl6k7fnb3l3FPFPg__eYlLX6TSRsvK2_RIo5KWIY2QsXgc1gMnTHQAWaE3ks',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8L4DUmN47wwtxuebAxVwcxJ8UMk9aJ5xtiPrnjmUzLwi6FnYdZ6ttpS-ZiIC1XUZVB4RZg8AyF0FVvcqOrEAjhgnfSp3XUAkfE04rZ68SYkekuwbEbkprJQE3hxM2UtE17g0_zo2_0-4gXBrEbEbOsk7_hq07JUEpaXZQtlnz3ntCaKD6m2fcFgpIl6k7fnb3l3FPFPg__eYlLX6TSRsvK2_RIo5KWIY2QsXgc1gMnTHQAWaE3ks',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEOL-JTj0znkdSs0qwMhCHnnGdxR97-OAoOnXjZ_IImyov42d2tdNx58oTH3JxX8Xr2N-Gxj5ObCYSVcF0O9gDKnuG4IPLf729AbD6tIYyNVJQ4HyeGSCR9Qv_-ZWbGfgHtvpj7BkmEIh7N10br3MRfddlp5ez0MNj7aOFA49M5BiZUNQtQF6D7urs-W4C1hpv35Rm2PA7dfuZE--KYPUFR0c56P7T9y_Krd7xHTdr-hQx-rC6yF0'
    ],
    description: 'A 1920s stone estate respectfully reimagined with clean geometric clarity. Aura blended preserved historic crown moldings with minimalist marble hearths, French oak chevron parquet, and sculptural Scandinavian furnishings.',
    clientQuote: 'They bridged our respect for heritage with modern day calm and effortless functionality.',
    clientName: 'Soren & Victoria Lindqvist',
    architect: 'Julian Delacroix, AIA',
    materials: ['Calacatta Viola Marble', 'Fumed French Oak Parquet', 'Raw Silk Drapery', 'Cast Bronze'],
    typology: 'Historic Country Estate',
    features: ['Restored Conservator Library', 'Custom Double Chef Kitchen', 'En-Suite Marble Hammam', 'Motorized Architectural Skylights']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: '"Aura transformed our raw TriBeCa loft into a private gallery that still feels deeply warm, organic, and like home. Every single detail is sublime."',
    author: 'Eleanor Vance',
    role: 'TriBeCa Penthouse Owner',
    initials: 'EV',
    rating: 5
  },
  {
    id: 'test-2',
    quote: '"The absolute mastery over natural light, bespoke travertine millwork, and understated luxury surpassed all expectations for our coastal sanctuary."',
    author: 'Marcus Kensington',
    role: 'Villa Solstice, Malibu',
    initials: 'MK',
    rating: 5
  },
  {
    id: 'test-3',
    quote: '"Their open-book financial governance and unyielding architectural discipline made our multi-million dollar transformation an absolute pleasure."',
    author: 'Clara Sterling',
    role: 'SoHo Gallery Director',
    initials: 'CS',
    rating: 5
  }
];

export const NOBLE_MATERIALS: MaterialItem[] = [
  {
    id: 'travertine-romano',
    name: 'Travertine Romano',
    origin: 'Tivoli, Italy',
    tactileFeel: 'Honed, velvet-matte, open pores softly filled with natural chalk',
    acousticRating: 'Reflective structural density with warm reverberation absorption',
    recommendedUse: 'Fireplace surrounds, cantilevered plinths, continuous primary bathroom vanities',
    colorHex: '#e8dfd1',
    description: 'Sourced from the historic quarries of Tivoli, this travertine carries creamy ivory bands and subtle beige striations that mirror ancient Roman architecture.'
  },
  {
    id: 'smoked-walnut',
    name: 'Smoked European Walnut',
    origin: 'Bavaria, Germany (FSC Certified)',
    tactileFeel: 'Deep grain, natural oiled satin finish, warm organic touch',
    acousticRating: 'Exceptional sound dampening and bass reflection softness',
    recommendedUse: 'Concealed millwork, floor-to-ceiling acoustic paneling, private study joinery',
    colorHex: '#423326',
    description: 'Thermally treated without toxic dyes to bring forth deep espresso tones and golden undertones that age gracefully with ambient light.'
  },
  {
    id: 'patagonia-quartzite',
    name: 'Patagonia Quartzite',
    origin: 'Bahia, Brazil',
    tactileFeel: 'Polished crystalline hardness, translucent quartz crystal formations',
    acousticRating: 'Hard reflective stone with dramatic backlighting translucency',
    recommendedUse: 'Waterfall culinary islands, bar backsplashes with integrated rear LED illumination',
    colorHex: '#d8cfbe',
    description: 'A geological masterpiece uniting feldspar, smoky quartz crystals, and volcanic minerals, creating an illuminated sculpture in the kitchen.'
  },
  {
    id: 'french-boucle',
    name: 'Alpaca-Loomed Bouclé',
    origin: 'Lyon, France',
    tactileFeel: 'Rich looped pile, sumptuous warmth, pillowy acoustic cocoon',
    acousticRating: 'Maximum NRC 0.85 noise absorption rating',
    recommendedUse: 'Curved custom sofas, sculptural armchairs, floating primary bedframes',
    colorHex: '#f3ede2',
    description: 'Woven on heritage jacquard looms using undyed natural alpaca wool for an uncompromising tactile experience of comfort.'
  },
  {
    id: 'natural-limewash',
    name: 'Mineral Limewash Plaster',
    origin: 'Verona, Italy',
    tactileFeel: 'Chalky, breathable, subtle cloudy chromatic depth under daylight',
    acousticRating: 'Soft matte diffusion eliminating harsh specular glare',
    recommendedUse: 'Living gallery walls, vaulted bedroom ceilings, niche recesses',
    colorHex: '#eae4d8',
    description: 'Zero-VOC slaked lime blended with fine river sands, creating dynamic patina variations as the sun moves across your living space.'
  }
];
