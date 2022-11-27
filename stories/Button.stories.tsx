import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const GeneralButton = Template.bind({});

GeneralButton.args = {
    title: 'Button',
};
