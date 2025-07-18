import { WeddingTemplate, TemplateCategory } from '@/types/template';

export const templateCategories: TemplateCategory[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Timeless and traditional wedding designs',
    icon: '👑'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary and sleek designs',
    icon: '✨'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated and refined styles',
    icon: '💎'
  },
  {
    id: 'rustic',
    name: 'Rustic',
    description: 'Natural and countryside themes',
    icon: '🌿'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean and simple designs',
    icon: '⚪'
  }
];

export const weddingTemplates: WeddingTemplate[] = [
  {
    id: 'classic-gold',
    name: 'Classic Gold',
    description: 'Elegant gold and ivory design with traditional elements',
    category: 'classic',
    thumbnail: '/templates/classic-gold.jpg',
    components: {
      "ROOT": {
        "type": {
          "resolvedName": "Container"
        },
        "isCanvas": true,
        "props": {
          "className": "min-h-screen bg-gradient-to-b from-amber-50 to-white p-8 flex flex-col items-center justify-center space-y-8"
        },
        "displayName": "Container",
        "custom": {},
        "hidden": false,
        "nodes": ["couple-names", "wedding-date", "venue-info", "decorative"],
        "linkedNodes": {}
      },
      "couple-names": {
        "type": {
          "resolvedName": "CoupleNames"
        },
        "isCanvas": false,
        "props": {
          "brideName": "Sarah",
          "groomName": "Michael",
          "separator": "&",
          "fontSize": "text-4xl",
          "fontWeight": "font-bold",
          "textAlign": "text-center",
          "color": "#B8860B",
          "fontFamily": "font-serif"
        },
        "displayName": "Couple Names",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
      },
      "wedding-date": {
        "type": {
          "resolvedName": "WeddingDate"
        },
        "isCanvas": false,
        "props": {
          "date": "2024-06-15",
          "time": "16:00",
          "format": "full",
          "showTime": true,
          "fontSize": "text-xl",
          "color": "#8B4513",
          "textAlign": "text-center"
        },
        "displayName": "Wedding Date",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
      },
      "venue-info": {
        "type": {
          "resolvedName": "VenueInfo"
        },
        "isCanvas": false,
        "props": {
          "venueName": "Grand Ballroom",
          "address": "123 Wedding Street, City",
          "layout": "stacked",
          "showMap": true,
          "fontSize": "text-lg",
          "color": "#654321"
        },
        "displayName": "Venue Info",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
      },
      "decorative": {
        "type": {
          "resolvedName": "DecorativeElement"
        },
        "isCanvas": false,
        "props": {
          "elementType": "divider",
          "size": "large",
          "color": "#DAA520"
        },
        "displayName": "Decorative Element",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
      }
    },
    colors: {
      primary: '#B8860B',
      secondary: '#DAA520',
      accent: '#FFD700',
      text: '#654321',
      background: '#FFFEF7'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    tags: ['gold', 'traditional', 'elegant'],
    isPremium: false
  },
  {
    id: 'modern-rose',
    name: 'Modern Rose',
    description: 'Contemporary design with rose gold accents',
    category: 'modern',
    thumbnail: '/templates/modern-rose.jpg',
    components: {
      "ROOT": {
        "type": "div",
        "nodes": ["decorative-top", "couple-names", "wedding-date", "venue-info"],
        "props": {
          "className": "min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-8"
        }
      },
      "decorative-top": {
        "type": "DecorativeElement",
        "props": {
          "elementType": "hearts",
          "size": "medium",
          "color": "#E91E63"
        }
      },
      "couple-names": {
        "type": "CoupleNames",
        "props": {
          "brideName": "Emma",
          "groomName": "James",
          "separator": "♥",
          "fontSize": "text-5xl",
          "fontWeight": "font-light",
          "textAlign": "text-center",
          "color": "#C2185B",
          "fontFamily": "font-sans"
        }
      },
      "wedding-date": {
        "type": "WeddingDate",
        "props": {
          "date": "2024-08-20",
          "time": "18:00",
          "format": "elegant",
          "showTime": true,
          "fontSize": "text-2xl",
          "color": "#AD1457",
          "textAlign": "text-center"
        }
      },
      "venue-info": {
        "type": "VenueInfo",
        "props": {
          "venueName": "Rose Garden",
          "address": "456 Garden Avenue, City",
          "layout": "card",
          "showMap": true,
          "fontSize": "text-lg",
          "color": "#880E4F"
        }
      }
    },
    colors: {
      primary: '#C2185B',
      secondary: '#E91E63',
      accent: '#F8BBD9',
      text: '#880E4F',
      background: '#FDF2F8'
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Open Sans',
      accent: 'Dancing Script'
    },
    tags: ['rose', 'modern', 'romantic'],
    isPremium: false
  },
  {
    id: 'elegant-navy',
    name: 'Elegant Navy',
    description: 'Sophisticated navy and gold combination',
    category: 'elegant',
    thumbnail: '/templates/elegant-navy.jpg',
    components: {
      "ROOT": {
        "type": "div",
        "nodes": ["couple-names", "decorative-middle", "wedding-date", "venue-info"],
        "props": {
          "className": "min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-8"
        }
      },
      "couple-names": {
        "type": "CoupleNames",
        "props": {
          "brideName": "Isabella",
          "groomName": "Alexander",
          "separator": "and",
          "fontSize": "text-4xl",
          "fontWeight": "font-semibold",
          "textAlign": "text-center",
          "color": "#1E3A8A",
          "fontFamily": "font-serif"
        }
      },
      "decorative-middle": {
        "type": "DecorativeElement",
        "props": {
          "elementType": "rings",
          "size": "large",
          "color": "#B8860B"
        }
      },
      "wedding-date": {
        "type": "WeddingDate",
        "props": {
          "date": "2024-09-14",
          "time": "15:30",
          "format": "formal",
          "showTime": true,
          "fontSize": "text-xl",
          "color": "#1E40AF",
          "textAlign": "text-center"
        }
      },
      "venue-info": {
        "type": "VenueInfo",
        "props": {
          "venueName": "The Manor House",
          "address": "789 Estate Road, City",
          "layout": "inline",
          "showMap": true,
          "fontSize": "text-lg",
          "color": "#1E3A8A"
        }
      }
    },
    colors: {
      primary: '#1E3A8A',
      secondary: '#3B82F6',
      accent: '#DBEAFE',
      text: '#1E40AF',
      background: '#F8FAFC'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Source Sans Pro',
      accent: 'Allura'
    },
    tags: ['navy', 'gold', 'sophisticated'],
    isPremium: true
  },
  {
    id: 'rustic-green',
    name: 'Rustic Green',
    description: 'Natural woodland theme with earthy tones',
    category: 'rustic',
    thumbnail: '/templates/rustic-green.jpg',
    components: {
      "ROOT": {
        "type": "div",
        "nodes": ["decorative-top", "couple-names", "wedding-date", "venue-info", "decorative-bottom"],
        "props": {
          "className": "min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 p-8"
        }
      },
      "decorative-top": {
        "type": "DecorativeElement",
        "props": {
          "elementType": "flowers",
          "size": "medium",
          "color": "#059669"
        }
      },
      "couple-names": {
        "type": "CoupleNames",
        "props": {
          "brideName": "Olivia",
          "groomName": "Ethan",
          "separator": "&",
          "fontSize": "text-4xl",
          "fontWeight": "font-medium",
          "textAlign": "text-center",
          "color": "#065F46",
          "fontFamily": "font-serif"
        }
      },
      "wedding-date": {
        "type": "WeddingDate",
        "props": {
          "date": "2024-07-12",
          "time": "17:00",
          "format": "casual",
          "showTime": true,
          "fontSize": "text-xl",
          "color": "#047857",
          "textAlign": "text-center"
        }
      },
      "venue-info": {
        "type": "VenueInfo",
        "props": {
          "venueName": "Woodland Lodge",
          "address": "321 Forest Trail, Mountains",
          "layout": "stacked",
          "showMap": true,
          "fontSize": "text-lg",
          "color": "#065F46"
        }
      },
      "decorative-bottom": {
        "type": "DecorativeElement",
        "props": {
          "elementType": "divider",
          "size": "medium",
          "color": "#10B981"
        }
      }
    },
    colors: {
      primary: '#065F46',
      secondary: '#059669',
      accent: '#A7F3D0',
      text: '#047857',
      background: '#F0FDF4'
    },
    fonts: {
      heading: 'Libre Baskerville',
      body: 'Lato',
      accent: 'Kaushan Script'
    },
    tags: ['green', 'nature', 'woodland'],
    isPremium: false
  },
  {
    id: 'minimalist-white',
    name: 'Minimalist White',
    description: 'Clean and simple design with subtle accents',
    category: 'minimalist',
    thumbnail: '/templates/minimalist-white.jpg',
    components: {
      "ROOT": {
        "type": "div",
        "nodes": ["couple-names", "wedding-date", "venue-info"],
        "props": {
          "className": "min-h-screen bg-white p-12"
        }
      },
      "couple-names": {
        "type": "CoupleNames",
        "props": {
          "brideName": "Sophia",
          "groomName": "Daniel",
          "separator": "+",
          "fontSize": "text-6xl",
          "fontWeight": "font-thin",
          "textAlign": "text-center",
          "color": "#374151",
          "fontFamily": "font-sans"
        }
      },
      "wedding-date": {
        "type": "WeddingDate",
        "props": {
          "date": "2024-10-05",
          "time": "14:00",
          "format": "simple",
          "showTime": false,
          "fontSize": "text-lg",
          "color": "#6B7280",
          "textAlign": "text-center"
        }
      },
      "venue-info": {
        "type": "VenueInfo",
        "props": {
          "venueName": "City Hall",
          "address": "100 Main Street, Downtown",
          "layout": "inline",
          "showMap": false,
          "fontSize": "text-base",
          "color": "#9CA3AF"
        }
      }
    },
    colors: {
      primary: '#374151',
      secondary: '#6B7280',
      accent: '#F3F4F6',
      text: '#111827',
      background: '#FFFFFF'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Inter'
    },
    tags: ['minimal', 'clean', 'simple'],
    isPremium: false
  }
];