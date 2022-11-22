import React, { FC } from 'react';
import AntRadio from 'antd/lib/radio/';

export interface RadioProps {
    children: string | number;
    value: string | number;
    disabled?: boolean;
}

const Radio: FC<RadioProps> = ({ children, ...props }) => {
    return <AntRadio {...props}>{children}</AntRadio>;
};

export default Radio;