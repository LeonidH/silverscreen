import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from 'silverscreen';

export default {
  title: 'Modules/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmitHandler: { action: 'submitted' }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
