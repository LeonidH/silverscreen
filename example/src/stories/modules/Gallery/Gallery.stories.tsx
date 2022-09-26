import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Gallery,
  GalleryMedia,
  GalleryMediaType
} from 'silverscreen';

import 'silverscreen/dist/index.css';

import img_1 from './img/001.jpg';
import img_2 from './img/002.jpg';
import img_3 from './img/003.jpg';
import img_4 from './img/004.jpg';
import img_5 from './img/005.jpg';
import img_6 from './img/006.jpg';
import img_7 from './img/007.jpg';
import img_8 from './img/008.jpg';
import img_9 from './img/009.jpg';
import img_10 from './img/010.jpg';

export default {
  title: 'Modules/Gallery',
  component: Gallery,
  argTypes: {
    backgroundColor: { control: 'color' },
    titleColor: { control: 'color' },
  },
  args: {
    title: 'Впечатления',
    titleColor: '#ffffff',
    titleFontSize: 16,
    backgroundColor: '#1e2126',
    maxWidth: 700,
    rowHeight: 200,
    rowLength: 5
  }
} as ComponentMeta<typeof Gallery>;

const medias: GalleryMedia[] = [
  {
    caption: 'Item_1',
    mediaType: GalleryMediaType.VIDEO,
    mediaUrl: img_1
  },
  {
    caption: 'Item_2',
    mediaType: GalleryMediaType.IMAGE,
    mediaUrl: img_2
  },
  {
    caption: 'Item_3',
    mediaType: GalleryMediaType.CAROUSEL,
    mediaUrl: img_3
  },
  {
    caption: 'Item_4',
    mediaType: GalleryMediaType.IMAGE,
    mediaUrl: img_4
  },
  {
    caption: 'Item_5',
    mediaType: GalleryMediaType.CAROUSEL,
    mediaUrl: img_5
  },
  {
    caption: 'Item_6',
    mediaType: GalleryMediaType.VIDEO,
    mediaUrl: img_6
  },
  {
    caption: 'Item_7',
    mediaType: GalleryMediaType.CAROUSEL,
    mediaUrl: img_7
  },
  {
    caption: 'Item_8',
    mediaType: GalleryMediaType.CAROUSEL,
    mediaUrl: img_8
  },
  {
    caption: 'Item_9',
    mediaType: GalleryMediaType.VIDEO,
    mediaUrl: img_9
  },
  {
    caption: 'Item_10',
    mediaType: GalleryMediaType.CAROUSEL,
    mediaUrl: img_10
  }
];

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  medias
};
