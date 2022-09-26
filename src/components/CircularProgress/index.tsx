import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

export interface SCCircularProgressProps extends CircularProgressProps {}

export const SCCircularProgress = (props: SCCircularProgressProps) => (
  <CircularProgress {...props} />
);
