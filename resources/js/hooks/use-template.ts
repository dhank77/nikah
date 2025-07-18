import { useState, useCallback } from 'react';
import { useEditor } from '@craftjs/core';
import { WeddingTemplate } from '@/types/template';

export const useTemplate = () => {
  const { actions, query } = useEditor();
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const applyTemplate = useCallback((template: WeddingTemplate) => {
    try {
      // Clear current canvas
      actions.clearEvents();
      
      // Apply template components to canvas
      const serializedNodes = JSON.stringify(template.components);
      actions.deserialize(serializedNodes);
      
      // Apply template colors and fonts to document
      applyTemplateStyles(template);
      
      console.log('Template applied successfully:', template.name);
    } catch (error) {
      console.error('Error applying template:', error);
    }
  }, [actions]);

  const applyTemplateStyles = (template: WeddingTemplate) => {
    // Apply CSS custom properties for template colors
    const root = document.documentElement;
    root.style.setProperty('--template-primary', template.colors.primary);
    root.style.setProperty('--template-secondary', template.colors.secondary);
    root.style.setProperty('--template-accent', template.colors.accent);
    root.style.setProperty('--template-text', template.colors.text);
    root.style.setProperty('--template-background', template.colors.background);
    
    // Apply font families
    root.style.setProperty('--template-font-heading', template.fonts.heading);
    root.style.setProperty('--template-font-body', template.fonts.body);
    root.style.setProperty('--template-font-accent', template.fonts.accent);
  };

  const exportTemplate = useCallback(() => {
    const serializedNodes = query.serialize();
    return {
      components: JSON.parse(serializedNodes),
      timestamp: new Date().toISOString()
    };
  }, [query]);

  const openTemplateModal = () => setIsTemplateModalOpen(true);
  const closeTemplateModal = () => setIsTemplateModalOpen(false);

  return {
    applyTemplate,
    exportTemplate,
    isTemplateModalOpen,
    openTemplateModal,
    closeTemplateModal
  };
};