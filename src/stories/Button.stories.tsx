import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { CustomButton } from './../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  argTypes: {
    type: {
      options: ['primary', 'default', 'dashed', 'text', 'link'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'inline-radio' },
    },
    danger: {
      options: ['false', 'true'],
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const PrimaryDefaultSize = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDefaultSize.args = {
  children: 'Button',
  size: 'default',
};


export const Circle = Template.bind({});
Circle.args = {
  shape:"circle",
  icon:<SearchOutlined />,
};


