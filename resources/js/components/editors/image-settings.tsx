import React from 'react';
import { useNode } from '@craftjs/core';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const ImageSettings = () => {
    const {
        actions: { setProp },
        props: { src, alt, width, height, borderRadius, objectFit, border, shadow },
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="space-y-4 p-4">
            <div>
                <Label htmlFor="src">URL Gambar</Label>
                <Input
                    id="src"
                    value={src}
                    onChange={(e) =>
                        setProp((props: { src: string }) => {
                            props.src = e.target.value;
                        })
                    }
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div>
                <Label htmlFor="alt">Alt Text</Label>
                <Input
                    id="alt"
                    value={alt}
                    onChange={(e) =>
                        setProp((props: { alt: string }) => {
                            props.alt = e.target.value;
                        })
                    }
                    placeholder="Deskripsi gambar"
                />
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Label htmlFor="width">Lebar</Label>
                    <Input
                        id="width"
                        type="number"
                        value={width}
                        onChange={(e) =>
                            setProp((props: { width: number }) => {
                                props.width = parseInt(e.target.value) || 0;
                            })
                        }
                        min="50"
                        max="1000"
                    />
                </div>
                <div>
                    <Label htmlFor="height">Tinggi</Label>
                    <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) =>
                            setProp((props: { height: number }) => {
                                props.height = parseInt(e.target.value) || 0;
                            })
                        }
                        min="50"
                        max="1000"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="objectFit">Object Fit</Label>
                <Select
                    value={objectFit}
                    onValueChange={(value) =>
                        setProp((props: { objectFit: string }) => {
                            props.objectFit = value;
                        })
                    }
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cover">Cover</SelectItem>
                        <SelectItem value="contain">Contain</SelectItem>
                        <SelectItem value="fill">Fill</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="scale-down">Scale Down</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="borderRadius">Border Radius</Label>
                <Input
                    id="borderRadius"
                    type="number"
                    value={borderRadius}
                    onChange={(e) =>
                        setProp((props: { borderRadius: number }) => {
                            props.borderRadius = parseInt(e.target.value) || 0;
                        })
                    }
                    min="0"
                    max="50"
                />
            </div>

            <div>
                <Label htmlFor="border">Border</Label>
                <Input
                    id="border"
                    value={border}
                    onChange={(e) =>
                        setProp((props: { border: string }) => {
                            props.border = e.target.value;
                        })
                    }
                    placeholder="contoh: 2px solid #000"
                />
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="shadow"
                    checked={shadow}
                    onCheckedChange={(checked) =>
                        setProp((props: { shadow: string | boolean }) => {
                            props.shadow = checked;
                        })
                    }
                />
                <Label htmlFor="shadow">Tampilkan Bayangan</Label>
            </div>
        </div>
    );
};

export default ImageSettings;