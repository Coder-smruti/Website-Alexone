import living01 from './assets/residential/living-01.jpg';
import living02 from './assets/residential/living-02.jpg';
import living03 from './assets/residential/living-03.jpg';
import living04 from './assets/residential/living-04.jpg';
import living05 from './assets/residential/living-05.jpg';
import living06 from './assets/residential/living-06.jpg';
import living07 from './assets/residential/living-07.jpg';
import living08 from './assets/residential/living-08.jpg';
import living09 from './assets/residential/living-09.jpg';
import kitchen01 from './assets/residential/kitchen-01.jpg';
import kitchen02 from './assets/residential/kitchen-02.jpg';
import kitchen03 from './assets/residential/kitchen-03.jpg';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hotel' | 'Bar & Lounge' | 'Workspace';
  image: string;
  description: string;
  subCategory?: string;
}

export interface ResidentialHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  top: string;
  left: string;
}

export interface ResidentialScene {
  id: string;
  label: string;
  title: string;
  image: string;
  summary: string;
  hotspots: ResidentialHotspot[];
}

export const RESIDENTIAL_HERO_IMAGE = living06;

export const RESIDENTIAL_ENTRY_STACK = [
  {
    image: living01,
    title: 'Living Room',
    caption: 'Warm marble tones with a sculpted media wall',
  },
  {
    image: kitchen01,
    title: 'Modular Kitchen',
    caption: 'Fresh pastel storage with compact spatial planning',
  },
  {
    image: living09,
    title: 'Feature View',
    caption: 'Layered seating, wood textures, and ambient lighting',
  },
];

export const RESIDENTIAL_PANORAMA_SCENES: ResidentialScene[] = [
  {
    id: 'living-room',
    label: 'Living Room',
    title: 'Cinematic Lounge View',
    image: living06,
    summary: 'Move through the primary lounge concept and inspect the layered marble, seating, and ambient lighting composition.',
    hotspots: [
      {
        id: 'living-media',
        title: 'Media Wall',
        subtitle: 'TV Unit',
        description: 'A sculpted entertainment wall with glossy cabinetry, warm light lines, and strong symmetry.',
        top: '46%',
        left: '74%',
      },
      {
        id: 'living-seating',
        title: 'Lounge Seating',
        subtitle: 'Living Zone',
        description: 'A soft neutral seating block designed to keep the room warm, social, and visually calm.',
        top: '56%',
        left: '34%',
      },
      {
        id: 'living-art',
        title: 'Art Wall',
        subtitle: 'Decor',
        description: 'A curated gallery wall that brings personality and balance to the entry-facing elevation.',
        top: '42%',
        left: '54%',
      },
    ],
  },
  {
    id: 'feature-wall',
    label: 'Feature Wall',
    title: 'Statement Detail View',
    image: living01,
    summary: 'Focus on the hero surfaces that define the room through wood ribs, gloss panels, and integrated fire detail.',
    hotspots: [
      {
        id: 'feature-panel',
        title: 'Timber Panelling',
        subtitle: 'Materiality',
        description: 'Vertical timber ribs create depth and rhythm behind the TV composition.',
        top: '40%',
        left: '62%',
      },
      {
        id: 'feature-fire',
        title: 'Ambient Fire Strip',
        subtitle: 'Lighting',
        description: 'A low flame line adds drama and warmth without overpowering the room.',
        top: '52%',
        left: '64%',
      },
      {
        id: 'feature-marble',
        title: 'Coffee Table',
        subtitle: 'Furniture',
        description: 'Rounded marble tables soften the angular media wall and ground the lounge layout.',
        top: '70%',
        left: '48%',
      },
    ],
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'Modular Kitchen View',
    image: kitchen01,
    summary: 'Explore the kitchen concept with pastel cabinetry, patterned backsplash, and a bright work surface.',
    hotspots: [
      {
        id: 'kitchen-base',
        title: 'Base Storage',
        subtitle: 'Cabinetry',
        description: 'Minimal handle-less lower cabinets keep the kitchen visually clean and practical.',
        top: '68%',
        left: '52%',
      },
      {
        id: 'kitchen-wall',
        title: 'Wall Units',
        subtitle: 'Storage',
        description: 'Timber-finished upper units bring warmth and balance to the palette.',
        top: '34%',
        left: '50%',
      },
      {
        id: 'kitchen-backsplash',
        title: 'Backsplash Pattern',
        subtitle: 'Finish',
        description: 'Decorative wall tiles add character and break the monotony of flat surfaces.',
        top: '48%',
        left: '58%',
      },
    ],
  },
];

export const CATEGORIES = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Personalized living spaces crafted for comfort, sophistication, and lifestyle.',
    image: RESIDENTIAL_HERO_IMAGE,
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'High-performance business environments designed for impact and efficiency.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'hotel',
    title: 'Hotel',
    description: 'Hospitality spaces that elevate ambience, luxury, and guest experience.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'bar-lounge',
    title: 'Bar & Lounge',
    description: 'Mood-rich interiors with dramatic aesthetics and unforgettable atmosphere.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'workspace',
    title: 'Workspace',
    description: 'Modern, intelligent spaces built for focus, collaboration, and innovation.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'chandrasekharpur-lounge',
    title: 'Chandrasekharpur Lounge',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living06,
    description: 'A cinematic living room with marble, mood lighting, and a layered seating composition.',
  },
  {
    id: 'chandrasekharpur-tv-wall',
    title: 'Signature TV Wall',
    category: 'Residential',
    subCategory: 'TV Unit',
    image: living01,
    description: 'Glossy cabinetry and vertical panelling shape a refined entertainment focal point.',
  },
  {
    id: 'chandrasekharpur-conversation-zone',
    title: 'Conversation Corner',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living03,
    description: 'A relaxed social setting designed around warmth, softness, and balanced illumination.',
  },
  {
    id: 'chandrasekharpur-texture-wall',
    title: 'Texture Wall Feature',
    category: 'Residential',
    subCategory: 'Feature Wall',
    image: living09,
    description: 'Wood ribs, metallic textures, and fireplace detailing create a memorable residential accent.',
  },
  {
    id: 'chandrasekharpur-entry-view',
    title: 'Entry Perspective',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living07,
    description: 'A welcoming view that frames the room through texture, symmetry, and soft contrast.',
  },
  {
    id: 'chandrasekharpur-lounge-detail',
    title: 'Lounge Detail Study',
    category: 'Residential',
    subCategory: 'TV Unit',
    image: living08,
    description: 'A closer study of media-wall integration, display styling, and architectural lighting.',
  },
  {
    id: 'chandrasekharpur-kitchen-concept',
    title: 'Fresh Modular Kitchen',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen01,
    description: 'Mint and timber finishes bring brightness to a compact modular kitchen composition.',
  },
  {
    id: 'chandrasekharpur-kitchen-minimal',
    title: 'Minimal Kitchen Line',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen02,
    description: 'Clean white planes and pastel lower cabinetry create a calm everyday workspace.',
  },
  {
    id: 'chandrasekharpur-kitchen-detail',
    title: 'Kitchen Storage Detail',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen03,
    description: 'A crisp storage-focused layout that keeps the room open, airy, and highly usable.',
  },
  {
    id: 'aurelia-studio',
    title: 'Aurelia Commercial Studio',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    description: 'A strategic showroom design focused on brand impact and customer flow.',
  },
  {
    id: 'velvet-lounge',
    title: 'Velvet Lounge Concept',
    category: 'Bar & Lounge',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800',
    description: 'Dramatic lighting and rich materials create an unforgettable nightlife atmosphere.',
  },
  {
    id: 'grand-horizon',
    title: 'Grand Horizon Hotel',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury hospitality design that elevates the guest experience to new heights.',
  },
  {
    id: 'axis-workspace',
    title: 'Axis Workspace Suite',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    description: 'A contemporary office environment built for focus and collaboration.',
  },
];

export const MATERIALS = {
  interiorSolutions: [
    'Modular Kitchen', 'Wardrobe', 'TV Unit', 'Crockery Unit', 
    'Vanity / Dressing Unit', 'Headboard & Wall Panelling', 
    'Bed Styles', 'Doors & Windows', 'Ceiling Solutions'
  ],
  materialTypes: [
    'Acrylic', 'Laminate', 'PVC Laminate', 'Lamination', 'PU', 'Veneer', 
    'Lacquered Glass', 'Toughened Glass', 'Texture Laminate', 'Louvers', 
    'UPVC', 'WPC', 'Aluminium', 'Gypsum', 'POP', 'Stretch Finish'
  ],
  partners: [
    'Godrej', 'Ebco', 'Hettich', 'Livspace', 'Tandem', 'Hafele', 
    'Century', 'Green Panel', 'Austin', 'Black Cobra', 'VANM', 
    'Airolam', 'Fenesta', 'Saint-Gobain'
  ],
  decorLighting: [
    'Decor Items', 'Profile Light', 'Cylinder Light', 'Focus Light', 
    'Strip Light', 'Surface Light', 'Fountain', 'Automation'
  ]
};
