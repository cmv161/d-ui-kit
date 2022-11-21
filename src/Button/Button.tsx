import React, { FC, ReactComponentElement } from 'react';
import AntButton from 'antd/lib/button/';

export type TypeVariant = 'primary' | 'dashed' | 'text' | 'link';
export type SizeVariant = 'large' | 'small';
export type ShapeVariant = 'circle' | 'round';

export interface ButtonProps {
    children: string;
    size?: SizeVariant;
    type?: TypeVariant;
    shape?: ShapeVariant;
    danger?: boolean;
    block?: boolean;
    loading?: boolean;
    icon?: ReactComponentElement<any>;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
