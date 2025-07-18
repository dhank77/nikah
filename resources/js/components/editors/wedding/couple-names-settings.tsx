import React from 'react';
import { useNode } from '@craftjs/core';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const CoupleNamesSettings: React.FC = () => {
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

  const separatorStyles = [
    { value: 'text', label: 'Text' },
    { value: 'symbol', label: 'Symbol' },
    { value: 'line', label: 'Line with Text' }
  ];

  const textTransforms = [
    { value: 'none', label: 'Normal' },
    { value: 'uppercase', label: 'UPPERCASE' },
    { value: 'lowercase', label: 'lowercase' },
    { value: 'capitalize', label: 'Capitalize' }
  ];

  return (
    <div className="space-y-4">
      {/* Names Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Names</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="groom-name">Groom Name</Label>
            <Input
              id="groom-name"
              value={props.groomName}
              onChange={(e) => setProp((props: any) => props.groomName = e.target.value)}
              placeholder="Enter groom name"
            />
          </div>
          <div>
            <Label htmlFor="bride-name">Bride Name</Label>
            <Input
              id="bride-name"
              value={props.brideName}
              onChange={(e) => setProp((props: any) => props.brideName = e.target.value)}
              placeholder="Enter bride name"
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
            <Label htmlFor="text-transform">Text Transform</Label>
            <Select
              value={props.textTransform}
              onValueChange={(value) => setProp((props: any) => props.textTransform = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {textTransforms.map((transform) => (
                  <SelectItem key={transform.value} value={transform.value}>
                    {transform.label}
                  </SelectItem>
                ))}
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

      <Separator />

      {/* Separator Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Separator</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="separator-style">Separator Style</Label>
            <Select
              value={props.separatorStyle}
              onValueChange={(value) => setProp((props: any) => props.separatorStyle = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {separatorStyles.map((style) => (
                  <SelectItem key={style.value} value={style.value}>
                    {style.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="separator">Separator Text/Symbol</Label>
            <Input
              id="separator"
              value={props.separator}
              onChange={(e) => setProp((props: any) => props.separator = e.target.value)}
              placeholder="e.g., &, and, ♥"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleNamesSettings;