import React from 'react';
import { SvgIconProps } from '@mui/material';
import WebStoriesIcon from '@mui/icons-material/WebStories';

export interface SCWebStoriesIconProps extends SvgIconProps {}

export const SCWebStoriesIcon = (props: SCWebStoriesIconProps) => (
  <WebStoriesIcon {...props} />
);
