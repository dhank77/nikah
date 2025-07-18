import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Crown, Eye, Sparkles } from 'lucide-react';
import { weddingTemplates, templateCategories } from '@/data/wedding-templates';
import { simpleTemplates } from '@/data/simple-templates';
import { WeddingTemplate } from '@/types/template';

interface TemplateSelectorProps {
  onSelectTemplate: (template: WeddingTemplate) => void;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateCard: React.FC<{
  template: WeddingTemplate;
  onSelect: (template: WeddingTemplate) => void;
  onPreview: (template: WeddingTemplate) => void;
}> = ({ template, onSelect, onPreview }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
      <CardHeader className="p-4">
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 relative overflow-hidden">
          {/* Template Preview Placeholder */}
          <div 
            className="w-full h-full flex items-center justify-center text-6xl"
            style={{ 
              background: `linear-gradient(135deg, ${template.colors.background} 0%, ${template.colors.primary}20 100%)`,
              color: template.colors.primary
            }}
          >
            {templateCategories.find(cat => cat.id === template.category)?.icon}
          </div>
          
          {/* Premium Badge */}
          {template.isPremium && (
            <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
          
          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                onPreview(template);
              }}
            >
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(template);
              }}
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Use Template
            </Button>
          </div>
        </div>
        
        <CardTitle className="text-lg font-semibold">{template.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {template.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-1 mb-3">
          {template.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex gap-1">
            {Object.entries(template.colors).slice(0, 3).map(([key, color]) => (
              <div
                key={key}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={`${key}: ${color}`}
              />
            ))}
          </div>
          <span>•</span>
          <span>{template.fonts.heading}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const TemplatePreview: React.FC<{
  template: WeddingTemplate;
  onUse: (template: WeddingTemplate) => void;
}> = ({ template, onUse }) => {
  return (
    <div className="space-y-6">
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
        <div 
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
          style={{ 
            background: `linear-gradient(135deg, ${template.colors.background} 0%, ${template.colors.primary}10 100%)`,
            color: template.colors.text
          }}
        >
          <div className="text-4xl mb-4" style={{ color: template.colors.primary }}>
            {templateCategories.find(cat => cat.id === template.category)?.icon}
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: template.colors.primary }}>
            Bride & Groom
          </h2>
          <p className="text-lg mb-4" style={{ color: template.colors.secondary }}>
            June 15, 2024
          </p>
          <p className="text-base" style={{ color: template.colors.text }}>
            Grand Ballroom
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Color Palette</h3>
          <div className="flex gap-2">
            {Object.entries(template.colors).map(([key, color]) => (
              <div key={key} className="text-center">
                <div
                  className="w-12 h-12 rounded-lg border border-gray-300 mb-1"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-gray-600 capitalize">{key}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Typography</h3>
          <div className="space-y-1 text-sm">
            <div><strong>Heading:</strong> {template.fonts.heading}</div>
            <div><strong>Body:</strong> {template.fonts.body}</div>
            <div><strong>Accent:</strong> {template.fonts.accent}</div>
          </div>
        </div>
        
        <Button 
          onClick={() => onUse(template)} 
          className="w-full"
          size="lg"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Use This Template
        </Button>
      </div>
    </div>
  );
};

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  onSelectTemplate,
  isOpen,
  onClose
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewTemplate, setPreviewTemplate] = useState<WeddingTemplate | null>(null);

  // Use simple templates for testing, then switch back to full templates
  const allTemplates = [...simpleTemplates, ...weddingTemplates];
  const filteredTemplates = selectedCategory === 'all'
    ? allTemplates
    : allTemplates.filter(template => template.category === selectedCategory);

  const handleSelectTemplate = (template: WeddingTemplate) => {
    onSelectTemplate(template);
    onClose();
  };

  const handlePreview = (template: WeddingTemplate) => {
    setPreviewTemplate(template);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Choose a Wedding Template</DialogTitle>
            <DialogDescription>
              Select a beautiful template to start creating your wedding invitation
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-hidden">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="h-full">
              <TabsList className="grid w-full grid-cols-6 mb-6">
                <TabsTrigger value="all">All Templates</TabsTrigger>
                {templateCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="h-[60vh] overflow-y-auto">
                <TabsContent value={selectedCategory} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTemplates.map((template) => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                        onSelect={handleSelectTemplate}
                        onPreview={handlePreview}
                      />
                    ))}
                  </div>
                  
                  {filteredTemplates.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No templates found in this category</p>
                    </div>
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {/* Template Preview Dialog */}
      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{previewTemplate?.name}</DialogTitle>
            <DialogDescription>{previewTemplate?.description}</DialogDescription>
          </DialogHeader>
          
          {previewTemplate && (
            <TemplatePreview
              template={previewTemplate}
              onUse={handleSelectTemplate}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};