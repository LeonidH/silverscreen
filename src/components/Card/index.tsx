import React from 'react';
import { Card, CardProps } from '@mui/material';

export interface SCCardProps extends CardProps {}

export const SCCard = (props: SCCardProps) => <Card {...props} />;
