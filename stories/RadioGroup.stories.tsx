import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';

import { RadioGroup } from '../src';
import { RadioButton } from '../src';
import { Radio } from '../src';
import { Space } from '../src';
import RadioGroupDoc from './doc/RadioGroupDoc';

export default {
    title: 'Example/Radio',
    component: RadioGroup,
    subcomponents: { RadioButton },
    argTypes: {
        size: {
            options: ['default', 'small', 'large'],
            control: { type: 'inline-radio' },
        },
        disabled: {
            options: [true, false],
            control: { type: 'inline-radio' },
        },
        children: {
            control: { type: 'check' },
        },
    },

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <RadioGroupDoc />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        },
    },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const GeneralRadioButton = Template.bind({});

GeneralRadioButton.args = {
    children: (
        <>
            <RadioButton value='a'>Button</RadioButton>
            <RadioButton value='b'>Button</RadioButton>
            <RadioButton value='c'>Button</RadioButton>
            <RadioButton value='d'>Button</RadioButton>
        </>
    ),
};

export const GeneralRadio = Template.bind({});
GeneralRadio.args = {
    children: (
        <>
            <Radio value='a'>Radio button</Radio>
            <Radio value='b'>Radio button</Radio>
            <Radio value='c'>Radio button</Radio>
            <Radio value='d'>Radio button</Radio>
        </>
    ),
};

export const GeneralRadioVertical = Template.bind({});
GeneralRadioVertical.args = {
    children: (
        <Space direction={'vertical'}>
            <Radio value='a'>Radio button</Radio>
            <Radio value='b'>Radio button</Radio>
            <Radio value='c'>Radio button</Radio>
            <Radio value='d'>Radio button</Radio>
        </Space>
    ),
};