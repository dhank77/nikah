import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-red-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Terjadi Kesalahan
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Komponen mengalami error dan tidak dapat ditampilkan.
            </p>
            {this.state.error && (
              <details className="mt-2 text-xs text-gray-500">
                <summary className="cursor-pointer hover:text-gray-700">
                  Detail Error
                </summary>
                <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-left overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
          <Button 
            onClick={this.handleReset}
            variant="outline"
            size="sm"
          >
            Coba Lagi
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version untuk functional components
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};