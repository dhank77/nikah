import React, { useState } from 'react';
import { useEditor } from '@craftjs/core';
import { Button } from '../ui/button';

import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Save, Upload, Eye, Edit, Download, Copy, Sun, Moon } from 'lucide-react';
import { Toggle } from '../ui/toggle';
import { useAppearance } from '@/hooks/use-appearance';

export const TopBar: React.FC = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  
  const { appearance, updateAppearance } = useAppearance();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [jsonData, setJsonData] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  const handleSave = () => {
    const json = query.serialize();
    setJsonData(JSON.stringify(json, null, 2));
    setSaveDialogOpen(true);
  };

  const handleLoad = () => {
    try {
      const parsedJson = JSON.parse(jsonData);
      actions.deserialize(parsedJson);
      setDialogOpen(false);
      setJsonData('');
    } catch {
      alert('Format JSON tidak valid!');
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonData);
    alert('JSON berhasil disalin ke clipboard!');
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'page-design.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Wedding Invitation Builder
          </h1>
          <div className="flex items-center space-x-2">
            <Toggle
              pressed={enabled}
              onPressedChange={(pressed) => {
                actions.setOptions(options => {
                  options.enabled = pressed;
                });
              }}
              className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
            >
              {enabled ? (
                <>
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Mode
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-1" />
                  Preview Mode
                </>
              )}
            </Toggle>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
            className="p-2"
          >
            {appearance === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-1" />
                Load
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Load Design dari JSON</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="json-input">Paste JSON Data:</Label>
                  <textarea
                    id="json-input"
                    className="w-full h-64 p-3 border border-gray-300 rounded-md font-mono text-sm"
                    value={jsonData}
                    onChange={(e) => setJsonData(e.target.value)}
                    placeholder="Paste your JSON data here..."
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Batal
                  </Button>
                  <Button onClick={handleLoad}>
                    Load Design
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Save Design sebagai JSON</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>JSON Data:</Label>
                  <textarea
                    className="w-full h-64 p-3 border border-gray-300 rounded-md font-mono text-sm"
                    value={jsonData}
                    readOnly
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                    Tutup
                  </Button>
                  <Button variant="outline" onClick={handleCopyJson}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button onClick={handleDownloadJson}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};