import React from 'react';
import { useNode } from '@craftjs/core';

type ButtonProps = {
  text: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'outline';
  color: string;
  backgroundColor: string;
  borderRadius: number;
  padding: number;
  onClick?: () => void;
};

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  size,
  variant,
  color,
  backgroundColor,
  borderRadius,
  onClick
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: '12px', padding: '6px 12px' };
      case 'large':
        return { fontSize: '18px', padding: '12px 24px' };
      default:
        return { fontSize: '14px', padding: '8px 16px' };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor,
          color,
          border: 'none'
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: backgroundColor,
          border: `2px solid ${backgroundColor}`
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: backgroundColor,
          border: `1px solid ${backgroundColor}`
        };
      default:
        return {
          backgroundColor,
          color,
          border: 'none'
        };
    }
  };

  return (
    <button
      ref={(ref: HTMLButtonElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{
        ...getSizeStyles(),
        ...getVariantStyles(),
        borderRadius: `${borderRadius}px`,
        cursor: 'pointer',
        outline: isSelected ? '2px solid #2563eb' : 'none',
        outlineOffset: '2px',
        transition: 'all 0.2s ease',
        fontWeight: '500',
        display: 'inline-block'
      }}
      onClick={onClick}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.opacity = '0.8';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      {text}
    </button>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(ButtonComponent as any).craft = {
  displayName: 'Button',
  props: {
    text: 'Klik Saya',
    size: 'medium',
    variant: 'primary',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    borderRadius: 6,
    padding: 8
  },
  related: {
    settings: () => import('./button-settings').then(module => module.ButtonSettings)
  }
};