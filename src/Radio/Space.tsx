import React, { FC } from 'react';
import AntSpace from 'antd/lib/space/';

export interface RadioProps {
    children: JSX.Element | JSX.Element[];
    direction: 'vertical' | 'horizontal';
}

const Space: FC<RadioProps> = ({ children, ...props }) => {
    return <AntSpace {...props}>{children}</AntSpace>;
};

export default Space;