import axios from 'axios';

import { BASE_URL } from '../variables';
import { ImageContentResponse, GetImageResponse } from '../types';

interface ImageProps {
  page?: number;
  nsfw?: boolean;
  limit?: number;
  q?: string;
}

/**
 * Fetch images in the application.
 * @param {number} page - Page number (minimum: 1).
 * @param {boolean} nsfw - Specify if the image is NSFW or SFW.
 * @param {number} limit - Maximum number of images to retrieve.
 * @param {string} q - Tag ID to search.
 * @returns {ImageContentResponse} An object with 'page', 'totalPage', 'hasNext', and 'data'.
 */
async function images(imageProps?: ImageProps | null): Promise<ImageContentResponse> {
  const page = imageProps ? (imageProps.page < 1 ? 1 : imageProps.page) : 1;
  const nsfw = imageProps ? imageProps.nsfw : false;
  const limit = imageProps ? imageProps.limit : 10;
  const q = imageProps ? imageProps.q : '';

  const url = BASE_URL + '/image/' + page;

  const { data } = await axios.get<GetImageResponse>(url, {
    params: {
      q,
      limit,
      nsfw,
    },
  });

  const content = data.content;

  return {
    page: content.page,
    totalPage: content.totalPage,
    hasNext: content.hasNext,
    data: content.data.map((image) => ({
      id: image.id,
      url: image.url,
      size: image.size,
      isNsfw: image.isNsfw,
    })),
  } as ImageContentResponse;
}

export { images };
