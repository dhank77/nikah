import React from 'react';
import { useEditor } from '@craftjs/core';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Trash2 } from 'lucide-react';
import { SettingsErrorBoundary } from './settings-error-boundary';

export const SettingsPanel: React.FC = () => {
  const { selected, actions, query } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').first();
    return {
      selected: currentNodeId,
      node: currentNodeId && state.nodes[currentNodeId]
    };
  });

  const selectedNode = selected && query.node(selected).get();
  
  const getSettingsComponent = () => {
    try {
      return selectedNode?.related?.settings;
    } catch (error) {
      console.error('Error accessing settings component:', error);
      return null;
    }
  };
  
  const SettingsComponent = getSettingsComponent();

  return (
    <div className="p-4 h-full">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Pengaturan</h2>
      
      {selected ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                {selectedNode?.displayName || 'Komponen'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ID: {selected.slice(0, 8)}...
              </p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                actions.delete(selected);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          
          <Separator />
          
          {SettingsComponent ? (
            <SettingsErrorBoundary 
              componentName={selectedNode?.displayName}
              onReset={() => {
                // Force re-render by clearing and re-selecting
                const currentSelected = selected;
                actions.selectNode();
                setTimeout(() => {
                  if (currentSelected) {
                    actions.selectNode(currentSelected);
                  }
                }, 100);
              }}
            >
              <SettingsComponent />
            </SettingsErrorBoundary>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Tidak ada pengaturan tersedia untuk komponen ini.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🎯</div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Pilih komponen di canvas untuk mengedit propertinya.
          </p>
          <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            <p>Tips:</p>
            <ul className="mt-2 space-y-1">
              <li>• Klik komponen untuk memilih</li>
              <li>• Gunakan pengaturan untuk mengubah tampilan</li>
              <li>• Hapus komponen dengan tombol delete</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
