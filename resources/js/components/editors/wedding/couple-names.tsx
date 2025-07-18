import React from 'react';
import { useNode } from '@craftjs/core';
import { CraftComponent } from '@/types/craft';

interface CoupleNamesProps {
  brideName: string;
  groomName: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign: 'left' | 'center' | 'right';
  fontWeight: 'normal' | 'bold' | '300' | '400' | '500' | '600' | '700';
  letterSpacing: number;
  lineHeight: number;
  separator: string;
  separatorStyle: 'text' | 'symbol' | 'line';
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

export const CoupleNames: React.FC<CoupleNamesProps> = ({
  brideName,
  groomName,
  fontSize,
  fontFamily,
  color,
  textAlign,
  fontWeight,
  letterSpacing,
  lineHeight,
  separator,
  separatorStyle,
  textTransform
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  const renderSeparator = () => {
    switch (separatorStyle) {
      case 'symbol':
        return (
          <div className="flex items-center justify-center my-2">
            <span style={{ fontSize: fontSize * 0.8, color }}>{separator}</span>
          </div>
        );
      case 'line':
        return (
          <div className="flex items-center justify-center my-4">
            <div className="flex-1 h-px bg-current opacity-30" style={{ color }}></div>
            <span className="px-4 text-sm" style={{ color }}>{separator}</span>
            <div className="flex-1 h-px bg-current opacity-30" style={{ color }}></div>
          </div>
        );
      default:
        return (
          <div className="text-center my-2">
            <span style={{ fontSize: fontSize * 0.7, color, fontFamily }}>{separator}</span>
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
        textAlign,
        padding: '16px',
        border: isSelected ? '2px solid #2563eb' : '2px solid transparent',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {/* Groom Name */}
      <div
        style={{
          fontSize: `${fontSize}px`,
          fontFamily,
          color,
          fontWeight,
          letterSpacing: `${letterSpacing}px`,
          lineHeight,
          textTransform,
          marginBottom: '8px'
        }}
      >
        {groomName}
      </div>

      {/* Separator */}
      {renderSeparator()}

      {/* Bride Name */}
      <div
        style={{
          fontSize: `${fontSize}px`,
          fontFamily,
          color,
          fontWeight,
          letterSpacing: `${letterSpacing}px`,
          lineHeight,
          textTransform,
          marginTop: '8px'
        }}
      >
        {brideName}
      </div>

      {isSelected && (
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Couple Names
        </div>
      )}
    </div>
  );
};

const CoupleNamesSettings = React.lazy(() => import('./couple-names-settings'));
(CoupleNames as CraftComponent<CoupleNamesProps>).craft = {
  displayName: 'Couple Names',
  props: {
    brideName: 'Sarah',
    groomName: 'Ahmad',
    fontSize: 32,
    fontFamily: 'serif',
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 2,
    lineHeight: 1.2,
    separator: '&',
    separatorStyle: 'symbol',
    textTransform: 'none'
  },
  related: {
    settings: CoupleNamesSettings
  }
};