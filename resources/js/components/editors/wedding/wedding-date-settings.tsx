import React from 'react';
import { useNode } from '@craftjs/core';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

const WeddingDateSettings: React.FC = () => {
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

  const dateFormats = [
    { value: 'full', label: 'Full (25 December 2024)' },
    { value: 'short', label: 'Short (25 Dec 2024)' },
    { value: 'numeric', label: 'Numeric (25/12/2024)' },
    { value: 'custom', label: 'Custom Format' }
  ];

  const layouts = [
    { value: 'stacked', label: 'Stacked (Date above Time)' },
    { value: 'inline', label: 'Inline (Date • Time)' },
    { value: 'separated', label: 'Separated (with divider)' }
  ];

  return (
    <div className="space-y-4">
      {/* Date & Time Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Date & Time</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="date">Wedding Date</Label>
            <Input
              id="date"
              type="date"
              value={props.date}
              onChange={(e) => setProp((props: any) => props.date = e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-time"
              checked={props.showTime}
              onCheckedChange={(checked) => setProp((props: any) => props.showTime = checked)}
            />
            <Label htmlFor="show-time">Show Time</Label>
          </div>

          {props.showTime && (
            <div>
              <Label htmlFor="time">Wedding Time</Label>
              <Input
                id="time"
                type="time"
                value={props.time}
                onChange={(e) => setProp((props: any) => props.time = e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Format Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Format</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="date-format">Date Format</Label>
            <Select
              value={props.dateFormat}
              onValueChange={(value) => setProp((props: any) => props.dateFormat = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dateFormats.map((format) => (
                  <SelectItem key={format.value} value={format.value}>
                    {format.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {props.dateFormat === 'custom' && (
            <div>
              <Label htmlFor="custom-format">Custom Format</Label>
              <Input
                id="custom-format"
                value={props.customFormat}
                onChange={(e) => setProp((props: any) => props.customFormat = e.target.value)}
                placeholder="DD MMMM YYYY"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use: DD (day), MM (month), YYYY (year), MMMM (month name), MMM (short month)
              </p>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-day-of-week"
              checked={props.showDayOfWeek}
              onCheckedChange={(checked) => setProp((props: any) => props.showDayOfWeek = checked)}
            />
            <Label htmlFor="show-day-of-week">Show Day of Week</Label>
          </div>

          <div>
            <Label htmlFor="layout">Layout</Label>
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

          <div>
            <Label htmlFor="separator">Separator</Label>
            <Input
              id="separator"
              value={props.separator}
              onChange={(e) => setProp((props: any) => props.separator = e.target.value)}
              placeholder="•"
            />
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
    </div>
  );
};

export default WeddingDateSettings;