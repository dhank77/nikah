import React from "react";
import { useNode } from "@craftjs/core";

type TextProps = {
  text: string;
  fontSize: number;
  color?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
};

export const Text: React.FC<TextProps> = ({ 
  text, 
  fontSize, 
  color = '#000000',
  fontWeight = 'normal',
  textAlign = 'left'
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
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
        fontSize: `${fontSize}px`,
        color,
        fontWeight,
        textAlign,
        padding: '8px',
        border: isSelected ? '2px solid #2563eb' : '2px solid transparent',
        borderRadius: '4px',
        cursor: 'pointer',
        minHeight: '20px',
        outline: 'none'
      }}
      contentEditable={isSelected}
      suppressContentEditableWarning={true}
      onBlur={(e) => {
        setProp((props: TextProps) => {
          props.text = e.currentTarget.textContent || '';
        });
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
    >
      {text}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Text as any).craft = {
  displayName: "Text",
  props: {
    text: "Teks Default",
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal',
    textAlign: 'left'
  },
  related: {
    settings: () => import('./text-settings').then(m => m.TextSettings)
  }
};
