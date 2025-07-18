import React from 'react';
import { useNode } from '@craftjs/core';
import { CraftComponent } from '@/types/craft';

interface WeddingDateProps {
  date: string;
  time: string;
  showTime: boolean;
  dateFormat: 'full' | 'short' | 'numeric' | 'custom';
  customFormat: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign: 'left' | 'center' | 'right';
  fontWeight: 'normal' | 'bold' | '300' | '400' | '500' | '600' | '700';
  letterSpacing: number;
  lineHeight: number;
  showDayOfWeek: boolean;
  separator: string;
  layout: 'stacked' | 'inline' | 'separated';
}

export const WeddingDate: React.FC<WeddingDateProps> = ({
  date,
  time,
  showTime,
  dateFormat,
  customFormat,
  fontSize,
  fontFamily,
  color,
  textAlign,
  fontWeight,
  letterSpacing,
  lineHeight,
  showDayOfWeek,
  separator,
  layout
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Select Date';
    
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) return 'Invalid Date';

    const options: Intl.DateTimeFormatOptions = {};
    
    switch (dateFormat) {
      case 'full':
        options.weekday = showDayOfWeek ? 'long' : undefined;
        options.year = 'numeric';
        options.month = 'long';
        options.day = 'numeric';
        break;
      case 'short':
        options.weekday = showDayOfWeek ? 'short' : undefined;
        options.year = 'numeric';
        options.month = 'short';
        options.day = 'numeric';
        break;
      case 'numeric':
        return showDayOfWeek 
          ? `${dateObj.toLocaleDateString('id-ID', { weekday: 'long' })}, ${dateObj.toLocaleDateString('id-ID')}`
          : dateObj.toLocaleDateString('id-ID');
      case 'custom':
        // Simple custom format implementation
        return customFormat
          .replace('DD', dateObj.getDate().toString().padStart(2, '0'))
          .replace('MM', (dateObj.getMonth() + 1).toString().padStart(2, '0'))
          .replace('YYYY', dateObj.getFullYear().toString())
          .replace('MMMM', dateObj.toLocaleDateString('id-ID', { month: 'long' }))
          .replace('MMM', dateObj.toLocaleDateString('id-ID', { month: 'short' }));
      default:
        return dateObj.toLocaleDateString('id-ID', options);
    }

    return dateObj.toLocaleDateString('id-ID', options);
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    return timeString;
  };

  const renderContent = () => {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);

    const baseStyle = {
      fontSize: `${fontSize}px`,
      fontFamily,
      color,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
      lineHeight,
    };

    switch (layout) {
      case 'inline':
        return (
          <div style={baseStyle}>
            {formattedDate}
            {showTime && formattedTime && (
              <span> {separator} {formattedTime}</span>
            )}
          </div>
        );
      
      case 'separated':
        return (
          <div style={baseStyle}>
            <div className="mb-2">{formattedDate}</div>
            {showTime && formattedTime && (
              <>
                <div className="flex items-center justify-center my-2">
                  <div className="flex-1 h-px bg-current opacity-30"></div>
                  <span className="px-4 text-sm opacity-60">{separator}</span>
                  <div className="flex-1 h-px bg-current opacity-30"></div>
                </div>
                <div>{formattedTime}</div>
              </>
            )}
          </div>
        );
      
      default: // stacked
        return (
          <div style={baseStyle}>
            <div className="mb-1">{formattedDate}</div>
            {showTime && formattedTime && (
              <div style={{ fontSize: `${fontSize * 0.8}px`, opacity: 0.8 }}>
                {formattedTime}
              </div>
            )}
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
      {renderContent()}

      {isSelected && (
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Wedding Date
        </div>
      )}
    </div>
  );
};

const WeddingDateSettings = React.lazy(() => import('./wedding-date-settings'));
(WeddingDate as CraftComponent<WeddingDateProps>).craft = {
  displayName: 'Wedding Date',
  props: {
    date: '2024-12-25',
    time: '14:00',
    showTime: true,
    dateFormat: 'full',
    customFormat: 'DD MMMM YYYY',
    fontSize: 24,
    fontFamily: 'serif',
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 1.3,
    showDayOfWeek: true,
    separator: '•',
    layout: 'stacked'
  },
  related: {
    settings: WeddingDateSettings
  }
};