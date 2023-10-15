import axios from 'axios';

import { BASE_URL } from '../variables';
import { Image, GetTagResponse, DefaultTag, DefaultImage } from '../types';

interface RandomByTagProps {
  tag: string;
}

/**
 * Retrieve a random image by tag, which can be either safe for work (SFW) or not safe for work (NSFW).
 * @param {string} tag - The tag text to search.
 * @returns {Image} The randomly selected image.
 */
async function randomByTag({ tag }: RandomByTagProps): Promise<Image> {
  const url = BASE_URL + '/random-image';

  const { data: tagData } = await axios.get<GetTagResponse>(BASE_URL + '/tags', {
    params: {
      limit: 4000,
    },
  });

  const tags: DefaultTag[] = tagData.tags;

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
}

export { randomByTag };
