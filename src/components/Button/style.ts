import styled from 'styled-components';
import { color } from '../../theme/theme';
import { ButtonProps } from './Button';

const buttonHeight = (size: string | undefined) => {
    switch (size) {
        case 'large':
            return '40px';
            break;
        case 'small':
            return '24px';
            break;
        case 'default':
            return '32px';
            break;
        default:
            return '32px';
    }
};

const ButtonStyle = styled.button<ButtonProps>`
    font-family: 'Inter';
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid;
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ size }) => buttonHeight(size)};
    width: ${({ block }) => block && '100%'};
`;

const PrimaryButtonStyle = styled(ButtonStyle)<ButtonProps>`
    background-color: ${({ danger }) => (danger ? color.red5 : color.blue7)};
    border-color: ${({ danger }) => (danger ? color.red5 : color.blue7)};
    color: ${color.white1};

    &:hover {
        background-color: ${({ danger }) => (danger ? color.red4 : color.blue6)};
        border-color: ${({ danger }) => (danger ? color.red4 : color.blue6)};
    }

    &:active {
        background-color: ${({ danger }) => (danger ? color.red6 : color.blue8)};
        border-color: ${({ danger }) => (danger ? color.red6 : color.blue8)};
    }
`;

const DefaultButtonStyle = styled(ButtonStyle)<ButtonProps>`
    background-color: ${color.white1};
    border-color: ${({ danger }) => (danger ? color.red5 : color.gray11)};
    color: ${({ danger }) => (danger ? color.red5 : color.gray8)};
    background-color: ${color.white1};

    &:hover {
        color: ${({ danger }) => (danger ? color.red4 : color.blue6)};
        border-color: ${({ danger }) => (danger ? color.red5 : color.gray11)};
    }

    &:active {
        color: ${({ danger }) => (danger ? color.red6 : color.blue7)};
        border-color: ${({ danger }) => (danger ? color.red6 : color.blue8)};
    }
`;

export { PrimaryButtonStyle, DefaultButtonStyle };
