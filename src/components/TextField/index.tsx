import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export type SCTextFieldProps = TextFieldProps & {};

export const SCTextField = (props: SCTextFieldProps) => (
  <TextField {...props} />
);
