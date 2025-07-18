import React from 'react';
import { useNode } from '@craftjs/core';
import { CraftComponent } from '@/types/craft';

interface DecorativeElementProps {
  elementType: 'hearts' | 'rings' | 'flowers' | 'divider' | 'ornament' | 'border';
  size: number;
  color: string;
  alignment: 'left' | 'center' | 'right';
  spacing: number;
  opacity: number;
  animation: 'none' | 'pulse' | 'bounce' | 'fade';
}

export const DecorativeElement: React.FC<DecorativeElementProps> = ({
  elementType,
  size,
  color,
  alignment,
  spacing,
  opacity,
  animation
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  const getElement = () => {
    const baseStyle = {
      fontSize: `${size}px`,
      color,
      opacity: opacity / 100,
      margin: `${spacing}px 0`,
    };

    const animationClass = animation !== 'none' ? `animate-${animation}` : '';

    switch (elementType) {
      case 'hearts':
        return (
          <div className={`${animationClass}`} style={baseStyle}>
            💕 ❤️ 💖 ❤️ 💕
          </div>
        );
      
      case 'rings':
        return (
          <div className={`${animationClass}`} style={baseStyle}>
            💍 ✨ 💍
          </div>
        );
      
      case 'flowers':
        return (
          <div className={`${animationClass}`} style={baseStyle}>
            🌸 🌺 🌸 🌺 🌸
          </div>
        );
      
      case 'divider':
        return (
          <div className={`flex items-center ${animationClass}`} style={{ margin: `${spacing}px 0` }}>
            <div className="flex-1 h-px bg-current" style={{ color, opacity: opacity / 100 }}></div>
            <div className="px-4" style={{ fontSize: `${size}px`, color, opacity: opacity / 100 }}>
              ❦
            </div>
            <div className="flex-1 h-px bg-current" style={{ color, opacity: opacity / 100 }}></div>
          </div>
        );
      
      case 'ornament':
        return (
          <div className={`${animationClass}`} style={baseStyle}>
            ❦ ✦ ❦ ✦ ❦
          </div>
        );
      
      case 'border':
        return (
          <div className={`${animationClass}`} style={{ margin: `${spacing}px 0` }}>
            <div 
              className="border-t-2 border-b-2 py-2"
              style={{ 
                borderColor: color, 
                opacity: opacity / 100,
                borderStyle: 'dashed'
              }}
            >
              <div className="text-center" style={{ fontSize: `${size}px`, color, opacity: opacity / 100 }}>
                ✦ ❦ ✦ ❦ ✦ ❦ ✦
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`${animationClass}`} style={baseStyle}>
            ❦
          </div>
        );
    }
  };

  return (
    <div
      ref={(ref: HTMLDivElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className="relative"
      style={{
        textAlign: alignment,
        padding: '8px',
        border: isSelected ? '2px solid #2563eb' : '2px solid transparent',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {getElement()}

      {isSelected && (
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Decorative Element
        </div>
      )}
    </div>
  );
};

const DecorativeElementSettings = React.lazy(() => import('./decorative-element-settings'));
(DecorativeElement as CraftComponent<DecorativeElementProps>).craft = {
  displayName: 'Decorative Element',
  props: {
    elementType: 'hearts',
    size: 24,
    color: '#d4af37',
    alignment: 'center',
    spacing: 16,
    opacity: 80,
    animation: 'none'
  },
  related: {
    settings: DecorativeElementSettings
  }
};