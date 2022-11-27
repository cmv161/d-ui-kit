import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from '../src';

export default {
    title: 'Example/TextArea',
    component: TextArea,
    argTypes: {
        placeholder: {
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const GeneralTextArea = Template.bind({});

GeneralTextArea.args = {};
