import React, { useEffect, useState } from 'react';
import { Gallery, GalleryMedia } from '../../modules';
import { IMedia } from '../../types';
import axios from 'axios';
import { SCCircularProgress } from '../../components';

export interface GalleryPageProps {
  limit?: number | string;
  token?: string;
}

export const GalleryPage = ({ limit, token }: GalleryPageProps) => {
  const [feeds, setFeedsData] = useState([] as IMedia[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,username,timestamp,caption,media_url,media_type,permalink,thumbnail_url&limit=${limit}&access_token=${token}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data as IMedia[]);
            setIsLoading(false);
          });
      } catch (err) {
        console.log('error', err);
      }
    }

    fetchInstagramPost();
    return () => {
      abortController.abort();
    };
  }, [token]);

  return (
    <React.Fragment>
      {isLoading ? (
        <SCCircularProgress />
      ) : (
        <Gallery
          medias={feeds.map((feed: IMedia) => {
            return {
              id: feed.id,
              caption: feed.caption,
              mediaType: feed.media_type,
              mediaUrl: feed.media_url,
              permalink: feed.permalink,
              thumbnailUrl: feed.thumbnail_url,
              timestamp: feed.timestamp,
              username: feed.username
            } as unknown as GalleryMedia;
          })}
          title='Впечатления'
        />
      )}
    </React.Fragment>
  );
};
