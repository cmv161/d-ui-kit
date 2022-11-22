import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';

import { Button } from '../src';
import ButtonDoc from './doc/ButtonDoc';

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
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <ButtonDoc />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
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
