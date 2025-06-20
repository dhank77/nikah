/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNode } from '@craftjs/core';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    props: { padding, background, margin, borderRadius, border, minHeight },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4 p-4">
      <div>
        <Label htmlFor="background">Warna Latar</Label>
        <Input
          id="background"
          type="color"
          value={background}
          onChange={(e) =>
            setProp((props: any) => {
              props.background = e.target.value;
            })
          }
        />
      </div>

      <div>
        <Label htmlFor="padding">Padding</Label>
        <Input
          id="padding"
          type="number"
          value={padding}
          onChange={(e) =>
            setProp((props: any) => {
              props.padding = parseInt(e.target.value) || 0;
            })
          }
          min="0"
          max="100"
        />
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Input
          id="margin"
          type="number"
          value={margin}
          onChange={(e) =>
            setProp((props: any) => {
              props.margin = parseInt(e.target.value) || 0;
            })
          }
          min="0"
          max="100"
        />
      </div>

      <div>
        <Label htmlFor="borderRadius">Border Radius</Label>
        <Input
          id="borderRadius"
          type="number"
          value={borderRadius}
          onChange={(e) =>
            setProp((props: any) => {
              props.borderRadius = parseInt(e.target.value) || 0;
            })
          }
          min="0"
          max="50"
        />
      </div>

      <div>
        <Label htmlFor="minHeight">Tinggi Minimum</Label>
        <Input
          id="minHeight"
          type="number"
          value={minHeight}
          onChange={(e) =>
            setProp((props: any) => {
              props.minHeight = parseInt(e.target.value) || 50;
            })
          }
          min="20"
          max="500"
        />
      </div>

      <div>
        <Label htmlFor="border">Border</Label>
        <Input
          id="border"
          value={border}
          onChange={(e) =>
            setProp((props: any) => {
              props.border = e.target.value;
            })
          }
          placeholder="contoh: 1px solid #000"
        />
      </div>
    </div>
  );
};

export default ContainerSettings;