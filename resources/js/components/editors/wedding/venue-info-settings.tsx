import React from 'react';
import { useNode } from '@craftjs/core';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

const VenueInfoSettings: React.FC = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({
    props: node.data.props
  }));

  const fontFamilies = [
    { value: 'serif', label: 'Serif (Times)' },
    { value: 'sans-serif', label: 'Sans Serif (Arial)' },
    { value: 'cursive', label: 'Cursive (Script)' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'monospace', label: 'Monospace' },
    { value: '"Great Vibes", cursive', label: 'Great Vibes' },
    { value: '"Dancing Script", cursive', label: 'Dancing Script' },
    { value: '"Playfair Display", serif', label: 'Playfair Display' },
    { value: '"Montserrat", sans-serif', label: 'Montserrat' }
  ];

  const iconTypes = [
    { value: 'none', label: 'No Icon' },
    { value: 'map', label: 'Map Pin' },
    { value: 'clock', label: 'Clock' },
    { value: 'phone', label: 'Phone' },
    { value: 'globe', label: 'Globe' }
  ];

  const layouts = [
    { value: 'stacked', label: 'Stacked (Vertical)' },
    { value: 'inline', label: 'Inline (Horizontal)' },
    { value: 'card', label: 'Card Style' }
  ];

  return (
    <div className="space-y-4">
      {/* Venue Information Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Venue Information</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="venue-name">Venue Name</Label>
            <Input
              id="venue-name"
              value={props.venueName}
              onChange={(e) => setProp((props: any) => props.venueName = e.target.value)}
              placeholder="Enter venue name"
            />
          </div>
          
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={props.address}
              onChange={(e) => setProp((props: any) => props.address = e.target.value)}
              placeholder="Enter street address"
            />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={props.city}
              onChange={(e) => setProp((props: any) => props.city = e.target.value)}
              placeholder="Enter city"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={props.phone}
              onChange={(e) => setProp((props: any) => props.phone = e.target.value)}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={props.website}
              onChange={(e) => setProp((props: any) => props.website = e.target.value)}
              placeholder="https://venue.com"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Display Options Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Display Options</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="layout">Layout Style</Label>
            <Select
              value={props.layout}
              onValueChange={(value) => setProp((props: any) => props.layout = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {layouts.map((layout) => (
                  <SelectItem key={layout.value} value={layout.value}>
                    {layout.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-icon"
              checked={props.showIcon}
              onCheckedChange={(checked) => setProp((props: any) => props.showIcon = checked)}
            />
            <Label htmlFor="show-icon">Show Icon</Label>
          </div>

          {props.showIcon && (
            <div>
              <Label htmlFor="icon-type">Icon Type</Label>
              <Select
                value={props.iconType}
                onValueChange={(value) => setProp((props: any) => props.iconType = value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {iconTypes.map((icon) => (
                    <SelectItem key={icon.value} value={icon.value}>
                      {icon.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-google-maps"
              checked={props.showGoogleMapsLink}
              onCheckedChange={(checked) => setProp((props: any) => props.showGoogleMapsLink = checked)}
            />
            <Label htmlFor="show-google-maps">Show Google Maps Link</Label>
          </div>
        </div>
      </div>

      <Separator />

      {/* Typography Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Typography</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="font-family">Font Family</Label>
            <Select
              value={props.fontFamily}
              onValueChange={(value) => setProp((props: any) => props.fontFamily = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="font-size">Font Size</Label>
            <Input
              id="font-size"
              type="number"
              value={props.fontSize}
              onChange={(e) => setProp((props: any) => props.fontSize = parseInt(e.target.value))}
              min="12"
              max="120"
            />
          </div>

          <div>
            <Label htmlFor="font-weight">Font Weight</Label>
            <Select
              value={props.fontWeight}
              onValueChange={(value) => setProp((props: any) => props.fontWeight = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="300">Light (300)</SelectItem>
                <SelectItem value="400">Normal (400)</SelectItem>
                <SelectItem value="500">Medium (500)</SelectItem>
                <SelectItem value="600">Semi Bold (600)</SelectItem>
                <SelectItem value="700">Bold (700)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="color">Text Color</Label>
            <Input
              id="color"
              type="color"
              value={props.color}
              onChange={(e) => setProp((props: any) => props.color = e.target.value)}
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Layout Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Layout</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="text-align">Text Alignment</Label>
            <Select
              value={props.textAlign}
              onValueChange={(value) => setProp((props: any) => props.textAlign = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="letter-spacing">Letter Spacing</Label>
            <Input
              id="letter-spacing"
              type="number"
              value={props.letterSpacing}
              onChange={(e) => setProp((props: any) => props.letterSpacing = parseFloat(e.target.value))}
              min="-2"
              max="10"
              step="0.1"
            />
          </div>

          <div>
            <Label htmlFor="line-height">Line Height</Label>
            <Input
              id="line-height"
              type="number"
              value={props.lineHeight}
              onChange={(e) => setProp((props: any) => props.lineHeight = parseFloat(e.target.value))}
              min="0.8"
              max="3"
              step="0.1"
            />
          </div>
        </div>
      </div>

      {/* Card Style Options */}
      {props.layout === 'card' && (
        <>
          <Separator />
          <div>
            <h4 className="text-sm font-medium mb-3">Card Style</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="background-color">Background Color</Label>
                <Input
                  id="background-color"
                  type="color"
                  value={props.backgroundColor}
                  onChange={(e) => setProp((props: any) => props.backgroundColor = e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="border-radius">Border Radius</Label>
                <Input
                  id="border-radius"
                  type="number"
                  value={props.borderRadius}
                  onChange={(e) => setProp((props: any) => props.borderRadius = parseInt(e.target.value))}
                  min="0"
                  max="50"
                />
              </div>

              <div>
                <Label htmlFor="padding">Padding</Label>
                <Input
                  id="padding"
                  type="number"
                  value={props.padding}
                  onChange={(e) => setProp((props: any) => props.padding = parseInt(e.target.value))}
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VenueInfoSettings;