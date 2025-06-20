import React from 'react';
import { useEditor, Element } from "@craftjs/core";
import { Text } from "./text";
import { Container } from "./container";
import { ButtonComponent } from "./button";
import { Card } from "./card";
import { ImageComponent } from "./image";
import { Button } from '../ui/button';

export const Toolbox: React.FC = () => {
  const { connectors } = useEditor();
  
  const toolboxItems = [
    {
      name: 'Teks',
      icon: '📝',
      component: <Element is={Text} text="Teks Default" fontSize={16} />
    },
    {
      name: 'Button',
      icon: '🔘',
      component: <Element is={ButtonComponent} text="Klik Saya" size="medium" variant="primary" color="#ffffff" backgroundColor="#3b82f6" borderRadius={4} padding={8} />
    },
    {
      name: 'Container',
      icon: '📦',
      component: <Element canvas is={Container} padding={20} background="#ffffff" />
    },
    {
      name: 'Card',
      icon: '🃏',
      component: <Element is={Card} background="#ffffff" padding={20} borderRadius={8} shadow={true} border="1px solid #e5e7eb" />
    },
    {
      name: 'Image',
      icon: '🖼️',
      component: <Element is={ImageComponent} src="https://via.placeholder.com/300x200?text=Gambar" width={300} height={200} />
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Komponen</h2>
      <div className="space-y-2">
        {toolboxItems.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start h-auto p-3 cursor-move hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            ref={(ref) => {
              if (ref) {
                connectors.create(ref, item.component);
              }
            }}
          >
            <span className="mr-2 text-lg">{item.icon}</span>
            <div className="text-left">
              <div className="font-medium text-gray-700 dark:text-gray-200">{item.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Seret untuk menambahkan
              </div>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">Tips:</h3>
        <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <li>• Seret komponen ke canvas</li>
          <li>• Klik untuk mengedit properti</li>
          <li>• Gunakan container untuk layout</li>
        </ul>
      </div>
    </div>
  );
};
