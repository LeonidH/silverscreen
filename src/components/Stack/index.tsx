import React from 'react';
import { Stack, StackProps } from '@mui/material';

export interface SCStackProps extends StackProps {}

export const SCStack = (props: SCStackProps) => <Stack {...props} />;
