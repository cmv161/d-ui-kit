import styled from 'styled-components';
import { color } from '../../theme/theme';
import NumberFormat from 'react-number-format';
import { ExtraInputProps } from './Input';

const InputBoxStyle = styled.div`
    margin-top: 24px;
    font-size: 14px;
    color: ${color.gray7};
    width: 320px;
    height: 40px;
`;

const InputWrapperStyle = styled.div`
    position: relative;
    height: 40px;
    color: ${color.gray8};
`;

const ShowPasswordStyle = styled.div`
    left: auto;
    right: 16px;
    cursor: pointer;
    position: absolute;
    top: 55%;
    transform: translate(0, -50%);
`;

const InputStyle = styled.input<ExtraInputProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 12px 8px ${({ image }) => (image ? '34px' : '12px')};
    border: 1px solid ${({ errorBorder }) => (errorBorder ? color.red6 : color.gray5)};
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${color.gray12};
    outline: none;
    &:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 2px solid ${color.blue7};
    }
    &:hover:disabled {
        border-color: ${color.gray5};
    }
`;

const NumberFormatStyle = styled(NumberFormat)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 12px 8px 34px;
    border: 1px solid ${({ errorBorder }) => (errorBorder ? color.red6 : color.gray5)};
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${color.gray12};
    outline: none;
    &:focus {
        border: 2px solid ${color.blue7};
    }
    &:hover:disabled {
        border-color: ${color.gray5};
    }
`;

const InputBoxErrorStyle = styled.div`
    color: ${color.red6};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;

const InputBoxCloseCircleStyle = styled.div`
    right: 13px;
    position: absolute;
    top: 55%;
    transform: translate(0, -50%);
    cursor: pointer;
    img {
        width: 14px;
        height: 14px;
    }
`;

const InputBoxImageStyle = styled.div`
    position: absolute;
    top: 55%;
    transform: translate(0, -50%);
    left: 16px;
    img {
        width: 14px;
        height: 14px;
        vertical-align: text-top;
    }
`;

export {
    InputBoxStyle,
    InputWrapperStyle,
    InputStyle,
    ShowPasswordStyle,
    InputBoxErrorStyle,
    NumberFormatStyle,
    InputBoxCloseCircleStyle,
    InputBoxImageStyle,
};
