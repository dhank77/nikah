/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNode } from '@craftjs/core';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const TextSettings = () => {
  const {
    actions: { setProp },
    props: { text, fontSize, color, fontWeight, textAlign },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4 p-4">
      <div>
        <Label htmlFor="text">Teks</Label>
        <Input
          id="text"
          value={text}
          onChange={(e) =>
            setProp((props: any) => {
              props.text = e.target.value;
            })
          }
          placeholder="Masukkan teks..."
        />
      </div>

      <div>
        <Label htmlFor="fontSize">Ukuran Font</Label>
        <Input
          id="fontSize"
          type="number"
          value={fontSize}
          onChange={(e) =>
            setProp((props: any) => {
              props.fontSize = parseInt(e.target.value) || 16;
            })
          }
          min="8"
          max="72"
        />
      </div>

      <div>
        <Label htmlFor="color">Warna</Label>
        <Input
          id="color"
          type="color"
          value={color}
          onChange={(e) =>
            setProp((props: any) => {
              props.color = e.target.value;
            })
          }
        />
      </div>

      <div>
        <Label htmlFor="fontWeight">Ketebalan Font</Label>
        <Select
          value={fontWeight}
          onValueChange={(value) =>
            setProp((props: any) => {
              props.fontWeight = value;
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih ketebalan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="bold">Tebal</SelectItem>
            <SelectItem value="lighter">Tipis</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="textAlign">Perataan Teks</Label>
        <Select
          value={textAlign}
          onValueChange={(value) =>
            setProp((props: any) => {
              props.textAlign = value;
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih perataan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Kiri</SelectItem>
            <SelectItem value="center">Tengah</SelectItem>
            <SelectItem value="right">Kanan</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};