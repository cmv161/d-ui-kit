import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../src';

const phone = require("./assets/phone.svg") as string;

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
    },

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const GeneralInput = Template.bind({});

GeneralInput.args = {};

export const InputWitchIcon = Template.bind({});
InputWitchIcon.args = {
    image: phone,
    type:'phone',
    placeholder:'+7'
};
export const InputPassword = Template.bind({});
InputPassword.args = {
    password: true,
    placeholder:'Пароль'
};