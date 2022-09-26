import { Grid, GridProps } from '@mui/material';
import React from 'react';

interface SCGridProps extends GridProps {}

export const SCGrid = (props: SCGridProps) => <Grid {...props} />;
