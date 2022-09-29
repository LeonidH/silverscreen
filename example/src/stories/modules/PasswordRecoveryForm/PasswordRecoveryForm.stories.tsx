import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordRecoveryForm } from 'silverscreen';

export default {
  title: 'Modules/PasswordRecoveryForm',
  component: PasswordRecoveryForm,
  argTypes: {
    onSubmitHandler: { action: 'submitted' }
  }
} as ComponentMeta<typeof PasswordRecoveryForm>;

const Template: ComponentStory<typeof PasswordRecoveryForm> = (args) => (
  <PasswordRecoveryForm {...args} />
);

export const Primary = Template.bind({});
