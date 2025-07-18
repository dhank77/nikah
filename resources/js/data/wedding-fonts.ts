import { WeddingFont, TypographyPreset, FontWeight, FontSize } from '@/types/typography';

export const weddingFonts: WeddingFont[] = [
  // Script Fonts - Romantic & Elegant
  {
    id: 'great-vibes',
    name: 'Great Vibes',
    family: 'Great Vibes',
    category: 'script',
    style: 'romantic',
    googleFont: 'Great+Vibes:400',
    fallback: 'cursive',
    preview: 'Sarah & Michael',
    description: 'Elegant script font perfect for couple names',
    isPremium: false
  },
  {
    id: 'dancing-script',
    name: 'Dancing Script',
    family: 'Dancing Script',
    category: 'script',
    style: 'playful',
    googleFont: 'Dancing+Script:400,500,600,700',
    fallback: 'cursive',
    preview: 'Wedding Invitation',
    description: 'Playful and friendly script font',
    isPremium: false
  },
  {
    id: 'allura',
    name: 'Allura',
    family: 'Allura',
    category: 'script',
    style: 'elegant',
    googleFont: 'Allura:400',
    fallback: 'cursive',
    preview: 'Forever Together',
    description: 'Sophisticated calligraphy-style script',
    isPremium: false
  },
  {
    id: 'pacifico',
    name: 'Pacifico',
    family: 'Pacifico',
    category: 'script',
    style: 'playful',
    googleFont: 'Pacifico:400',
    fallback: 'cursive',
    preview: 'Love Story',
    description: 'Casual and friendly script font',
    isPremium: false
  },

  // Serif Fonts - Classic & Elegant
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    family: 'Playfair Display',
    category: 'serif',
    style: 'elegant',
    googleFont: 'Playfair+Display:400,500,600,700,800,900',
    fallback: 'serif',
    preview: 'Wedding Ceremony',
    description: 'High-contrast serif with distinctive style',
    isPremium: false
  },
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond',
    family: 'Cormorant Garamond',
    category: 'serif',
    style: 'classic',
    googleFont: 'Cormorant+Garamond:300,400,500,600,700',
    fallback: 'serif',
    preview: 'Elegant Wedding',
    description: 'Classic serif with refined elegance',
    isPremium: false
  },
  {
    id: 'crimson-text',
    name: 'Crimson Text',
    family: 'Crimson Text',
    category: 'serif',
    style: 'classic',
    googleFont: 'Crimson+Text:400,600,700',
    fallback: 'serif',
    preview: 'Traditional Style',
    description: 'Traditional serif perfect for body text',
    isPremium: false
  },
  {
    id: 'libre-baskerville',
    name: 'Libre Baskerville',
    family: 'Libre Baskerville',
    category: 'serif',
    style: 'classic',
    googleFont: 'Libre+Baskerville:400,700',
    fallback: 'serif',
    preview: 'Timeless Beauty',
    description: 'Classic Baskerville-inspired serif',
    isPremium: false
  },

  // Sans-serif Fonts - Modern & Clean
  {
    id: 'montserrat',
    name: 'Montserrat',
    family: 'Montserrat',
    category: 'sans-serif',
    style: 'modern',
    googleFont: 'Montserrat:100,200,300,400,500,600,700,800,900',
    fallback: 'sans-serif',
    preview: 'Modern Wedding',
    description: 'Geometric sans-serif with urban style',
    isPremium: false
  },
  {
    id: 'lato',
    name: 'Lato',
    family: 'Lato',
    category: 'sans-serif',
    style: 'modern',
    googleFont: 'Lato:100,300,400,700,900',
    fallback: 'sans-serif',
    preview: 'Clean & Simple',
    description: 'Humanist sans-serif with warmth',
    isPremium: false
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    family: 'Open Sans',
    category: 'sans-serif',
    style: 'modern',
    googleFont: 'Open+Sans:300,400,500,600,700,800',
    fallback: 'sans-serif',
    preview: 'Contemporary',
    description: 'Friendly and readable sans-serif',
    isPremium: false
  },
  {
    id: 'source-sans-pro',
    name: 'Source Sans Pro',
    family: 'Source Sans Pro',
    category: 'sans-serif',
    style: 'modern',
    googleFont: 'Source+Sans+Pro:200,300,400,600,700,900',
    fallback: 'sans-serif',
    preview: 'Professional',
    description: 'Professional and versatile sans-serif',
    isPremium: false
  },

  // Display Fonts - Unique & Decorative
  {
    id: 'cinzel',
    name: 'Cinzel',
    family: 'Cinzel',
    category: 'display',
    style: 'elegant',
    googleFont: 'Cinzel:400,500,600,700,800,900',
    fallback: 'serif',
    preview: 'ROYAL WEDDING',
    description: 'Classical Roman-inspired capitals',
    isPremium: true
  },
  {
    id: 'abril-fatface',
    name: 'Abril Fatface',
    family: 'Abril Fatface',
    category: 'display',
    style: 'elegant',
    googleFont: 'Abril+Fatface:400',
    fallback: 'serif',
    preview: 'Grand Celebration',
    description: 'Bold display font with strong presence',
    isPremium: true
  },

  // Handwriting Fonts - Personal & Intimate
  {
    id: 'kaushan-script',
    name: 'Kaushan Script',
    family: 'Kaushan Script',
    category: 'handwriting',
    style: 'playful',
    googleFont: 'Kaushan+Script:400',
    fallback: 'cursive',
    preview: 'Personal Touch',
    description: 'Casual handwriting style',
    isPremium: false
  },
  {
    id: 'satisfy',
    name: 'Satisfy',
    family: 'Satisfy',
    category: 'handwriting',
    style: 'romantic',
    googleFont: 'Satisfy:400',
    fallback: 'cursive',
    preview: 'Handwritten Love',
    description: 'Natural handwriting feel',
    isPremium: false
  }
];

export const typographyPresets: TypographyPreset[] = [
  {
    id: 'classic-elegance',
    name: 'Classic Elegance',
    description: 'Timeless combination of serif and script fonts',
    category: 'classic',
    heading: weddingFonts.find(f => f.id === 'playfair-display')!,
    subheading: weddingFonts.find(f => f.id === 'cormorant-garamond')!,
    body: weddingFonts.find(f => f.id === 'crimson-text')!,
    accent: weddingFonts.find(f => f.id === 'great-vibes')!
  },
  {
    id: 'modern-romance',
    name: 'Modern Romance',
    description: 'Contemporary fonts with romantic script accents',
    category: 'modern',
    heading: weddingFonts.find(f => f.id === 'montserrat')!,
    subheading: weddingFonts.find(f => f.id === 'lato')!,
    body: weddingFonts.find(f => f.id === 'open-sans')!,
    accent: weddingFonts.find(f => f.id === 'dancing-script')!
  },
  {
    id: 'romantic-script',
    name: 'Romantic Script',
    description: 'Script-heavy combination for romantic feel',
    category: 'romantic',
    heading: weddingFonts.find(f => f.id === 'allura')!,
    subheading: weddingFonts.find(f => f.id === 'great-vibes')!,
    body: weddingFonts.find(f => f.id === 'libre-baskerville')!,
    accent: weddingFonts.find(f => f.id === 'dancing-script')!
  },
  {
    id: 'royal-elegance',
    name: 'Royal Elegance',
    description: 'Luxurious fonts for premium weddings',
    category: 'elegant',
    heading: weddingFonts.find(f => f.id === 'cinzel')!,
    subheading: weddingFonts.find(f => f.id === 'playfair-display')!,
    body: weddingFonts.find(f => f.id === 'cormorant-garamond')!,
    accent: weddingFonts.find(f => f.id === 'allura')!
  },
  {
    id: 'playful-love',
    name: 'Playful Love',
    description: 'Fun and casual fonts for relaxed celebrations',
    category: 'playful',
    heading: weddingFonts.find(f => f.id === 'pacifico')!,
    subheading: weddingFonts.find(f => f.id === 'kaushan-script')!,
    body: weddingFonts.find(f => f.id === 'lato')!,
    accent: weddingFonts.find(f => f.id === 'satisfy')!
  }
];

export const fontWeights: FontWeight[] = [
  { name: 'Thin', value: '100', cssClass: 'font-thin' },
  { name: 'Extra Light', value: '200', cssClass: 'font-extralight' },
  { name: 'Light', value: '300', cssClass: 'font-light' },
  { name: 'Normal', value: '400', cssClass: 'font-normal' },
  { name: 'Medium', value: '500', cssClass: 'font-medium' },
  { name: 'Semi Bold', value: '600', cssClass: 'font-semibold' },
  { name: 'Bold', value: '700', cssClass: 'font-bold' },
  { name: 'Extra Bold', value: '800', cssClass: 'font-extrabold' },
  { name: 'Black', value: '900', cssClass: 'font-black' }
];

export const fontSizes: FontSize[] = [
  // Headings
  { name: 'Display Large', value: '6rem', cssClass: 'text-8xl', category: 'heading' },
  { name: 'Display Medium', value: '4.5rem', cssClass: 'text-7xl', category: 'heading' },
  { name: 'Display Small', value: '3.75rem', cssClass: 'text-6xl', category: 'heading' },
  { name: 'Heading 1', value: '3rem', cssClass: 'text-5xl', category: 'heading' },
  { name: 'Heading 2', value: '2.25rem', cssClass: 'text-4xl', category: 'heading' },
  { name: 'Heading 3', value: '1.875rem', cssClass: 'text-3xl', category: 'heading' },
  { name: 'Heading 4', value: '1.5rem', cssClass: 'text-2xl', category: 'heading' },
  { name: 'Heading 5', value: '1.25rem', cssClass: 'text-xl', category: 'heading' },
  { name: 'Heading 6', value: '1.125rem', cssClass: 'text-lg', category: 'heading' },
  
  // Body Text
  { name: 'Body Large', value: '1.125rem', cssClass: 'text-lg', category: 'body' },
  { name: 'Body Medium', value: '1rem', cssClass: 'text-base', category: 'body' },
  { name: 'Body Small', value: '0.875rem', cssClass: 'text-sm', category: 'body' },
  
  // Captions
  { name: 'Caption Large', value: '0.875rem', cssClass: 'text-sm', category: 'caption' },
  { name: 'Caption Medium', value: '0.75rem', cssClass: 'text-xs', category: 'caption' },
  { name: 'Caption Small', value: '0.625rem', cssClass: 'text-xs', category: 'caption' }
];