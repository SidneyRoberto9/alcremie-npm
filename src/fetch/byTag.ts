import axios from 'axios';

import { tags } from './tags';
import { BASE_URL } from '../variables';
import { Image, DefaultImage } from '../types';

/**
 * Get random Image sfw/nsfw, by tag.
 * @returns {Image}
 */
const randomByTag = async (tag: string): Promise<Image> => {
  const url = BASE_URL + '/random-image';
  const searchTag = tags.find((tagOpt) => tagOpt.name === tag);

  if (searchTag) {
    const { data } = await axios.get<DefaultImage>(url, {
      params: {
        q: searchTag.id,
      },
    });

    const { url: imageUrl, size, isNsfw } = data;

    return {
      url: imageUrl,
      size,
      isNsfw,
    } as Image;
  }

  const { data } = await axios.get<DefaultImage>(url);

  const { url: imageUrl, size, isNsfw } = data;

  return {
    url: imageUrl,
    size,
    isNsfw,
  } as Image;
};

export { randomByTag };
