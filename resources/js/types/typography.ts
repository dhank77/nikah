export interface WeddingFont {
  id: string;
  name: string;
  family: string;
  category: 'serif' | 'sans-serif' | 'script' | 'display' | 'handwriting';
  style: 'elegant' | 'romantic' | 'modern' | 'classic' | 'playful';
  googleFont?: string;
  fallback: string;
  preview: string;
  description: string;
  isPremium: boolean;
}

export interface TypographyPreset {
  id: string;
  name: string;
  description: string;
  heading: WeddingFont;
  subheading: WeddingFont;
  body: WeddingFont;
  accent: WeddingFont;
  category: 'classic' | 'modern' | 'romantic' | 'elegant' | 'playful';
}

export interface FontWeight {
  name: string;
  value: string;
  cssClass: string;
}

export interface FontSize {
  name: string;
  value: string;
  cssClass: string;
  category: 'heading' | 'body' | 'caption';
}