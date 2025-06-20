import React from 'react';
import { useNode, Element } from '@craftjs/core';
import { ButtonComponent } from './button';
import { Container } from './container';
import { Text } from './text';
import { CraftComponent } from '@/types/craft';

type CardProps = {
  background: string;
  padding: number;
  borderRadius: number;
  shadow: boolean;
  border: string;
};

export const Card: React.FC<CardProps> = ({
  background,
  padding,
  borderRadius,
  shadow,
  border
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  return (
    <div
      ref={(ref: HTMLDivElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{
        background,
        padding: `${padding}px`,
        borderRadius: `${borderRadius}px`,
        border: isSelected ? '2px solid #2563eb' : border,
        boxShadow: shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      <Element
        id="card-header"
        is={Container}
        canvas
        background="transparent"
        padding={0}
        margin={0}
        borderRadius={0}
        border="none"
        minHeight={60}
      >
        <Text
          text="Judul Card"
          fontSize={20}
          fontWeight="bold"
          color="#1f2937" 
          />
        <Text
          text="Subtitle atau deskripsi singkat"
          fontSize={14}
          color="#6b7280"
        />
      </Element>

      {/* Content Section */}
      <Element
        id="card-content"
        is={Container}
        canvas
        background="transparent"
        padding={0}
        margin={0}
        borderRadius={0}
        border="none"
        minHeight={100}
      >
        <Text
          text="Konten utama card. Anda dapat menambahkan teks, gambar, atau komponen lainnya di sini."
          fontSize={14}
          color="#374151"
        />
      </Element>

      {/* Actions Section */}
      <Element
        id="card-footer"
        is={Container}
        canvas
        background="transparent"
        padding={0}
        margin={0}
        borderRadius={0}
        border="none"
        minHeight={50}
      >
        <Element id="card_cancel_button" is={ButtonComponent} text="Batal" size="small" variant="outline" color="#6b7280" backgroundColor="transparent" borderRadius={4} padding={8} />
        <Element id="card_save_button" is={ButtonComponent} text="Simpan" size="small" variant="primary" color="#ffffff" backgroundColor="#3b82f6" borderRadius={4} padding={8} />
      </Element>
    </div>
  );
};

import CardSettings from './card-settings';
(Card as CraftComponent<CardProps>).craft = {
  displayName: 'Card',
  props: {
    background: '#ffffff',
    padding: 20,
    borderRadius: 8,
    shadow: true,
    border: '1px solid #e5e7eb'
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
  },
  related: {
    settings: CardSettings,
  }
};