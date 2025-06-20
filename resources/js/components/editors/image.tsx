import React from 'react';
import { useNode } from '@craftjs/core';
import { CraftComponent } from '@/types/craft';
import ImageSettings from './image-settings';

interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  border?: string;
  shadow?: boolean;
}

export const ImageComponent: React.FC<ImageProps> = ({
  src = 'https://placehold.co/300x200?text=Gambar',
  alt = 'Gambar',
  width = 300,
  height = 200,
  borderRadius = 0,
  objectFit = 'cover',
  border = 'none',
  shadow = false
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected
  }));

  return (
    <div
      ref={(ref: HTMLDivElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className="relative inline-block"
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        border: border,
        boxShadow: shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          borderRadius: borderRadius,
          display: 'block'
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://placeholde.co/300x200?text=Gambar+Tidak+Ditemukan';
        }}
      />
      {isSelected && (
        <div className="absolute inset-0 border-2 border-blue-500 border-dashed pointer-events-none" />
      )}
    </div>
  );
};

(ImageComponent as CraftComponent<ImageProps>).craft = {
  displayName: 'Image',
  props: {
    src: 'https://placehold.co/300x200?text=Gambar',
    alt: 'Gambar',
    width: 300,
    height: 200,
    borderRadius: 0,
    objectFit: 'cover',
    border: 'none',
    shadow: false
  },
  related: {
    settings: ImageSettings
  }
};