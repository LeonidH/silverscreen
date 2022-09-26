import { FormHelperText, FormHelperTextProps } from '@mui/material';
import React from 'react';

interface SCFormHelperTextProps extends FormHelperTextProps {}

export const SCFormHelperText = (props: SCFormHelperTextProps) => (
    <FormHelperText {...props} />
);
