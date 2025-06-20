/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNode } from '@craftjs/core';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';

export const CardSettings = () => {
  const {
    actions: { setProp },
    props: { background, padding, borderRadius, shadow, border },
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

      <div className="flex items-center space-x-2">
        <Checkbox
          id="shadow"
          checked={shadow}
          onCheckedChange={(checked) =>
            setProp((props: any) => {
              props.shadow = checked;
            })
          }
        />
        <Label htmlFor="shadow">Tampilkan Bayangan</Label>
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
          placeholder="contoh: 1px solid #e5e7eb"
        />
      </div>
    </div>
  );
};