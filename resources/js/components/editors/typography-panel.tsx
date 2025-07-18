import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Type, Crown, Palette, Settings } from 'lucide-react';
import { weddingFonts, typographyPresets, fontWeights, fontSizes } from '@/data/wedding-fonts';
import { WeddingFont, TypographyPreset } from '@/types/typography';

interface TypographyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPreset: (preset: TypographyPreset) => void;
  onApplyFont: (font: WeddingFont, target: 'heading' | 'body' | 'accent') => void;
}

const FontCard: React.FC<{
  font: WeddingFont;
  onSelect: (font: WeddingFont) => void;
  onPreview: (font: WeddingFont) => void;
}> = ({ font, onSelect, onPreview }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
      <CardHeader className="p-4">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
          <div 
            className="text-center p-4"
            style={{ 
              fontFamily: font.family + ', ' + font.fallback,
              fontSize: font.category === 'script' ? '1.5rem' : '1.25rem',
              color: '#374151'
            }}
          >
            {font.preview}
          </div>
          
          {font.isPremium && (
            <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
          
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                onPreview(font);
              }}
            >
              Preview
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(font);
              }}
            >
              Use Font
            </Button>
          </div>
        </div>
        
        <CardTitle className="text-lg font-semibold">{font.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {font.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs capitalize">
            {font.category}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {font.style}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const PresetCard: React.FC<{
  preset: TypographyPreset;
  onSelect: (preset: TypographyPreset) => void;
}> = ({ preset, onSelect }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => onSelect(preset)}>
      <CardHeader className="p-4">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
          <div 
            className="text-2xl mb-2"
            style={{ 
              fontFamily: preset.heading.family + ', ' + preset.heading.fallback,
              color: '#374151'
            }}
          >
            {preset.heading.name}
          </div>
          <div 
            className="text-lg mb-1"
            style={{ 
              fontFamily: preset.subheading.family + ', ' + preset.subheading.fallback,
              color: '#6B7280'
            }}
          >
            {preset.subheading.name}
          </div>
          <div 
            className="text-sm"
            style={{ 
              fontFamily: preset.body.family + ', ' + preset.body.fallback,
              color: '#9CA3AF'
            }}
          >
            {preset.body.name}
          </div>
          <div 
            className="text-lg mt-2"
            style={{ 
              fontFamily: preset.accent.family + ', ' + preset.accent.fallback,
              color: '#F59E0B'
            }}
          >
            {preset.accent.name}
          </div>
        </div>
        
        <CardTitle className="text-lg font-semibold">{preset.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {preset.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <Badge variant="outline" className="text-xs capitalize">
          {preset.category}
        </Badge>
      </CardContent>
    </Card>
  );
};

export const TypographyPanel: React.FC<TypographyPanelProps> = ({
  isOpen,
  onClose,
  onApplyPreset,
  onApplyFont
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('presets');
  const [selectedFontCategory, setSelectedFontCategory] = useState<string>('all');
  const [previewFont, setPreviewFont] = useState<WeddingFont | null>(null);
  const [fontTarget, setFontTarget] = useState<'heading' | 'body' | 'accent'>('heading');

  const filteredFonts = selectedFontCategory === 'all' 
    ? weddingFonts 
    : weddingFonts.filter(font => font.category === selectedFontCategory);

  const handleSelectFont = (font: WeddingFont) => {
    onApplyFont(font, fontTarget);
    onClose();
  };

  const handlePreviewFont = (font: WeddingFont) => {
    setPreviewFont(font);
  };

  const handleSelectPreset = (preset: TypographyPreset) => {
    onApplyPreset(preset);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Type className="w-6 h-6" />
              Typography Settings
            </DialogTitle>
            <DialogDescription>
              Choose fonts and typography presets for your wedding invitation
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-hidden">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="h-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="presets">
                  <Palette className="w-4 h-4 mr-2" />
                  Presets
                </TabsTrigger>
                <TabsTrigger value="fonts">
                  <Type className="w-4 h-4 mr-2" />
                  Individual Fonts
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced
                </TabsTrigger>
              </TabsList>
              
              <div className="h-[60vh] overflow-y-auto">
                <TabsContent value="presets" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {typographyPresets.map((preset) => (
                      <PresetCard
                        key={preset.id}
                        preset={preset}
                        onSelect={handleSelectPreset}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="fonts" className="mt-0">
                  <div className="mb-6 flex gap-4">
                    <Select value={fontTarget} onValueChange={(value: 'heading' | 'body' | 'accent') => setFontTarget(value)}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select target" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="heading">Heading Font</SelectItem>
                        <SelectItem value="body">Body Font</SelectItem>
                        <SelectItem value="accent">Accent Font</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedFontCategory} onValueChange={setSelectedFontCategory}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="serif">Serif</SelectItem>
                        <SelectItem value="sans-serif">Sans Serif</SelectItem>
                        <SelectItem value="script">Script</SelectItem>
                        <SelectItem value="display">Display</SelectItem>
                        <SelectItem value="handwriting">Handwriting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFonts.map((font) => (
                      <FontCard
                        key={font.id}
                        font={font}
                        onSelect={handleSelectFont}
                        onPreview={handlePreviewFont}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Font Weights</h3>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        {fontWeights.map((weight) => (
                          <Button
                            key={weight.value}
                            variant="outline"
                            size="sm"
                            className={weight.cssClass}
                          >
                            {weight.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Font Sizes</h3>
                      <div className="space-y-4">
                        {['heading', 'body', 'caption'].map((category) => (
                          <div key={category}>
                            <h4 className="font-medium mb-2 capitalize">{category} Sizes</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {fontSizes
                                .filter(size => size.category === category)
                                .map((size) => (
                                  <Button
                                    key={size.cssClass}
                                    variant="outline"
                                    size="sm"
                                    className={size.cssClass}
                                  >
                                    {size.name}
                                  </Button>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {/* Font Preview Dialog */}
      <Dialog open={!!previewFont} onOpenChange={() => setPreviewFont(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{previewFont?.name}</DialogTitle>
            <DialogDescription>{previewFont?.description}</DialogDescription>
          </DialogHeader>
          
          {previewFont && (
            <div className="space-y-6">
              <div 
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
                style={{ 
                  fontFamily: previewFont.family + ', ' + previewFont.fallback
                }}
              >
                <div className="text-4xl mb-4">Sarah & Michael</div>
                <div className="text-2xl mb-4">Wedding Invitation</div>
                <div className="text-lg mb-4">June 15, 2024</div>
                <div className="text-base">Grand Ballroom, City Center</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="outline" className="mr-2 capitalize">{previewFont.category}</Badge>
                  <Badge variant="outline" className="capitalize">{previewFont.style}</Badge>
                </div>
                <Button onClick={() => handleSelectFont(previewFont)}>
                  Use This Font
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};