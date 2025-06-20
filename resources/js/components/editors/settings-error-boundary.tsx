/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  children: ReactNode;
  componentName?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class SettingsErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Settings component error:', {
      error,
      errorInfo,
      componentName: this.props.componentName
    });
    
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-200">
                Error di Pengaturan {this.props.componentName || 'Komponen'}
              </h4>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                Terjadi kesalahan saat memuat pengaturan komponen ini.
              </p>
              
              {this.state.error && (
                <details className="mt-2">
                  <summary className="text-xs text-red-600 dark:text-red-400 cursor-pointer hover:text-red-800 dark:hover:text-red-200">
                    Detail Error
                  </summary>
                  <div className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 rounded text-xs font-mono text-red-800 dark:text-red-200 overflow-auto">
                    <div className="font-semibold">Error:</div>
                    <div className="mb-2">{this.state.error.message}</div>
                    {this.state.error.stack && (
                      <>
                        <div className="font-semibold">Stack Trace:</div>
                        <pre className="whitespace-pre-wrap text-xs">
                          {this.state.error.stack}
                        </pre>
                      </>
                    )}
                  </div>
                </details>
              )}
              
              <div className="mt-3 flex space-x-2">
                <Button 
                  onClick={this.handleReset}
                  variant="outline"
                  size="sm"
                  className="text-red-700 border-red-300 hover:bg-red-100 dark:text-red-300 dark:border-red-700 dark:hover:bg-red-900/30"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Coba Lagi
                </Button>
              </div>
              
              <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                <p>Tips untuk mengatasi:</p>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  <li>Pilih komponen lain terlebih dahulu</li>
                  <li>Refresh halaman browser</li>
                  <li>Periksa console untuk detail error</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook untuk wrapping settings component
export const withSettingsErrorBoundary = (
  SettingsComponent: React.ComponentType<any>,
  componentName?: string
) => {
  return (props: any) => (
    <SettingsErrorBoundary componentName={componentName}>
      <SettingsComponent {...props} />
    </SettingsErrorBoundary>
  );
};