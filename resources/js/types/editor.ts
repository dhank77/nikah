export interface BaseEditorProps {
    id?: string;
    className?: string;
}

export interface TextProps extends BaseEditorProps {
    text: string;
    fontSize: number;
    color: string;
    fontWeight?: 'normal' | 'bold' | 'lighter';
    textAlign?: 'left' | 'center' | 'right';
}
