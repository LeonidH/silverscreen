import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface SCButtonProps extends ButtonProps {}

export const SCButton = (props: SCButtonProps) => <Button {...props} />;
