import { Box, Divider } from '@mui/material';
import React from 'react';
import {
  SCCameraAltIcon,
  SCCard,
  SCMedia,
  SCVideoCameraFrontIcon,
  SCWebStoriesIcon
} from '../../components';

import css from './styles.module.scss';

export enum GalleryMediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL'
}

export interface GalleryMedia {
  id?: string;
  caption: string;
  mediaType: GalleryMediaType;
  mediaUrl: string;
  permalink?: string;
  thumbnailUrl?: string;
  timestamp?: string;
  username?: string;
}

export interface GalleryProps {
  title: string;
  titleColor?: string;
  titleFontSize?: string | number;
  backgroundColor?: string;
  maxWidth?: string | number;
  rowHeight?: string | number;
  rowLength?: number;
  medias: GalleryMedia[];
}

export const Gallery = ({
  title,
  medias,
  titleColor = '#ffffff',
  titleFontSize = 16,
  backgroundColor = '#1e2126',
  maxWidth = 700,
  rowHeight = 200,
  rowLength = 5
}: GalleryProps) => {
  const getMediaTypeIcon = (mediaType: GalleryMediaType) => {
    if (mediaType === GalleryMediaType.CAROUSEL) {
      return <SCWebStoriesIcon sx={{ color: 'white' }} />;
    }

    if (mediaType === GalleryMediaType.VIDEO) {
      return <SCVideoCameraFrontIcon sx={{ color: 'white' }} />;
    }

    return <SCCameraAltIcon sx={{ color: 'white' }} />;
  };

  return (
    <div style={{ backgroundColor, maxWidth }}>
      <div
        className={css.title}
        style={{ color: titleColor, fontSize: titleFontSize }}
      >
        {title}
      </div>
      <Divider />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${rowLength}, 1fr)`,
          paddingTop: 2
        }}
      >
        {medias.length &&
          medias.map((media) => (
            <div key={media.mediaUrl}>
              <SCCard sx={{ borderRadius: 0, backgroundColor: 'transparent' }}>
                <SCMedia
                  datatype='img'
                  mediaTypeIcon={getMediaTypeIcon(media.mediaType)}
                  image={media.mediaUrl}
                  sx={{
                    height: rowHeight
                  }}
                />
              </SCCard>
            </div>
          ))}
      </Box>
    </div>
  );
};
