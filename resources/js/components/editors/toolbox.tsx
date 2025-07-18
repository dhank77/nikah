import React from 'react';
import { useEditor, Element } from "@craftjs/core";
import { Text } from "./text";
import { ButtonComponent } from "./button";
import { Card } from "./card";
import { ImageComponent } from "./image";
import { Button } from '../ui/button';
import { Container } from './container';
import { CoupleNames } from './wedding/couple-names';
import { WeddingDate } from './wedding/wedding-date';
import { VenueInfo } from './wedding/venue-info';
import { DecorativeElement } from './wedding/decorative-element';

export const Toolbox: React.FC = () => {
  const { connectors } = useEditor();
  
  const basicItems = [
    {
      name: 'Teks',
      icon: '📝',
      component: <Element id="text_element" is={Text} text="Teks Default" fontSize={16} color={''} />
    },
    {
      name: 'Button',
      icon: '🔘',
      component: <Element id="button_element" is={ButtonComponent} text="Klik Saya" size="medium" variant="primary" color="#ffffff" backgroundColor="#3b82f6" borderRadius={4} padding={8} />
    },
    {
      name: 'Container',
      icon: '📦',
      component: <Element id="container_element" canvas is={Container} padding={20} background="#ffffff" />
    },
    {
      name: 'Card',
      icon: '🃏',
      component: <Element id="card_element" is={Card} background="#ffffff" padding={20} borderRadius={8} shadow={true} border="1px solid #e5e7eb" />
    },
    {
      name: 'Image',
      icon: '🖼️',
      component: <Element id="image_element" is={ImageComponent} src="https://placehold.co/300x200?text=Gambar" width={300} height={200} />
    }
  ];

  const weddingItems = [
    {
      name: 'Nama Pasangan',
      icon: '💕',
      component: <Element id="couple_names_element" is={CoupleNames} brideName="Sarah" groomName="Ahmad" fontSize={32} fontFamily="serif" color="#2c3e50" textAlign="center" fontWeight="400" letterSpacing={2} lineHeight={1.2} separator="&" separatorStyle="symbol" textTransform="none" />
    },
    {
      name: 'Tanggal Pernikahan',
      icon: '📅',
      component: <Element id="wedding_date_element" is={WeddingDate} date="2024-12-25" time="14:00" showTime={true} dateFormat="full" customFormat="DD MMMM YYYY" fontSize={24} fontFamily="serif" color="#2c3e50" textAlign="center" fontWeight="400" letterSpacing={1} lineHeight={1.3} showDayOfWeek={true} separator="•" layout="stacked" />
    },
    {
      name: 'Info Venue',
      icon: '🏛️',
      component: <Element id="venue_info_element" is={VenueInfo} venueName="Gedung Serbaguna" address="Jl. Merdeka No. 123" city="Jakarta Pusat" phone="+62 21 1234567" website="https://venue.com" showIcon={true} iconType="map" fontSize={16} fontFamily="sans-serif" color="#2c3e50" textAlign="center" fontWeight="400" letterSpacing={0.5} lineHeight={1.4} layout="stacked" showGoogleMapsLink={true} backgroundColor="#f8f9fa" borderRadius={8} padding={16} />
    },
    {
      name: 'Elemen Dekoratif',
      icon: '✨',
      component: <Element id="decorative_element" is={DecorativeElement} elementType="hearts" size={24} color="#d4af37" alignment="center" spacing={16} opacity={80} animation="none" />
    }
  ];

  const renderToolboxSection = (title: string, items: typeof basicItems) => (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <Button
            key={`${title}-${index}`}
            variant="outline"
            className="w-full justify-start h-auto p-3 cursor-move hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            ref={(ref: HTMLButtonElement | null) => {
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
    </div>
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Komponen</h2>
      
      {renderToolboxSection("Komponen Pernikahan", weddingItems)}
      {renderToolboxSection("Komponen Dasar", basicItems)}
      
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">Tips:</h3>
        <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <li>• Seret komponen ke canvas</li>
          <li>• Klik untuk mengedit properti</li>
          <li>• Gunakan container untuk layout</li>
          <li>• Komponen pernikahan sudah dioptimalkan untuk undangan</li>
        </ul>
      </div>
    </div>
  );
};
