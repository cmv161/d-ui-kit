import React, { FC } from 'react';
import AntRadio from 'antd/lib/radio/';

export interface RadioProps {
    children: string | number;
    value: string | number;
    disabled?: boolean;
}

const RadioButton: FC<RadioProps> = ({ children, ...props }) => {
    return <AntRadio.Button {...props}>{children}</AntRadio.Button>;
};

export default RadioButton;