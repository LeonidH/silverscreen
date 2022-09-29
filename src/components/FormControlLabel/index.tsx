import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@mui/material';

export interface SCFormControlLabelProps extends FormControlLabelProps {}

export const SCFormControlLabel = (props: SCFormControlLabelProps) => (
  <FormControlLabel {...props} />
);
