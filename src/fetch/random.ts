import axios from 'axios';

import { BASE_URL } from '../variables';
import { Image, DefaultImage } from '../types';

/**
 * Get random Image sfw/nsfw.
 * @returns {Image}
 */
const random = async (): Promise<Image> => {
  const url = BASE_URL + '/random-image';

  const { data } = await axios.get<DefaultImage>(url);

  const { url: imageUrl, size, isNsfw } = data;

  return {
    url: imageUrl,
    size,
    isNsfw,
  } as Image;
};

export { random };
