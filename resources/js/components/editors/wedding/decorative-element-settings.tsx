import React from 'react';
import { useNode } from '@craftjs/core';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const DecorativeElementSettings: React.FC = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({
    props: node.data.props
  }));

  const elementTypes = [
    { value: 'hearts', label: 'Hearts (💕 ❤️ 💖)' },
    { value: 'rings', label: 'Rings (💍 ✨ 💍)' },
    { value: 'flowers', label: 'Flowers (🌸 🌺 🌸)' },
    { value: 'divider', label: 'Divider Line (❦)' },
    { value: 'ornament', label: 'Ornaments (❦ ✦ ❦)' },
    { value: 'border', label: 'Decorative Border' }
  ];

  const alignments = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ];

  const animations = [
    { value: 'none', label: 'No Animation' },
    { value: 'pulse', label: 'Pulse' },
    { value: 'bounce', label: 'Bounce' },
    { value: 'fade', label: 'Fade' }
  ];

  return (
    <div className="space-y-4">
      {/* Element Type Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Element Type</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="element-type">Decorative Type</Label>
            <Select
              value={props.elementType}
              onValueChange={(value) => setProp((props: any) => props.elementType = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {elementTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      {/* Appearance Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Appearance</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="size">Size</Label>
            <Input
              id="size"
              type="number"
              value={props.size}
              onChange={(e) => setProp((props: any) => props.size = parseInt(e.target.value))}
              min="12"
              max="120"
            />
          </div>

          <div>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              type="color"
              value={props.color}
              onChange={(e) => setProp((props: any) => props.color = e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="opacity">Opacity (%)</Label>
            <Input
              id="opacity"
              type="number"
              value={props.opacity}
              onChange={(e) => setProp((props: any) => props.opacity = parseInt(e.target.value))}
              min="0"
              max="100"
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
            <Label htmlFor="alignment">Alignment</Label>
            <Select
              value={props.alignment}
              onValueChange={(value) => setProp((props: any) => props.alignment = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {alignments.map((align) => (
                  <SelectItem key={align.value} value={align.value}>
                    {align.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="spacing">Spacing (px)</Label>
            <Input
              id="spacing"
              type="number"
              value={props.spacing}
              onChange={(e) => setProp((props: any) => props.spacing = parseInt(e.target.value))}
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Animation Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Animation</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="animation">Animation Type</Label>
            <Select
              value={props.animation}
              onValueChange={(value) => setProp((props: any) => props.animation = value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {animations.map((anim) => (
                  <SelectItem key={anim.value} value={anim.value}>
                    {anim.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div>
        <h4 className="text-sm font-medium mb-3">Preview</h4>
        <div 
          className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800"
          style={{ textAlign: props.alignment }}
        >
          <div 
            style={{
              fontSize: `${props.size}px`,
              color: props.color,
              opacity: props.opacity / 100,
            }}
          >
            {props.elementType === 'hearts' && '💕 ❤️ 💖 ❤️ 💕'}
            {props.elementType === 'rings' && '💍 ✨ 💍'}
            {props.elementType === 'flowers' && '🌸 🌺 🌸 🌺 🌸'}
            {props.elementType === 'divider' && '❦'}
            {props.elementType === 'ornament' && '❦ ✦ ❦ ✦ ❦'}
            {props.elementType === 'border' && '✦ ❦ ✦ ❦ ✦ ❦ ✦'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeElementSettings;