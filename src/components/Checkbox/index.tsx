import { Checkbox, CheckboxProps } from '@mui/material';
import React from 'react';

interface SCCheckboxProps extends CheckboxProps {}

export const SCCheckbox = (props: SCCheckboxProps) => <Checkbox {...props} />;
