import React, {CSSProperties} from 'react';
import { PrimaryButtonStyle, DefaultButtonStyle } from './style';

export type TypeVariant = 'primary' | 'dashed' | 'text' | 'link' | 'default';
export type SizeVariant = 'large' | 'small' | 'default';

const renderTypeComponent = (kind: string) => {
    switch (kind) {
        case 'primary':
            return PrimaryButtonStyle;
            break;
        case 'default':
            return DefaultButtonStyle;
            break;
        //TODO: add components  'dashed' , 'text' , 'link'
        default:
            return DefaultButtonStyle;
    }
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    size?: SizeVariant;
    kind?: TypeVariant;
    type?: 'button' | 'submit';
    danger?: boolean;
    block?: boolean;
    disabled?: boolean;
    style: CSSProperties | undefined;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { kind = 'default', disabled, onClick, title } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && onClick) onClick(e);
    };
    const RenderTypeComponent = renderTypeComponent(kind);

    return (
        <RenderTypeComponent {...props} ref={ref} onClick={handleClick}>
            {title}
        </RenderTypeComponent>
    );
});

export default Button;
