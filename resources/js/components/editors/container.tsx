import { CraftComponent } from '@/types/craft';
import { useNode } from '@craftjs/core';
import React from 'react';

type ContainerProps = {
    padding: number;
    background: string;
    margin?: number;
    borderRadius?: number;
    border?: string;
    minHeight?: number;
    children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
    children,
    padding,
    background,
    margin = 0,
    borderRadius = 0,
    border = 'none',
    minHeight = 50,
}) => {
    const {
        connectors: { connect, drag },
        isSelected,
    } = useNode((state) => ({
        isSelected: state.events.selected,
    }));

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            style={{
                padding: `${padding}px`,
                margin: `${margin}px`,
                background,
                borderRadius: `${borderRadius}px`,
                border: isSelected ? '2px dashed #2563eb' : border,
                minHeight: `${minHeight}px`,
                position: 'relative',
                cursor: 'pointer',
            }}
        >
            {children || (
                <div
                    style={{
                        color: '#9ca3af',
                        textAlign: 'center',
                        padding: '20px',
                        fontSize: '14px',
                    }}
                >
                    Seret komponen ke sini
                </div>
            )}
        </div>
    );
};

const ContainerSettings = React.lazy(() => import('./container-settings'));
(Container as CraftComponent<ContainerProps>).craft = {
    displayName: 'Container',
    props: {
        padding: 20,
        background: '#ffffff',
        margin: 0,
        borderRadius: 0,
        border: 'none',
        minHeight: 50,
    },
    rules: {
        canMoveIn: () => true,
        canDrag: () => true,
    },
    related: {
        settings: ContainerSettings,
    },
};

export default Container;
