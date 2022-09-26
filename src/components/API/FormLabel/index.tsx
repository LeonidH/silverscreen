import { FormLabel, FormLabelProps } from '@mui/material';
import React from 'react';

interface SCFormLabelProps extends FormLabelProps {}

export const SCFormLabel = (props: SCFormLabelProps) => (
    <FormLabel {...props} />
);
