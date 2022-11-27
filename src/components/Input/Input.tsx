import React, { CSSProperties, useState } from 'react';
import { NumberFormatValues, SourceInfo } from 'react-number-format';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import {
    InputBoxStyle,
    InputWrapperStyle,
    InputStyle,
    ShowPasswordStyle,
    InputBoxErrorStyle,
    NumberFormatStyle,
    InputBoxCloseCircleStyle,
    InputBoxImageStyle,
} from './style';
import closeCircle from './close-circle.svg';

const types = ['text', 'number', 'phone', 'money', 'percent', 'custom'] as const;

type InputType = typeof types[number];

type ObligatoryInputProps = {
    value: string;
};

type ExtraInputProps = React.HTMLAttributes<HTMLInputElement> & {
    name?: string;
    type?: InputType;
    format?: string;
    decimalScale?: number;
    placeholder?: string;
    image?: string;
    errorBorder?: boolean | string;
    errorText?: string;
    password?: boolean;
    readOnly?: boolean;
    autoComplete?: 'on' | 'off';
    disabled?: boolean;
    style?: CSSProperties | undefined;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: string) => void;
};

const Input = React.forwardRef<HTMLInputElement, ObligatoryInputProps & ExtraInputProps>(
    (
        {
            value,
            name,
            type = 'text',
            format,
            decimalScale,
            placeholder,
            image,
            errorBorder = false,
            errorText,
            password = false,
            readOnly = false,
            autoComplete = 'on',
            disabled = false,
            style = {},
            onChange,
            onKeyPress,
            onFocus,
            onBlur,
        },
        ref
    ) => {
        const [allowEmptyFormatting, setAllowEmptyFormatting] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(e.target.value);
            }
        };

        const handleNumberChange = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
            if (sourceInfo.source === 'event' && onChange) {
                onChange(values.value);
            }
        };

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setAllowEmptyFormatting(true);

            if (onFocus) {
                onFocus(e);
            }
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setAllowEmptyFormatting(false);

            if (onBlur) {
                onBlur(e);
            }
        };

        let inputOptions = {
            type: password && !showPassword ? 'password' : 'text',
            value,
            name,
            placeholder,
            readOnly,
            autoComplete,
            disabled,
            errorBorder,
            onKeyPress,
            image,
            style,
            onFocus: handleFocus,
            onBlur: handleBlur,
        } as Record<string, any>;

        if (type === 'text') {
            inputOptions.onChange = handleChange;
        } else {
            inputOptions = {
                ...inputOptions,
                onValueChange: handleNumberChange,
                isNumericString: true,
                allowEmptyFormatting,
            };

            switch (type) {
                case 'number':
                    if (format) inputOptions.format = format;
                    break;
                case 'phone':
                    inputOptions.format = '+7 ### ### ## ##';
                    break;
                case 'money':
                    inputOptions = {
                        ...inputOptions,
                        // suffix: ' ₽',
                        thousandSeparator: ' ',
                        fixedDecimalScale: true,
                        decimalScale: 2,
                    };
                    break;
                case 'percent':
                    inputOptions = {
                        ...inputOptions,
                        suffix: ' %',
                        fixedDecimalScale: true,
                        decimalScale: decimalScale || 2,
                        allowNegative: false,
                        isAllowed: ({ floatValue }: NumberFormatValues) => (floatValue || 0) <= 100,
                    };
                    break;
                case 'custom':
                    break;
            }
        }

        const cleanInput = (e: React.MouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            if (onChange) {
                onChange('');
            }
        };

        return (
            <InputBoxStyle>
                <InputWrapperStyle>
                    {image && (
                        <InputBoxImageStyle>
                            <img src={image} alt='image' />
                        </InputBoxImageStyle>
                    )}
                    {type === 'text' ? (
                        <>
                            <InputStyle {...inputOptions} ref={ref} />

                            {password && (
                                <ShowPasswordStyle onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </ShowPasswordStyle>
                            )}
                        </>
                    ) : (
                        <NumberFormatStyle {...inputOptions} getInputRef={ref} />
                    )}

                    {errorBorder && !password && (
                        <InputBoxCloseCircleStyle onClick={cleanInput}>
                            <img src={closeCircle} alt='' />
                        </InputBoxCloseCircleStyle>
                    )}
                </InputWrapperStyle>
                {errorText && <InputBoxErrorStyle>{errorText}</InputBoxErrorStyle>}
            </InputBoxStyle>
        );
    }
);

export default Input;
export type { ExtraInputProps };