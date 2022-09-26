import React from 'react';

import { SvgIconProps } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export interface SCCameraAltIconProps extends SvgIconProps {}

export const SCCameraAltIcon = (props: SCCameraAltIconProps) => (
  <CameraAltIcon {...props} />
);
