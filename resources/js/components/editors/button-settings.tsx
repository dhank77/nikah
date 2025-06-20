import React from 'react';
import { useNode } from '@craftjs/core';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props: { text, size, variant, color, backgroundColor, borderRadius },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4 p-4">
      <div>
        <Label htmlFor="text">Teks Button</Label>
        <Input
          id="text"
          value={text}
          onChange={(e) =>
            setProp((props: { text: string; }) => {
              props.text = e.target.value;
            })
          }
          placeholder="Masukkan teks button..."
        />
      </div>

      <div>
        <Label htmlFor="size">Ukuran</Label>
        <Select
          value={size}
          onValueChange={(value) =>
            setProp((props: { size: string; }) => {
              props.size = value;
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih ukuran" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Kecil</SelectItem>
            <SelectItem value="medium">Sedang</SelectItem>
            <SelectItem value="large">Besar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="variant">Varian</Label>
        <Select
          value={variant}
          onValueChange={(value) =>
            setProp((props: { variant: string; }) => {
              props.variant = value;
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih varian" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="primary">Primary</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="color">Warna Teks</Label>
        <Input
          id="color"
          type="color"
          value={color}
          onChange={(e) =>
            setProp((props: { color: string; }) => {
              props.color = e.target.value;
            })
          }
        />
      </div>

      <div>
        <Label htmlFor="backgroundColor">Warna Latar</Label>
        <Input
          id="backgroundColor"
          type="color"
          value={backgroundColor}
          onChange={(e) =>
            setProp((props: { backgroundColor: string; }) => {
              props.backgroundColor = e.target.value;
            })
          }
        />
      </div>

      <div>
        <Label htmlFor="borderRadius">Border Radius</Label>
        <Input
          id="borderRadius"
          type="number"
          value={borderRadius}
          onChange={(e) =>
            setProp((props: { borderRadius: number; }) => {
              props.borderRadius = parseInt(e.target.value) || 0;
            })
          }
          min="0"
          max="50"
        />
      </div>
    </div>
  );
};

export default ButtonSettings;