import axios from 'axios';

import { BASE_URL } from '../variables';
import { Image, DefaultImage } from '../types';

/**
 * Retrieve a random image, which can be either safe for work (SFW) or not safe for work (NSFW).
 * @returns {Image} The randomly selected image.
 */
async function random(): Promise<Image> {
  const url = BASE_URL + '/random-image';

  const { data } = await axios.get<DefaultImage>(url);

  const { url: imageUrl, size, isNsfw, id } = data;

  return {
    id,
    url: imageUrl,
    size,
    isNsfw,
  } as Image;
}

export { random };
