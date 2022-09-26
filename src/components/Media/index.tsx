import { CardMedia, CardMediaProps } from '@mui/material';
import React from 'react';

import css from './styles.module.scss';

export interface SCMediaProps extends CardMediaProps {
  mediaTypeIcon: React.ReactNode;
}

export const SCMedia = ({ mediaTypeIcon, ...props }: SCMediaProps) => {
  return (
    <div className={css.root}>
      <div className={css.media}>{mediaTypeIcon}</div>
      <CardMedia {...props} />
    </div>
  );
};
