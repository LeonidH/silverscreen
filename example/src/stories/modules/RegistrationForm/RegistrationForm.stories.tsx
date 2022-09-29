import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationForm } from 'silverscreen';

export default {
  title: 'Modules/RegistrationForm',
  component: RegistrationForm,
  argTypes: {
    onSubmitHandler: { action: 'submitted' }
  }
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => (
  <RegistrationForm {...args} />
);

export const Primary = Template.bind({});
