import styled from 'styled-components';
import { color } from '../../Theme/theme';
import { TextAreaProps } from './Textarea';

const TextAreaWrapperDivStyle = styled.div<TextAreaProps>`
    margin-top: 18px;

    p {
        margin-bottom: 0px;
    }

    textarea {
        width: ${({ width }) => (width ? width : '524px')};
        height: ${({ height }) => (height ? height : '64px')};
        resize: ${({ resize }) => (resize ? resize : 'both')};
        border-radius: 4px;
        border: 1px solid ${color.gray5};
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: ${color.gray12};
        padding-top: 5px;
        padding-left: 12px;
        font-style: normal;

        &:focus {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            border: 2px solid ${color.blue7};
        }

        &::placeholder {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: ${color.gray7};
        }
        &:disabled {
            background-color: ${color.NPGray11};
        }
    }
`;

const SupportMessageErrorDivStyle = styled.div`
    color: ${color.red6};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    height: 20px;
`;
export { TextAreaWrapperDivStyle, SupportMessageErrorDivStyle };
