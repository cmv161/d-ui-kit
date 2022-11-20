import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  CustomButton  from '../src/CustomButton/CustomButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color:'green',
  children: '6666666666666666'
};



export const Large = Template.bind({});
Large.args = {
  color:'blue',
  children: '6666666666666666'
};

export const Small = Template.bind({});
Small.args = {
  big:true,
  children: '6666666666666666'

};
