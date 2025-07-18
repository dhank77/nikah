import { WeddingTemplate } from '@/types/template';

export const simpleTemplates: WeddingTemplate[] = [
  {
    id: 'simple-classic',
    name: 'Simple Classic',
    description: 'Simple classic template for testing',
    category: 'classic',
    thumbnail: '/templates/simple-classic.jpg',
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
        "nodes": ["couple-names-1"],
        "linkedNodes": {}
      },
      "couple-names-1": {
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
  }
];