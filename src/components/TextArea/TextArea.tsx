import React, { CSSProperties } from 'react';
import { TextAreaWrapperDivStyle, SupportMessageErrorDivStyle } from './style';

export type ResizeVariant = 'none' | 'both' | 'horizontal' | 'vertical' | 'inherit';

export type TextAreaProps = React.HTMLAttributes<HTMLTextAreaElement> & {
    disabled?: boolean;
    style?: CSSProperties | undefined;
    width?: string;
    height?: string;
    messageErrorText?: string;
    placeholder?: string | undefined;
    resize?: ResizeVariant;
    value?: string;
    onChange?: (value: string) => void;
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        { disabled, messageErrorText, value, placeholder, onChange, width, height, resize, style, onFocus },
        ref
    ) => {
        const textAreaWrapperProps = { width, height, resize, style };
        const textAreaProps = { placeholder, disabled, value, ref, onChange, style, onFocus };

        return (
            <TextAreaWrapperDivStyle {...textAreaWrapperProps}>
                <p>
                    <textarea {...textAreaProps}></textarea>
                </p>
                <SupportMessageErrorDivStyle>
                    {messageErrorText ? messageErrorText : ''}
                </SupportMessageErrorDivStyle>
            </TextAreaWrapperDivStyle>
        );
    }
);

export default TextArea;
