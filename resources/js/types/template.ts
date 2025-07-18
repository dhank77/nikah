export interface WeddingTemplate {
  id: string;
  name: string;
  description: string;
  category: 'classic' | 'modern' | 'elegant' | 'rustic' | 'minimalist';
  thumbnail: string;
  components: Record<string, unknown>; // CraftJS serialized components
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  fonts: {
    heading: string;
    body: string;
    accent: string;
  };
  tags: string[];
  isPremium: boolean;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}