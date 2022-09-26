import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SCButton } from 'silverscreen'

import 'silverscreen/dist/index.css';

export default {
  title: 'Components/SCButton',
  component: SCButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' },
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
    },

  }
} as ComponentMeta<typeof SCButton>

const Template: ComponentStory<typeof SCButton> = (args) => (
  <SCButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'label'
}
