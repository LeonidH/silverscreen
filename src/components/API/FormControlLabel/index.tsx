import { FormControlLabel, FormControlLabelProps } from '@mui/material';
import React from 'react';

interface SCFormControlLabelProps extends FormControlLabelProps {}

export const SCFormControlLabel = (props: SCFormControlLabelProps) => (
    <FormControlLabel {...props} />
);
