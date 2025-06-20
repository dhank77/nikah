/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CraftComponent<T = any> extends React.FC<T> {
    craft?: {
      displayName: string;
      props?: Record<string, any>;
      rules?: {
        canMoveIn?: () => boolean;
        canDrag?: () => boolean;
      };
      related?: {
        settings?: React.ComponentType;
      };
    };
  }