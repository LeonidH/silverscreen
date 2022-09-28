import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SCTextField } from 'silverscreen'

import 'silverscreen/dist/index.css';

export default {
  title: 'Components/SCTextField',
  component: SCTextField,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
    },

  }
} as ComponentMeta<typeof SCTextField>

const Template: ComponentStory<typeof SCTextField> = (args) => (
  <SCTextField {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Label',
  variant: 'filled',
  color: 'primary'
}
