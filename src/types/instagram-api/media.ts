/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

export interface IMedia {
  caption: string;
  id: string;
  media_type: MediaType;
  media_url: string;
  permalink: string;
  thumbnail_url: string;
  timestamp: string;
  username: string;
}

export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL_ALBUM = 'CAROUSEL_ALBUM'
}
