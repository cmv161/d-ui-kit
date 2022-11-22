import React, { FC } from 'react';
import AntRadio from 'antd/lib/radio/';
import styled from 'styled-components';

const RadioGroupStyle = styled(AntRadio.Group)`
    > * {
        &:first-child {
            border-radius: 6px 0px 0px 6px;
            margin-right: 20px;
        }
    }

    > * {
        &:last-child {
            border-radius: 0px 6px 6px 0px;
        }
    }

    > * {
        &:not(:first-child):not(:last-child) {
            margin-right: 20px;
        }
    }
`;

export type SizeVariant = 'large' | 'small';
export type ButtonStyle = 'outline' | 'solid';

export interface RadioProps {
    children: JSX.Element | JSX.Element[];
    size?: SizeVariant;
    buttonStyle?: ButtonStyle;
}

const RadioGroup: FC<RadioProps> = ({ children, ...props }) => {
    return <RadioGroupStyle {...props}>{children}</RadioGroupStyle>;
};

export default RadioGroup;
