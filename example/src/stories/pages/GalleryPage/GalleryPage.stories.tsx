import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  GalleryPage
} from 'silverscreen';

export default {
  title: 'Pages/Gallery',
  component: GalleryPage,
  args: {
    limit: 10,
    token: ''
  }
} as ComponentMeta<typeof GalleryPage>;

const Template: ComponentStory<typeof GalleryPage> = (args) => (
  <GalleryPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  limit: 10,
  token: ''
};

