import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';

import { Button } from '../src';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        type: {
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['default', 'small', 'large'],
            control: { type: 'inline-radio' },
        },
        shape: {
            control: { type: 'inline-radio' },
        },
        icon: {
            control: { type: 'check' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const GeneralButton = Template.bind({});

GeneralButton.args = {
    children: 'Button',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    children: 'Button',
    icon: <SearchOutlined />,
};
