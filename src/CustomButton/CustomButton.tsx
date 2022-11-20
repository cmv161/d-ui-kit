import React, { FC } from 'react';
// import 'custom.css'
import Button from 'antd/lib/button';
import styled from 'styled-components';

const Title = styled(Button)`
    // font-size: 1.5em;
    // text-align: center;
    // color: red;
    // width: 684px;
    // height: 632px;
`;

export type TypeVariant = 'primary' | 'dashed' | 'text' | 'link';

export interface CustomButton {
    children: string;
    type: TypeVariant;
}

const CustomButton: FC<CustomButton> = ({ children, ...props }) => {

    return <Button {...props}>{children}</Button>;
};

export default CustomButton;
