import React from 'react';
import { useNode } from '@craftjs/core';
import { CraftComponent } from '@/types/craft';
import { MapPin, Clock, Phone, Globe } from 'lucide-react';

interface VenueInfoProps {
  venueName: string;
  address: string;
  city: string;
  phone: string;
  website: string;
  showIcon: boolean;
  iconType: 'map' | 'clock' | 'phone' | 'globe' | 'none';
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign: 'left' | 'center' | 'right';
  fontWeight: 'normal' | 'bold' | '300' | '400' | '500' | '600' | '700';
  letterSpacing: number;
  lineHeight: number;
  layout: 'stacked' | 'inline' | 'card';
  showGoogleMapsLink: boolean;
  backgroundColor: string;
  borderRadius: number;
  padding: number;
}

export const VenueInfo: React.FC<VenueInfoProps> = ({
  venueName,
  address,
  city,
  phone,
  website,
  showIcon,
  iconType,
  fontSize,
  fontFamily,
  color,
  textAlign,
  fontWeight,
  letterSpacing,
  lineHeight,
  layout,
  showGoogleMapsLink,
  backgroundColor,
  borderRadius,
  padding
}) => {
  const {
    connectors: { connect, drag },
    isSelected
  } = useNode((state) => ({
    isSelected: state.events.selected,
  }));

  const getIcon = () => {
    if (!showIcon || iconType === 'none') return null;
    
    const iconProps = {
      size: fontSize * 0.8,
      color: color,
      className: 'inline-block mr-2'
    };

    switch (iconType) {
      case 'map':
        return <MapPin {...iconProps} />;
      case 'clock':
        return <Clock {...iconProps} />;
      case 'phone':
        return <Phone {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  const generateGoogleMapsUrl = () => {
    const query = encodeURIComponent(`${venueName} ${address} ${city}`);
    return `https://maps.google.com/?q=${query}`;
  };

  const baseStyle = {
    fontSize: `${fontSize}px`,
    fontFamily,
    color,
    fontWeight,
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
  };

  const renderContent = () => {
    switch (layout) {
      case 'inline':
        return (
          <div style={{ ...baseStyle, textAlign }}>
            {getIcon()}
            <span>
              {venueName}
              {address && `, ${address}`}
              {city && `, ${city}`}
              {phone && ` • ${phone}`}
            </span>
            {showGoogleMapsLink && (
              <div className="mt-2">
                <a
                  href={generateGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Lihat di Google Maps
                </a>
              </div>
            )}
          </div>
        );

      case 'card':
        return (
          <div
            style={{
              backgroundColor,
              borderRadius: `${borderRadius}px`,
              padding: `${padding}px`,
              textAlign
            }}
          >
            <div style={{ ...baseStyle, fontSize: `${fontSize * 1.1}px`, fontWeight: '600', marginBottom: '8px' }}>
              {getIcon()}
              {venueName}
            </div>
            {address && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.9}px`, marginBottom: '4px', opacity: 0.8 }}>
                {address}
              </div>
            )}
            {city && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.9}px`, marginBottom: '8px', opacity: 0.8 }}>
                {city}
              </div>
            )}
            {phone && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.85}px`, marginBottom: '4px' }}>
                <Phone size={fontSize * 0.6} className="inline-block mr-1" />
                {phone}
              </div>
            )}
            {website && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.85}px`, marginBottom: '8px' }}>
                <Globe size={fontSize * 0.6} className="inline-block mr-1" />
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  {website}
                </a>
              </div>
            )}
            {showGoogleMapsLink && (
              <div className="mt-3">
                <a
                  href={generateGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Lihat di Google Maps
                </a>
              </div>
            )}
          </div>
        );

      default: // stacked
        return (
          <div style={{ textAlign }}>
            <div style={{ ...baseStyle, fontSize: `${fontSize * 1.1}px`, fontWeight: '600', marginBottom: '8px' }}>
              {getIcon()}
              {venueName}
            </div>
            {address && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.9}px`, marginBottom: '4px', opacity: 0.9 }}>
                {address}
              </div>
            )}
            {city && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.9}px`, marginBottom: '8px', opacity: 0.9 }}>
                {city}
              </div>
            )}
            {phone && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.85}px`, marginBottom: '4px' }}>
                {phone}
              </div>
            )}
            {website && (
              <div style={{ ...baseStyle, fontSize: `${fontSize * 0.85}px`, marginBottom: '8px' }}>
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  {website}
                </a>
              </div>
            )}
            {showGoogleMapsLink && (
              <div className="mt-3">
                <a
                  href={generateGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Lihat di Google Maps
                </a>
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
        padding: '16px',
        border: isSelected ? '2px solid #2563eb' : '2px solid transparent',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {renderContent()}

      {isSelected && (
        <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Venue Info
        </div>
      )}
    </div>
  );
};

const VenueInfoSettings = React.lazy(() => import('./venue-info-settings'));
(VenueInfo as CraftComponent<VenueInfoProps>).craft = {
  displayName: 'Venue Info',
  props: {
    venueName: 'Gedung Serbaguna',
    address: 'Jl. Merdeka No. 123',
    city: 'Jakarta Pusat',
    phone: '+62 21 1234567',
    website: 'https://venue.com',
    showIcon: true,
    iconType: 'map',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 1.4,
    layout: 'stacked',
    showGoogleMapsLink: true,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16
  },
  related: {
    settings: VenueInfoSettings
  }
};