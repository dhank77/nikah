import React from 'react';
import { useNode } from '@craftjs/core';

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
  src = 'https://via.placeholder.com/300x200?text=Gambar',
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
      ref={(ref) => ref && connect(drag(ref))}
      className={`relative inline-block ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
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
          target.src = 'https://via.placeholder.com/300x200?text=Gambar+Tidak+Ditemukan';
        }}
      />
      {isSelected && (
        <div className="absolute inset-0 bg-blue-500 bg-opacity-10 pointer-events-none" />
      )}
    </div>
  );
};

(ImageComponent as any).craft = {
  displayName: 'Image',
  props: {
    src: 'https://via.placeholder.com/300x200?text=Gambar',
    alt: 'Gambar',
    width: 300,
    height: 200,
    borderRadius: 0,
    objectFit: 'cover',
    border: 'none',
    shadow: false
  },
  related: {
    settings: () => import('./image-settings').then(module => module.ImageSettings)
  }
};