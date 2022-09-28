import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReceivingCodeViaSmsForm } from 'silverscreen';

export default {
  title: 'Modules/FromReceivingCodeViaSms',
  component: ReceivingCodeViaSmsForm,
  argTypes: {
    onSubmitHandler: { action: 'submitted' }
  }
} as ComponentMeta<typeof ReceivingCodeViaSmsForm>;

const Template: ComponentStory<typeof ReceivingCodeViaSmsForm> = (args) => (
  <ReceivingCodeViaSmsForm {...args} />
);

export const Primary = Template.bind({});
